module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
        useBuiltIns: "usage",
        corejs: 2,
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/plugin-transform-class-properties",
    "@babel/plugin-transform-object-rest-spread",
    "@babel/plugin-transform-nullish-coalescing-operator",
    "@babel/plugin-transform-optional-chaining",
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "~": "./src",
        },
      },
    ],
  ],
};
