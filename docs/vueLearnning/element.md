# Element 使用中遇到的问题



## cascader选中之后，选中的数据未显示出来
多选时遇到的问题。单选没问题\
网上查了一下是因为子集children为空的原因


```js
            changeNodes(data) {
                if (data.length > 0) {
                    for (var i = 0; i < data.length; i++) {
                        if (!data[i].children || data[i].children.length < 1) {
                            data[i].children = undefined;
                        } else {
                            this.changeNodes(data[i].children);
                        }
                    }
                }
                return data;
            },
```

```js
computed: {
                clsFarther() {
                    var ss = this.changeNodes(this.clsData);
                    return ss;
                }
            },
```

## 上传组件传入额外参数

::: code-group
```vue 调用方法
<el-upload
    v-loading="加载状态"
    name="文件参数名"
    :action="上传请求地址"
    :headers="请求头额外参数"
    :before-upload="
       (res) => {
           return beforeUpload(res, '额外参数');
        }
     "
     :on-success="
        (res) => {
            return uploadSuccess(res, '额外参数');
         }
     "
>
     <el-button>上传</el-button>
</el-upload>


```

```js 方法
methods: {
	    // 图片上传前
    beforeUpload(res, type) {
      console.log(res) // 文件详情
      console.log(type) // 额外参数
    },
    // 图片上传成功
    uploadSuccess(res, type) {
      console.log(res) // 上传接口返回结果
      console.log(type) // 额外参数
    }
}

```
:::