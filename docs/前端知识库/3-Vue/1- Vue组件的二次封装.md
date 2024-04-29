# Vue组件的二次封装
基于 Element UI 的el-input组件简单实现一下组件的二次封装

## 1. 属性绑定
在对组件封装的时候首先会遇到就是绑定属性了，简单说就是将二次封装的组件属性绑定到el-input组件上。
可能有些小伙伴做的时候会将el-input的属性全部写到封装组件 props 里面，然后再将这些属性绑定到el-input组件上。这样做不是不行，但是太鸡肋了，而且浪费时间。那该如何做呢？

在 vue 实例中有一个属性$attrs，这个属性包含了组件所有透传attributes的对象。是指由父组件传入，且没有被子组件声明为 props 或是组件自定义事件的 attributes 和事件处理函数。
那我们就可以直接将$attrs以v-bind动态绑定到el-input组件上，就可以解决属性绑定这方面的问题了。

```vue
<template>
  <el-input ref="refInput" v-bind="$attrs"></el-input>
</template>
```
## 2. 插槽
第二方面就是插槽的绑定了，可以和属性绑定一样，将所有的插槽全部写出来，然后再一个一个写到el-input组件上，如果插槽不多，也没有什么影响，但是如果插槽很多呢，如果二次封装的是有可能会修改的组件呢？那这个二次封装的组件也要同步修改，很麻烦！那又该如何做呢？

我们可以通过另一个属性$slots，这个属性表示父组件所传入插槽的对象。每一个插槽都在$slots上暴露为一个函数，返回一个 vnode 数组，同时 key 名对应着插槽名。
那我们就可以遍历$slots动态绑定到el-input组件上，就可以解决绑定插槽这方面的问题了。

```vue
<template>
  <el-input ref="refInput" v-bind="$attrs">
    <template v-for="(value, name) in $slots" #[name]>
      <slot :name="name" />
    </template>
  </el-input>
</template>
```
但如果再考虑得深一点，你会发现有的时候这个组件会向这个插槽传递一些数据，就是作用域插槽了。
```vue
<template>
  <el-input ref="refInput" v-bind="$attrs">
    <template v-for="(_value, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </el-input>
</template>
```

## 3. ref
我们使用组件的时候保不齐就会使用ref调用组件里面暴露的方法。

我们要做的无非就是将el-input的方法提取到我们封装的组件上暴露给使用组件的地方使用。那我们就可以将el-input的方法通过ref的方式获取到然后放到封装组件的实例里面去。

在进行组合式API封装前先介绍一个属性expose，用于声明当组件实例被父组件通过模板引用访问时暴露的公共属性。默认情况下，当通过 $parent、$root 或模板引用访问时，组件实例将向父组件暴露所有的实例属性。

### 选项式
```vue
<template>
  <el-input ref="refInput" v-bind="$attrs">
    <template v-for="(_value, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </el-input>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    const entries = Object.entries(this.$refs.refInput)
    for(const [key, value] of entries) {
      this[key] = value
    }
  }
}
</script>
```
### 组合式API
在组合式setup函数中我们需要先通过getCurrentInstance方法获取当前组件实例，然后将提取el-input组件暴露的方法暴露出去。需要注意的是我们在使用setup方法的时候会在最后将需要使用到的属性或者方法return出去使用。但是在setup函数它在beforeCreate之前发生，所以我们获取不到el-input组件的实例，所以就需要在onMounted的时候将el-input组件暴露的方法加到当前组件实例的expose属性中，但是没有主动声明暴露的时候expose属性是null，所以我们需要先主动声明暴露，在onMounted的时候将el-input组件暴露的方法添加到expose中。

```vue
<template>
  <el-input ref="refInput" v-bind="$attrs">
    <template v-for="(_value, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </el-input>
</template>

<script>
import { ref, onMounted, getCurrentInstance }  from 'vue'
export default {
  setup(props, context) {
    const instance = getCurrentInstance()

    const refInput = ref()
    
    onMounted(() => {
      const entries = Object.entries(refInput.value.$.exposed)
      for (const [key, value] of entries) {
        instance.exposed[key] = value
      }
    })

    context.expose()
    return {
      refInput
    }
  }
}
</script>
```
### setup标签
setup标签写法与组合式封装方法相似。不同的是在setup标签中当前组件实例的expose不为null，所以不需要主动声明暴露。
```vue
<template>
  <el-input ref="refInput" v-bind="$attrs">
    <template v-for="(_value, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </el-input>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance }  from 'vue'

const instance = getCurrentInstance()

const refInput = ref()

onMounted(() => {
  const entries = Object.entries(refInput.value.$.exposed)
  for (const [key, value] of entries) {
    instance.exposed[key] = value
  }
})
</script>
```