const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
       fixBabelImports('import', {
         libraryName: 'antd',
         libraryDirectory: 'es',
         style: true,
       }),
       addLessLoader({
          javascriptEnabled: true,
          modifyVars: { 
            '@primary-color':'#666666' ,
            '@slider-rail-background-color': '#666666',
            '@slider-rail-background-color-hover': '#666666',
            '@slider-track-background-color':'#ffffff',
            '@slider-track-background-color-hover': '#ffffff'
          },
        }),
);