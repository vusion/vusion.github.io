const path = require('path');
const hljs = require('highlight.js');

const hashSum = require('hash-sum');
const iterator = require('markdown-it-for-inline');

module.exports = {
    type: 'app',
    webpack: {
        entry: {
            bundle: './src/index.js',
        },
        output: {
            EXTENDS: true,
            path: path.resolve(__dirname, './public'),
            publicPath: '/public/',
        },
        resolve: {
            EXTENDS: true,
            alias: {
                EXTENDS: true,
                library$: path.resolve(process.cwd(), 'index.js'),
            },
        },
        module: {
            EXTENDS: true,
            rules: [
                'EXTENDS',
                {
                    test: /\.md$/,
                    use: [{
                        loader: 'vue-loader',
                        options: {
                            preserveWhitespace: false,
                        },
                    }, {
                        loader: 'vue-md-loader',
                        options: {
                            wrapper: 'u-article',
                            livePattern: {
                                exec: (content) => [content, 'anonymous-' + hashSum(content)],
                            },
                            liveTemplateProcessor(template) {
                                // Remove whitespace between tags
                                template = template.trim().replace(/>\s+</g, '><');
                                return `<div class="u-example">${template}</div>`;
                            },
                            markdown: {
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
                            plugins: [
                                [iterator, 'link_converter', 'link_open', (tokens, idx) => tokens[idx].tag = 'u-link'],
                                [iterator, 'link_converter', 'link_close', (tokens, idx) => tokens[idx].tag = 'u-link'],
                            ],
                        },
                    }],
                },
            ],
        },
    },
    webpackDevServer: {
        contentBase: __dirname,
    },
};
