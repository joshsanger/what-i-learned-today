const path = require('path');
const exec = require('child_process').exec;

module.exports = (env, argv) => {
    return {
        entry : './app/build/index.js',
        optimization: {
            removeAvailableModules: false,
            removeEmptyChunks: false,
            splitChunks: false,
        },
        output: {
            path    : path.join(__dirname, 'public_html/assets/js'),
            filename: 'main.js',
            pathinfo: false
        },
        watch : !!(env && env.watch),
        module: {
            rules: [{
                loader : 'babel-loader',
                test   : /\.js$/,
                exclude: /node_modules/
            }, {
                test   : /\.less/,
                use    : [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ],
                exclude: /node_modules/
            }, {
                test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                exclude: /node_modules/,
                loader: 'url-loader'
            }]
        },
        stats: {
            warnings: false
        },
        plugins: [
            {
                apply: (compiler) => {

                    compiler.hooks.beforeRun.tap('BeforeRunPlugin', (compilation) => {
                        exec('echo Starting build ...', (err, stdout, stderr) => {
                            if (stdout) process.stdout.write(stdout);
                            if (stderr) process.stderr.write(stderr);
                        });
                    });
                    compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
                        exec(('echo Completed build at ' +
                            (new Date().getHours() < 10 ? '0' : '') + new Date().getHours() + ':' +
                            (new Date().getMinutes() < 10 ? '0' : '') + new Date().getMinutes() + ':' +
                            (new Date().getSeconds() < 10 ? '0' : '') + new Date().getSeconds() + ':' +
                            (new Date().getMilliseconds() < 10 ? '0' : '') + new Date().getMilliseconds()), (err, stdout, stderr) => {
                            if (stdout) process.stdout.write(stdout);
                            if (stderr) process.stderr.write(stderr);
                        });
                    });
                }
            }
        ]
    }
};
