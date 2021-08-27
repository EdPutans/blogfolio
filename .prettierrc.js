module.exports = {
  tabWidth: 2,
  printWidth: 120,
  trailingComma: "es5",
  overrides: [
    {
      files: ["content-strings/*.json"],
      options: {
        tabWidth: 2,
        printWidth: 1,
      },
    },
  ],
};
