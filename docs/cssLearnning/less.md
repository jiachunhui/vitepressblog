# LESS

## 通用设置

::: details Click me to view the code
```less
@color: #333;
@color2: #002c77;
@color3: #999;
@min768: ~"(min-width: 768px)";
@min992: ~"(min-width: 992px)";
@min1200: ~"(min-width: 1200px)";
@min1400: ~"(min-width: 1400px)";
@min1600: ~"(min-width: 1600px)";
@min1900: ~"(min-width: 1900px)";
@min2560: ~"(min-width: 2560px)";

[v-cloak] {
	display: none;
}


a {
	&:hover {
		color: @color2;
	}
}

.after {
	content: '';
	display: block;
	clear: both;
}

.iconfonts {
	font-family: "iconfont" !important;
	font-size: 16px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}



.transition {
	transition: all ease-in-out .3s;
}

.transition(@s) {
	transition: all ease-in-out @s;
}

.text-overflow {
	overflow: hidden;
	white-space: nowrap;
	-o-text-overflow: ellipsis;
	text-overflow: ellipsis;
}

.text-overflow(@s) {
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	/* autoprefixer: off */
	-webkit-box-orient: vertical;
	/* autoprefixer: on */
	-webkit-line-clamp: @s;
}

a:hover, button:hover, button:focus {
	text-decoration: none !important;
	outline: none !important;
	color: @color;
}

.imgobjectfit {
	width: 100%;
	height: 100% !important;
	object-fit: cover;
}

.imgobjectfit2 {
	width: 100%;
	height: 100% !important;
	object-fit: contain;
}

.transition {
	transition: all ease-in-out .3s;
}
```
:::