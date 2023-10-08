# CSS学习笔记

## 学习网站

1.[https://50projects50days.com/](https://50projects50days.com/) \
2.[https://css-tricks.com/](https://css-tricks.com/) \
3.[CSS Reference - CSS的免费视觉指南](https://cssreference.io/)

## all
使用这个属性可以快速的将一个元素的样式清空。

```css
button {
   all: unset
}
```
这个 button 元素的样式就会完全清空了。

## animation-play-state
使用这个属性可以控制 CSS 动画的播放状态。


## 常用代码

### 超出文本截断

::: code-group

```css [多行]
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
/* autoprefixer: off */
-webkit-box-orient: vertical;
/* autoprefixer: on */
-webkit-line-clamp: 2;
```

```css [单行]
overflow: hidden;
white-space: nowrap;
-o-text-overflow: ellipsis;
text-overflow: ellipsis;
```

:::

### 常字体设置

::: code-group
```css [苹方字体]
//_苹方-简 常规体_
font-family: PingFangSC-Regular, sans-serif;
//苹方-简 极细体
font-family: PingFangSC-Ultralight, sans-serif;
//苹方-简 细体
font-family: PingFangSC-Light, sans-serif;
//苹方-简 纤细体
font-family: PingFangSC-Thin, sans-serif;
//苹方-简 中黑体
font-family: PingFangSC-Medium, sans-serif;
//苹方-简 中粗体
font-family: PingFangSC-Semibold, sans-serif;
//苹方-繁 ：
font-family: PingFangTC-Regular, sans-serif;
font-family: PingFangTC-Ultralight, sans-serif;
font-family: PingFangTC-Light, sans-serif;
font-family: PingFangTC-Thin, sans-serif;
font-family: PingFangTC-Medium, sans-serif;
font-family: PingFangTC-Semibold, sans-serif;
//苹方-港 ：
font-family: PingFangHK-Regular, sans-serif;
font-family: PingFangHK-Ultralight, sans-serif;
font-family: PingFangHK-Light, sans-serif;
font-family: PingFangHK-Thin, sans-serif;
font-family: PingFangHK-Medium, sans-serif;
font-family: PingFangHK-Semibold, sans-serif;
```
```css [思源]
@font-face {
	font-family: "SourceHanSansCN-Light";
	src: url('/content/fonts/SourceHanSansCN-Light.otf');
}
@font-face {
	font-family: "SourceHanSansCN-Normal";
	src: url('/content/fonts/SourceHanSansCN-Normal.otf');
}
@font-face {
	font-family: "SourceHanSansCN-Regular";
	src: url('/content/fonts/SourceHanSansCN-Regular.otf');
}
.font-light {
	font-family: "SourceHanSansCN-Light" !important;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
.font-normal {
	font-family: "SourceHanSansCN-Normal" !important;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
.font-regular {
	font-family: "SourceHanSansCN-Regular" !important;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
```

:::