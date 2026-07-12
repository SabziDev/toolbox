export default {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeHiddenElems: false,
          removeUselessDefs: false,
          cleanupIds: false,
        },
      },
    },
  ],
};
