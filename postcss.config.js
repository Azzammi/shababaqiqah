const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

module.exports = {
    plugins:[
        require('tailwindcss'),
        //require('autoprefixer'),
        //cssnano({preset: 'default'}),
        process.env.NODE_ENV === 'production' ? require('autoprefixer') : null,
        process.env.NODE_ENV === 'production' ? cssnano({preset: 'default'}) : null,
        //purgecss({
        //    content: [
        //        './layouts/**/*.html', './src/**/*.vue', './src/**/*.jsx'
        //    ],
        //    defaulExtractor : contant => content.match(/[\w-/:]+(?<!:)/g) || []
        //})
    ]
}