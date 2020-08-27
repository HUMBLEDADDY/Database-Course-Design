// vue.config.js
module.exports = {
    lintOnSave: false,
    outputDir:__dirname + '/../server/web',
    // publicPath:'./'
    publicPath:process.env.NODE_ENV === 'production'?'./':'./'
}
