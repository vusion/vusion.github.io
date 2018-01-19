# 命令行工具（CLI）


- `vusion help`: Show help of all commands
- `vusion -V, --version`: Show the version of current CLI

- `vusion init <project-type> <project-name>`: Initalize a vusion project
- `vusion dev`: Run develop server
    - `-c, --config-path <path>`: Vusion config path
    - `-e, --entry-path <path>`: Change default entry path
    - `-C, --no-clean`: Disable to clean and copy
    - `-l, --library-path <path>`: Library entry path. To be `./index.js` by default if project type is `library`
    - `-d, --docs`: Generate docs of common components in library. Always be true if project type is `library`
    - `-p, --port <port>`: Web Server Port
    - `-O, --no-open`: Disable to open browser at the beginning
    - `-H, --no-hot`: Disable to hot reload
    - `--resolve-priority`: Priority to resolve modules or loaders, "cwd"(default) or "cli"
- `vusion build`: Build a distribution
    - `-c, --config-path <path>`: Vusion config path
    - `-e, --entry-path <path>`: Change default entry path
    - `-C, --no-clean`: Disable to clean and copy
    - `-l, --library-path <path>`: Library entry path. To be `./index.js` by default if project type is `library`
    - `-d, --docs`: Generate docs of common components in library. Always be true if project type is `library`
    - `-s, --source-map`: Generate source map in build mode
    - `--extract-css`: Extract CSS by ExtractTextPlugin in build mode
    - `--uglify-js`: Compress and mangle JS by UglifyJSPlugin in build mode
    - `--minify-js`: Minify JS only in `build` mode. Set `true` or `'babel-minify'` to use BabelMinifyPlugin, set `'uglify-js'` to use UglifyJSPlugin as same as `--uglify`
    - `--experimental`: Enable some experimental loaders or plugins
    - `--resolve-priority`: Priority to resolve modules or loaders, "cwd"(default) or "cli"
- `vusion test`: Run karma test
    - `-c, --config-path <path>`: Vusion config path
    - `-p, --port <port>`: Web Server Port
    - `-w, --watch`: Karma watch
    - `--resolve-priority`: Priority to resolve modules or loaders, "cwd"(default) or "cli"
- `vusion publish <version>`: Publish a new version
- `vusion ghpages`: Push output directory to gh-pages
    - `-c, --config-path <path>`: Vusion config path
    - `-p, --path <path>`: Path to publish. Default is webpack output path
- `vusion dep`: List dependencies of vusion-cli

- `vusion transform <vue-path>`: Transform Vue component between singlefile and multifile pattern
