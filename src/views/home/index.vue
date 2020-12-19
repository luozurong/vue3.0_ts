<template>
  <div>home</div>
  <span @click="handleArray">操作数组</span>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'
export default defineComponent({
  name: 'home',
  setup () {
    interface Ia {
      name?: string;
      value?: number;
    }
    const aArray: Ia[] = []
    const state = reactive({
      aArray
    })

    const homeName = ref('首页')
    const handleArray = () => {
      state.aArray.push({
        name: 'a',
        value: 1
      })
      state.aArray.forEach((item: Ia) => {
        console.log(item)
      })
    }
    return {
      ...toRefs(state),
      homeName,
      handleArray
    }
  }
})
</script>
