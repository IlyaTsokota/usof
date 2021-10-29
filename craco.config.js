const path = require('path');
const { addBeforeLoader, loaderByName } = require("@craco/craco");

module.exports = {
    webpack: {
        configure: function(webpackConfig) {
            const svgLoader = {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            };

            addBeforeLoader(webpackConfig, loaderByName("file-loader"), svgLoader);

            return webpackConfig;
        },
        alias: {
            Utils: path.resolve(__dirname, 'src/utils/'),
            Components: path.resolve(__dirname, 'src/components/'),
            Actions: path.resolve(__dirname, 'src/actions/'),
            ActionTypes: path.resolve(__dirname, 'src/action-types/'),
            Containers: path.resolve(__dirname, 'src/containers/'),
            Reducers: path.resolve(__dirname, 'src/reducers/'),
            Services: path.resolve(__dirname, 'src/services/'),
            Assets: path.resolve(__dirname, 'src/assets/'),
        },
    },
};