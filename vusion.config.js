const path = require('path');
const cheerio = require('cheerio');
const iterator = require('markdown-it-for-inline');

module.exports = {
    type: 'app',
    version: '>=0.6.0',
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
                            const $ = cheerio.load(result, {
                                decodeEntities: false,
                                lowerCaseAttributeNames: false,
                                lowerCaseTags: false,
                            });

                            $('div.u-example').each(function () {
                                const $this = $(this);
                                $this.next().appendTo($this.children().last());
                                this.tagName = 'u-example';
                                $this.removeClass();
                            });

                            return $.html();
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
