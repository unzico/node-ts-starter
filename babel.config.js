module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        },
        useBuiltIns: "usage",
        corejs: 2
      }
    ],
    "@babel/preset-typescript"
  ],
  plugins: [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread",
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "~": "./src"
        }
      }
    ]
  ]
};
