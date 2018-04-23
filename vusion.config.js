const path = require('path');
const hljs = require('highlight.js');

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
                    loader: 'vue-markdown-html-loader',
                    options: {
                        wrapper: 'u-article',
                        // livePattern: {
                        //     exec: (content) => [content, 'anonymous-' + hashSum(content)],
                        // },
                        // liveTemplateProcessor(template) {
                        //     // Remove whitespace between tags
                        //     template = template.trim().replace(/>\s+</g, '><');
                        //     return `<div class="u-example">${template}</div>`;
                        // },
                        markdownIt: {
                            langPrefix: 'lang-',
                            html: true,
                            highlight(str, rawLang) {
                                let lang = rawLang;
                                if (rawLang === 'vue')
                                    lang = 'html';

                                if (lang && hljs.getLanguage(lang)) {
                                    try {
                                        const result = hljs.highlight(lang, str).value;
                                        return `<pre class="hljs ${this.langPrefix}${rawLang}"><code>${result}</code></pre>`;
                                    } catch (e) {}
                                }

                                return '';
                                // const result = this.utils.escapeHtml(str);
                                // return `<pre class="hljs"><code>${result}</code></pre>`;
                            },
                        },
                        markdownItPlugins: [
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
