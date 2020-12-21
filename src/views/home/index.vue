<template>
  <h2>ref数据相应</h2>
  <div>
    <input type="text" v-model="homeName">
    <span>{{homeName}}</span>
  </div>

  <h2>reactive</h2>
  <span @click="handleArray">点击操作数组</span>

  <h2>数据监听watch</h2>
  <button @click="watchValue">点击改变单一数据源监听{{num}}</button>
  <button @click="watchObjet">监听对象数据变化</button>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUpdated, onUnmounted, reactive, ref, toRefs, watch, getCurrentInstance } from 'vue'
export default defineComponent({
  name: 'home',
  setup () {
    // ref响应式
    const homeName = ref('首页')

    // 获取当前实例
    console.log(getCurrentInstance())

    // reactive 使用
    interface Ia {
      name?: string;
      value?: number;
      [propName: string]: any;
    }
    const aArray: Ia[] = []
    const state = reactive({
      aArray,
      num: 0,
      nums: 100,
      strings: 's0',
      obj: {
        aa: 'sd'
      }
    })
    const handleArray = () => {
      state.aArray.push({
        name: 'a',
        value: 1,
        a: 566,
        b: 'sdf'
      })
      state.aArray.forEach((item: Ia) => {
        console.log(item)
      })
    }

    // 监听单一数据源
    const watchValue = () => {
      state.num += 1
      state.nums += 2
      homeName.value += 'ds'
    }
    watch(() => state.num, (val, oldVal) => {
      console.log(val, oldVal)
    })

    // 数据监听watch监听多个数据源
    watch([() => state.nums, () => state.num, () => state.strings], ([homeValue, num, stringValue], [homeOld, numOld, oldString]) => {
      console.log(homeValue, homeOld, num, numOld, stringValue, oldString)
    })

    // 数据监听watch监听数组变化 (指向的堆是一样的val 相同于  old)
    watch(() => state.aArray, (val, old) => {
      console.log(val, old)
    }, { deep: true })

    // 监听一个对象发生变化 (得出结论，监听引用类型要加{deep： true})
    const watchObjet = () => {
      state.obj.aa += 45
    }
    // const stop = watch(() => state.obj, (val, old) => {
    watch(() => state.obj, (val, old) => {
      console.log(val, old)
    }, { deep: true })
    // console.log(stop()) 停止观察

    // 生命周期函数
    onMounted(() => {
      console.log('mounted执行了')
    })

    onUpdated(() => {
      console.log('update执行了')
    })

    onUnmounted(() => {
      console.log('distoryed执行了')
    })

    return {
      ...toRefs(state),
      homeName,
      handleArray,
      watchValue,
      watchObjet
    }
  }
})
</script>
