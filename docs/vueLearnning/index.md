# VUE

## vue2 单页使用常用代码

::: details Click me to view the code
```js
var data = {};
var methods = {};
var $vue = new Vue({
            el: '#mains',
            data: data,
            methods: methods,
            computed: {
            },
            updated() {
            },
            watch: {
                styleActive: {
                    handler(newV, oldV) {
                       
                    },
                    deep: true,
                    immediate: true, //立即执行
                }
            },
            created: function () {

            },
});
```
:::