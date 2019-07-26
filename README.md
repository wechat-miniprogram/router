# router

小程序自定义组件

> 使用此组件需要依赖小程序基础库 2.2.1 以上版本，同时依赖开发者工具的 npm 构建。具体详情可查阅[官方 npm 文档](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)。


## 使用方法

1. 安装 router

```
npm install --save miniprogram-router
```

2. 在需要使用 router 的页面 page.json 中添加 router 自定义组件配置

```json
{
  "usingComponents": {
    "router": "miniprogram-router"
  }
}
```

3. WXML 文件中引用 router

``` wxml
<router bind:beforeroute="beforeRoute" open-type="navigate" url="test/:docid?id=1" query="{{queryData}}" params="{{paramsData}}">test</router>
```

```js
Page({
  data: {
    queryData: {
      a: 5
    },
    paramsData: {
      docid: '1'
    }
  },
  beforeRoute() {
    console.log("trigger beforeRoute")
  }
})

```

**slide-view的属性介绍如下：**

| 属性名                   | 类型         | 默认值                    | 是否必须    | 说明                                        |
|-------------------------|--------------|---------------------------|------------|---------------------------------------------|
| url                   | String       | 显示屏幕的宽度             | 是          | 当前小程序内的跳转链接                    |
| open-type                  | String       | navigate                        | 否        |  跳转方式                    |
|delta             | Number       | 1                        | 否          | 当 open-type 为 'navigateBack' 时有效，表示回退的层数|
|query             | Object       |                        | 否          | 追加到跳转链接上的query string|
|params             | Object       |                         | 否          |动态路径参数|
|beforeroute             | Function       |                         | 否          | 跳转前触发函数|
|afterroute             | Function       |                        | 否          | 跳转后触发函数|
