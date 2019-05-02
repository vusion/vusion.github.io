const path = require('path');
const iterator = require('markdown-it-for-inline');

module.exports = {
    type: 'app',
    version: '>=0.6.0',
    // lint: true,
    clean: false,
    extractCSS: true,
    webpack: {
        entry: {
            bundle: ['babel-polyfill', './src/index.js'],
        },
        output: {
            path: path.resolve(__dirname, './public'),
            publicPath: '/public/',
        },
        resolve: {
            alias: {
                library$: path.resolve(process.cwd(), './src/library.js'),
            },
        },
        module: {
            rules: [{
                test: /\.md$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        preserveWhitespace: false,
                    },
                }, {
                    loader: '@vusion/md-vue-loader',
                    options: {
                        wrapper: 'u-article',
                        liveProcess(live, code) {
                            // 不好直接用自定义标签，容易出问题
                            return `<div class="u-example"><div>${live}</div><div slot="code"></div></div>\n\n${code}`;
                        },
                        postprocess(result) {
                            const re = /<div class="u-example"><div>([\s\S]+?)<\/div><div slot="code"><\/div><\/div>\s+(<pre[\s\S]+?<\/pre>)/g;
                            return result.replace(re, (m, live, code) => `<u-example><div>${live}</div><div slot="code">${code}</div></u-example>\n\n`);
                        },
                        plugins: [
                            [iterator, 'link_converter', 'link_open', (tokens, idx) => tokens[idx].tag = 'u-link'],
                            [iterator, 'link_converter', 'link_close', (tokens, idx) => tokens[idx].tag = 'u-link'],
                        ],
                    },
                }],
            }],
        },
    },
    webpackDevServer: {
        contentBase: __dirname,
    },
};
