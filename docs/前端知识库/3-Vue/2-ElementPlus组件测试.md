---
hello: world
layout: doc
---

# ElementPlus组件库测试

<script setup>

import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(true)

const color1 = ref('#409EFF')

const switchValue1 = ref(false);
const switchValue2 = ref(false);

</script>

## Button 按钮

<el-button>Default</el-button>
<el-button type="primary">Primary</el-button>
<el-button type="success">Success</el-button>
<el-button type="info">Info</el-button>
<el-button type="warning">Warning</el-button>
<el-button type="danger">Danger</el-button>

```vue
<template>
  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
</template>
```
## Text 文本

<div class="text-xl text-blue">测试</div>
<el-text class="mx-1">Default</el-text>&emsp;
<el-text class="mx-1" type="primary">Primary</el-text>&emsp;
<el-text class="mx-1" type="success">Success</el-text>&emsp;
<el-text class="mx-1" type="info">Info</el-text>&emsp;
<el-text class="mx-1" type="warning">Warning</el-text>&emsp;
<el-text class="mx-1" type="danger">Danger</el-text>&emsp;

```vue
<template>
  <el-text class="mx-1">Default</el-text>
  <el-text class="mx-1" type="primary">Primary</el-text>
  <el-text class="mx-1" type="success">Success</el-text>
  <el-text class="mx-1" type="info">Info</el-text>
  <el-text class="mx-1" type="warning">Warning</el-text>
  <el-text class="mx-1" type="danger">Danger</el-text>
</template>
```

## Checkbox 多选框

<el-checkbox v-model="checked1" disabled>Disabled</el-checkbox>
<el-checkbox v-model="checked2">Not disabled</el-checkbox>
<el-checkbox v-model="checked3">Not disabled</el-checkbox>

```vue
<template>
  <el-checkbox v-model="checked1" disabled>Disabled</el-checkbox>
  <el-checkbox v-model="checked2">Not disabled</el-checkbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const checked1 = ref(false)
const checked2 = ref(false)
const checked3 = ref(true)
</script>
```

## Color-picker 取色器

<div class="demo-color-block">
  <span class="demonstration">Color value： {{color1}} =></span>
  <el-color-picker v-model="color1" />

</div>

``` vue
<template>
  <div class="demo-color-block">
    <span class="demonstration">With default value</span>
    <el-color-picker v-model="color1" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const color1 = ref('#409EFF')
</script>

<style>
.demo-color-block {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.demo-color-block .demonstration {
  margin-right: 16px;
}
</style>
```

## Switch 开关
<el-switch v-model="switchValue1" />
  <el-switch
    v-model="switchValue2"
    class="ml-2"
    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
  />

```vue
<template>
  <el-switch v-model="value1" />
  <el-switch
    v-model="value2"
    class="ml-2"
    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
</script>
```

<style module>

.button {
  color: red;
  font-weight: bold;
  text-align: center;
}
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
.demo-color-block {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.demo-color-block .demonstration {
  margin-right: 16px;
}
</style>

