const path = require('path')
const {
  override,
  addWebpackAlias,
  addPostcssPlugins,
  setWebpackPublicPath,
  addDecoratorsLegacy,
} = require('customize-cra')

const postcss = require('./postcss.config.js')
const rewirePostcss = require('react-app-rewire-postcss')
// postcss 配置项
const postcssPlugin = Object.keys(postcss).map((key) => require(key)(postcss[key]))

module.exports = override(
  // setWebpackPublicPath('./'),
  // addDecoratorsLegacy(),
  (config, env) => {
    // 重写postcss
    rewirePostcss(config, {
      plugins: () => [
        require('postcss-px-to-viewport')({
          // 设计稿宽度/10
          unitToConvert: 'px',
          viewportWidth: 320,
          unitPrecision: 5,
          propList: ['*'],
          viewportUnit: 'vw',
          fontViewportUnit: 'vw',
          selectorBlackList: [],
          minPixelValue: 1,
          mediaQuery: false,
          replace: true,
          exclude: undefined,
          include: undefined,
          landscape: false,
          landscapeUnit: 'vw',
          landscapeWidth: 568,
        }),
      ],
    })
    return config
  },
  // addPostcssPlugins([
  //   require('postcss-px2vp')({
  //     unitToConvert: 'px',
  //     viewportWidth: 320,
  //     unitPrecision: 5,
  //     propList: ['*'],
  //     viewportUnit: 'vw',
  //     fontViewportUnit: 'vw',
  //     selectorBlackList: [],
  //     minPixelValue: 1,
  //     mediaQuery: false,
  //     replace: true,
  //     exclude: [],
  //     landscape: false,
  //     landscapeUnit: 'vw',
  //     landscapeWidth: 568,
  //   }),
  // ]),
  addWebpackAlias({
    // eslint-disable-always
    '@': path.resolve(__dirname, 'src'),
    '@p': path.resolve(__dirname, 'src/pages'),
  }),
  // addPostcssPlugins(postcssPlugin),
)
