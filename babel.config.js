module.exports = {
    plugins: [
        require('react-hot-loader/babel'),
        require('@babel/plugin-transform-async-to-generator'),
        require('@babel/plugin-syntax-dynamic-import'),
        require('@babel/plugin-syntax-throw-expressions'),
        require('@babel/plugin-transform-runtime'),
        require('babel-plugin-styled-components')
    ],
    env: {
        production: {
            plugins: [require('babel-plugin-transform-react-remove-prop-types')]
        }
    }
}
