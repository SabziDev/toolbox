import { defineConfig } from "@fullstacksjs/eslint-config";
import unicorn from "eslint-plugin-unicorn";

import mergeExports from "./eslint-configs/merge/merge-exports/merge-exports.js";
import noUselessTemplateLiteral from "./eslint-configs/no-useless/no-useless-template-literal/no-useless-template-literal.js";
import addBlankLineBeforeReturn from "./eslint-configs/padding/add-blank-line-before-return/add-blank-line-before-return.js";
import sortComments from "./eslint-configs/sort/sort-comments/sort-comments.js";
import sortObjectProps from "./eslint-configs/sort/sort-object-props/sort-object-props.js";

const baseRules = {
  "func-style": ["warn", "expression"],
  quotes: [
    "error",
    "double",
    { avoidEscape: true, allowTemplateLiterals: false },
  ],
  eqeqeq: ["error", "always"],
  "no-console": "warn",

  "custom/add-blank-line-before-return": "warn",
  "custom/merge-exports": "warn",
  "custom/no-useless-template-literal": "warn",
  "custom/sort-comments": "warn",
  "custom/sort-object-props": "warn",
};
const externalPluginsRules = {
  "unicorn/filename-case": "off",
  "unicorn/prefer-global-this": "off",
  "unicorn/name-replacements": "off",
  "unicorn/no-array-sort": "off",
  "unicorn/no-null": "off",
  "unicorn/default-export-style": "off",
};
const customRules = {
  rules: {
    "add-blank-line-before-return":
      addBlankLineBeforeReturn.rules["add-blank-line-before-return"],

    "merge-exports": mergeExports.rules["merge-exports"],

    "no-useless-template-literal":
      noUselessTemplateLiteral.rules["no-useless-template-literal"],

    "sort-comments": sortComments.rules["sort-comments"],

    "sort-object-props": sortObjectProps.rules["sort-object-props"],
  },
};

const config = defineConfig(
  {
    tailwind: { entryPoint: "./src/input.css" },

    plugins: {
      custom: customRules,
    },

    rules: baseRules,
  },

  unicorn.configs.recommended,
  {
    rules: externalPluginsRules,
  },
);

export default config;
