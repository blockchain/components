const path = require("path");
const SRC_PATH = path.join(__dirname, "../src");

module.exports = ({ config, ...rest }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      require.resolve("awesome-typescript-loader"),
      require.resolve("react-docgen-typescript-loader")
    ]
  });

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
