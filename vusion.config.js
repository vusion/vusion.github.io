const path = require('path');
const hljs = require('highlight.js');
const codeActivator = require('./lib/code-activator');
const iterator = require('markdown-it-for-inline');

let theme = path.basename(process.cwd());
if (theme === 'src')
    theme = 'theme-default';

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
        module: {
            EXTENDS: true,
            rules: [
                'EXTENDS',
                { test: /\.md$/, loader: 'vue-markdown-loader', options: {
                    langPrefix: 'lang-',
                    html: true,
                    wrapper: 'u-article',
                    preprocess(markdownIt, source) {
                        const result = codeActivator.activate(source);
                        return result.markdown;
                    },
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

                        const result = this.utils ? this.utils.escapeHtml(str) : str;
                        return `<pre class="hljs"><code>${result}</code></pre>`;
                    },
                    use: [
                        [iterator, 'link_converter', 'link_open', (tokens, idx) => tokens[idx].tag = 'u-link'],
                        [iterator, 'link_converter', 'link_close', (tokens, idx) => tokens[idx].tag = 'u-link'],
                    ],
                } },
            ],
        },
    },
    webpackDevServer: {
        contentBase: __dirname,
    },
};
