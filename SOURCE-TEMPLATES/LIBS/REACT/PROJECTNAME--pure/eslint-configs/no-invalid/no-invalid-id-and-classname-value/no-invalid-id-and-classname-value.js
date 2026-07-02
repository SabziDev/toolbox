const noInvalidIdAndClassNameValue = {
  rules: {
    "no-invalid-id-and-classname-value": {
      meta: {
        type: "problem",
        fixable: "code",
        messages: {
          invalid: "{{attribute}} cannot be {{value}}!",
        },
      },

      create(context) {
        const attributes = new Set(["className", "id"]);

        return {
          JSXAttribute(node) {
            const attribute = node.name.name;

            if (!attributes.has(attribute) || !node.value) {
              return;
            }

            let invalidValue;

            if (node.value.type === "Literal" && node.value.value === "") {
              invalidValue = "empty";
            } else if (node.value.type === "JSXExpressionContainer") {
              const { expression } = node.value;

              if (
                expression.type === "Literal" &&
                [false, null, true].includes(expression.value)
              ) {
                invalidValue = String(expression.value);
              } else if (
                expression.type === "Identifier" &&
                expression.name === "undefined"
              ) {
                invalidValue = "undefined";
              }
            }

            if (!invalidValue) return;

            context.report({
              node,
              messageId: "invalid",
              data: { value: invalidValue, attribute },
              fix: (fixer) => fixer.remove(node),
            });
          },
        };
      },
    },
  },
};

export default noInvalidIdAndClassNameValue;
