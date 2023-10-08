---

title: Blogging Like a Hacker
lang: en-US
editLink: true


---
常用显示效果展示


# {{ $frontmatter.title }}
# getting-started

大

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |


:tada: :100:

[[toc]]


::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::




::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::

``` html
<img :src="$withBase('/foo.png')" alt="foo" />
```

```js
export default {
  name: 'MyComponent',
  // ...
}
```
```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```



```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```
```js
export default {
  data () {
    return {
      msg: 'Highlighted!' // [!code  hl]
    }
  }
}
```
```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code  focus]
    }
  }
}
```
```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code  --]
      msg: 'Added' // [!code  ++]
    }
  }
}
```
```js
export default {
  data () {
    return {
      msg: 'Error', // [!code  error]
      msg: 'Warning' // [!code  warning]
    }
  }
}
```
```ts {1}
// line-numbers is disabled by default
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers {2}
// line-numbers is enabled
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```
<<< @/filepath
<<< @/filepath{highlightLines}

::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::
# Docs

## Basics

<!--@include: ./index.md-->

<hr>

{{ 1 + 1 }}

<span v-for="i in 3">{{ i }}</span>


<script setup>
import { useData } from 'vitepress'

const { page } = useData()
</script>

<pre class="title">{{ page }}</pre>


::: v-pre
`{{ This will be displayed as-is }}`
:::


<style lang="less">
.title
  {
    font-size: 20px
  }
</style>
