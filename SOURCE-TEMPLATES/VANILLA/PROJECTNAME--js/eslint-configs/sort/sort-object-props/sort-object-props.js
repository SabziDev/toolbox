/* eslint-disable unicorn/prefer-includes-over-repeated-comparisons */
/* eslint-disable unicorn/no-break-in-nested-loop */
/* eslint-disable max-lines-per-function */
/* eslint-disable unicorn/consistent-function-scoping */

import {
  eventHandlerOrder,
  staticPropertiesOrder,
} from "../properties-order.js";

const sortObjectProps = {
  rules: {
    "sort-object-props": {
      meta: {
        type: "suggestion",
        fixable: "code",
        messages: {
          wrongOrder: "Object properties should be ordered!",
          wrongDestructure: "Destructured properties should be ordered!",
          wrongParams: "Function parameters should be ordered!",
        },
      },

      create(context) {
        const { sourceCode } = context;
        const firstGroupSet = new Set(staticPropertiesOrder);

        const isEventHandler = (name) => /^on[A-Z]/.test(name);

        const getEventPriority = (handlerName) => {
          const index = eventHandlerOrder.indexOf(handlerName);

          return index === -1 ? 999 : index;
        };

        const getKeyName = (prop) => {
          if (!prop) return "";
          if (prop.type === "Property") {
            return prop.key?.name || prop.key?.value || "";
          }
          if (prop.type === "Identifier") {
            return prop.name;
          }

          return "";
        };

        const isSpread = (item) => {
          return (
            item.type === "SpreadElement" ||
            item.type === "RestElement" ||
            item.type === "ExperimentalRestProperty"
          );
        };

        const sortItems = (items) => {
          if (items.length === 0) return items;

          const firstGroup = staticPropertiesOrder.flatMap((name) =>
            items.filter((item) => getKeyName(item) === name),
          );

          const otherProps = items.filter((item) => {
            const keyName = getKeyName(item);

            return (
              !firstGroupSet.has(keyName) &&
              !isEventHandler(keyName) &&
              !["className", "style"].includes(keyName)
            );
          });

          const eventHandlers = items
            .filter((item) => {
              const keyName = getKeyName(item);

              return isEventHandler(keyName);
            })
            .sort((a, b) => {
              const priorityA = getEventPriority(getKeyName(a));
              const priorityB = getEventPriority(getKeyName(b));
              if (priorityA === 999 && priorityB === 999) return 0;

              return priorityA - priorityB;
            });

          const classStyle = items
            .filter((item) => {
              const keyName = getKeyName(item);

              return ["className", "style"].includes(keyName);
            })
            .sort((a, b) => {
              const nameA = getKeyName(a);
              const nameB = getKeyName(b);
              if (nameA === "className" && nameB === "style") return -1;
              if (nameA === "style" && nameB === "className") return 1;

              return 0;
            });

          return [
            ...firstGroup,
            ...otherProps,
            ...eventHandlers,
            ...classStyle,
          ];
        };

        const sortPropertiesWithSpreadBarriers = (properties) => {
          const result = [];
          let currentChunk = [];

          for (const prop of properties) {
            if (isSpread(prop)) {
              if (currentChunk.length > 0) {
                const sortedChunk = sortItems(currentChunk);
                result.push(...sortedChunk);
                currentChunk = [];
              }

              result.push(prop);
            } else {
              currentChunk.push(prop);
            }
          }

          if (currentChunk.length > 0) {
            const sortedChunk = sortItems(currentChunk);
            result.push(...sortedChunk);
          }

          return result;
        };

        return {
          ObjectExpression(node) {
            const { properties } = node;
            if (properties.length <= 1) return;

            const sorted = sortPropertiesWithSpreadBarriers(properties);

            let isNeedsFix = false;

            for (const [i, prop] of properties.entries()) {
              if (prop === sorted[i]) {
                continue;
              }

              isNeedsFix = true;
              break;
            }

            if (!isNeedsFix) return;

            context.report({
              node,
              messageId: "wrongOrder",
              fix(fixer) {
                const sortedText = sorted
                  .map((p) => sourceCode.getText(p))
                  .join(", ");

                return fixer.replaceText(node, `{ ${sortedText} }`);
              },
            });
          },

          ObjectPattern(node) {
            const { properties } = node;
            if (!properties || properties.length <= 1) return;

            const nonSpreads = properties.filter((p) => !isSpread(p));
            const spreads = properties.filter((p) => isSpread(p));

            const sortedNonSpreads = sortItems(nonSpreads);
            const sorted = [...sortedNonSpreads, ...spreads];

            let isNeedsFix = false;

            for (const [i, prop] of properties.entries()) {
              if (prop === sorted[i]) {
                continue;
              }

              isNeedsFix = true;
              break;
            }

            if (!isNeedsFix) return;

            context.report({
              node,
              messageId: "wrongDestructure",
              fix(fixer) {
                const sortedText = sorted
                  .map((p) => sourceCode.getText(p))
                  .join(", ");

                return fixer.replaceText(node, `{ ${sortedText} }`);
              },
            });
          },

          processFunctionParams(node) {
            const { params } = node;
            if (!params || params.length === 0) return;

            for (const param of params) {
              if (param.type !== "ObjectPattern") {
                continue;
              }

              const nonSpreads = param.properties.filter((p) => !isSpread(p));
              const spreads = param.properties.filter((p) => isSpread(p));
              const sortedNonSpreads = sortItems(nonSpreads);
              const sortedProps = [...sortedNonSpreads, ...spreads];

              let isNeedsFix = false;

              for (const [i, prop] of param.properties.entries()) {
                if (prop === sortedProps[i]) {
                  continue;
                }

                isNeedsFix = true;
                break;
              }

              if (isNeedsFix) {
                context.report({
                  node: param,
                  messageId: "wrongParams",
                  fix(fixer) {
                    const propsText = sortedProps
                      .map((p) => sourceCode.getText(p))
                      .join(", ");

                    return fixer.replaceText(param, `{ ${propsText} }`);
                  },
                });
              }
            }
          },

          FunctionDeclaration: (node) => {
            if (!node.params || node.params.length <= 1) return;
            sortObjectProps.rules["sort-object-props"]
              .create(context)
              .processFunctionParams(node);
          },

          FunctionExpression: (node) => {
            if (!node.params || node.params.length <= 1) return;
            sortObjectProps.rules["sort-object-props"]
              .create(context)
              .processFunctionParams(node);
          },

          ArrowFunctionExpression: (node) => {
            if (!node.params || node.params.length <= 1) return;
            sortObjectProps.rules["sort-object-props"]
              .create(context)
              .processFunctionParams(node);
          },
        };
      },
    },
  },
};

export default sortObjectProps;
