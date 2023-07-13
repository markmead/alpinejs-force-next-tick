# Alpine JS Force `$nextTick`

Alpine JS implementation of the double `requestAnimationFrame` method to
force`$nextTick`

---

You can find out more about the issue in Vue here -
https://github.com/vuejs/vue/issues/9200

Vue JS version - https://github.com/twickstrom/vue-force-next-tick

## Install

### With a CDN

```html
<script
  defer
  src="https://unpkg.com/alpinejs-force-next-tick@latest/dist/force-next-tick.min.js"
></script>

<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### With a Package Manager

```shell
yarn add -D alpinejs-force-next-tick

npm install -D alpinejs-force-next-tick
```

```js
import Alpine from 'alpinejs'
import force-next-tick from 'alpinejs-force-next-tick'

Alpine.plugin(force-next-tick)

Alpine.start()
```

## Example

It works the same way as Alpine JS `$nextTick` but uses the double
`requestAnimationFrame` method.

```html
<body x-data="{ firstName: 'John' }">
  <button
    @click="
      firstName = 'Jane'
      $forceNextTick(() => console.log($el.innerText))
    "
    x-text="firstName"
  >
  </button>
</body>
```

Here we are pausing an `async` function until after pending DOM updates. With
this approach an argument is not required.

```html
<body x-data="{ firstName: 'John' }">
  <button
    @click="
      firstName = 'Jane'
      await $forceNextTick()
      console.log($el.innerText)
    "
    x-text="firstName"
  >
  </button>
</body>
```

## Stats

![](https://img.shields.io/bundlephobia/min/alpinejs-force-next-tick)
![](https://img.shields.io/npm/v/alpinejs-force-next-tick)
![](https://img.shields.io/npm/dt/alpinejs-force-next-tick)
![](https://img.shields.io/github/license/markmead/alpinejs-force-next-tick)
