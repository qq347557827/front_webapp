// module.exports = {
//   plugins: {
//     // ...
//     'postcss-px-to-viewport': {
//       // options
//       unitToConvert: 'px',
//       viewportWidth: 320,
//       unitPrecision: 5,
//       propList: ['*'],
//       viewportUnit: 'vw',
//       fontViewportUnit: 'vw',
//       selectorBlackList: [],
//       minPixelValue: 1,
//       mediaQuery: false,
//       replace: true,
//       exclude: undefined,
//       include: undefined,
//       landscape: false,
//       landscapeUnit: 'vw',
//       landscapeWidth: 568,
//     },
//   },
// }

module.exports = {
  'postcss-px-to-viewport': {
    // options
    unitToConvert: 'px',
    viewportWidth: 375,
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
  },
}
