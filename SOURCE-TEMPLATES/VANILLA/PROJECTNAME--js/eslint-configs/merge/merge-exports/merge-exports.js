/* eslint-disable unicorn/no-unreadable-for-of-expression */
/* eslint-disable unicorn/consistent-function-scoping */

const mergeExports = {
  rules: {
    "merge-exports": {
      meta: {
        type: "suggestion",
        fixable: "code",
        messages: {
          mergeExports:
            "Combine and sort consecutive named exports into a single export statement",
        },
      },

      create(context) {
        const isNamedExport = (node) =>
          node?.type === "ExportNamedDeclaration" &&
          !node.source &&
          !node.declaration &&
          node.specifiers?.length;

        const isDefaultExport = (node) =>
          node?.type === "ExportDefaultDeclaration";

        return {
          Program(node) {
            const { body } = node;
            const sourceCode = context.sourceCode || context.getSourceCode();

            for (let start = 0; start < body.length; start++) {
              if (!isNamedExport(body[start])) {
                continue;
              }

              let end = start;

              while (end + 1 < body.length && isNamedExport(body[end + 1])) {
                end += 1;
              }

              if (start === end) {
                continue;
              }

              const specifiers = [];

              for (let i = start; i <= end; i++) {
                for (const { exported } of body[i].specifiers) {
                  specifiers.push(exported.name);
                }
              }

              context.report({
                node: body[start],
                messageId: "mergeExports",

                fix: (fixer) =>
                  fixer.replaceTextRange(
                    [body[start].range[0], body[end].range[1]],
                    `export { ${specifiers.join(", ")} };`,
                  ),
              });

              start = end;
            }

            let defaultExportNode = null;
            let defaultExportIndex = -1;

            for (const [i, element] of body.entries()) {
              if (!isDefaultExport(element)) {
                continue;
              }

              defaultExportNode = element;
              defaultExportIndex = i;
              break;
            }

            if (defaultExportNode && defaultExportIndex !== body.length - 1) {
              const defaultCode = sourceCode.getText(defaultExportNode);
              const lastNode = body.at(-1);

              context.report({
                node: defaultExportNode,
                messageId: "mergeExports",
                fix(fixer) {
                  const fixes = [
                    fixer.remove(defaultExportNode),
                    fixer.insertTextAfter(lastNode, `\n${defaultCode}`),
                  ];

                  return fixes;
                },
              });
            }
          },
        };
      },
    },
  },
};

export default mergeExports;
