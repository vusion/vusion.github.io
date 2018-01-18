# 测试

### 单元测试

Vusion 中的单元测试可以写在多个地方。

单文件 Vue 中，可以直接添加`<test>`标签：

``` xhtml
<script>
export default {
    name: 'u-select',
};
</script>

<test>
describe('Select', () => {
    it('should render correctly', () => {
        expect('foo').to.be.a('string');
    });
});
</test>
```

多文件 Vue 中，可以添加一个`test.spec.js`文件。

``` js
describe('Select', () => {
    it('should render correctly', () => {
        expect('foo').to.be.a('string');
    });
});
```

可以在`test/unit`目录下，添加一个以`.spec.js`为后缀的文件。

### 运行测试

运行`vusion test`，Karma 会检索上面提到的所有单元测试文件，默认启动 Chrome 浏览器并运行用例。

- 可以使用`-p`选项指定端口；
- 可以使用`-w, --watch`监听文件变更。

### 下一步

下一节将会讲如何[打包和部署](/guides/deployment)。
