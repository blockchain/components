const basePlugins = [
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-export-namespace-from',
]

const wrapPropTypes = [
  'transform-react-remove-prop-types',
  {
    mode: 'wrap',
  },
]

const keepEsModules = [
  '@babel/plugin-transform-runtime',
  {
    useESModules: true,
  },
]

const styledForConsumers = [
  'styled-components',
  {
    displayName: false,
    minify: false,
    pure: true,
    ssr: true,
  },
]

const styledForStorybook = [
  styledForConsumers[0],
  { ...styledForConsumers[1], displayName: true },
]

const production = {
  plugins: [
    'babel-plugin-add-react-displayname',
    '@babel/plugin-transform-react-display-name',
    ...basePlugins,
    keepEsModules,
    '@babel/plugin-transform-react-jsx-source',
    styledForStorybook,
  ],
}

module.exports = {
  env: {
    cjs: {
      plugins: [
        ...basePlugins,
        '@babel/plugin-transform-modules-commonjs',
        '@babel/plugin-transform-runtime',
        wrapPropTypes,
        styledForConsumers,
      ],
    },
    development: production,
    esm: {
      plugins: [
        ...basePlugins,
        keepEsModules,
        wrapPropTypes,
        styledForConsumers,
      ],
    },
    production,
    test: {
      plugins: basePlugins,
      presets: ['@babel/env', '@babel/react', '@babel/flow'],
    },
  },
  presets: [
    '@babel/flow',
    [
      '@babel/env',
      {
        modules: false,
        targets: {
          browsers: [
            'ie >= 11',
            '> 1%',
            'last 3 Chrome versions',
            'last 2 Edge versions',
            'last 2 Firefox versions',
          ],
        },
      },
    ],
    '@babel/react',
  ],
}
