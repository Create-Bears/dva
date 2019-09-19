const path = require('path')

export default {
  proxy: {
    '/api': {
      target: 'http://148.70.121.59:9001',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  },
  alias: {
    '@': path.join(__dirname, './src')
  },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
      }
    ]
  ]
}
