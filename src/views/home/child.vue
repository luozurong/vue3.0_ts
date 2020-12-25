<template>
  <div>组件{{counts}}</div>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'
export default defineComponent({
  name: 'child',
  props: {
    counts: Number
  },
  setup (props) {
    const getCurrent = getCurrentInstance()
    console.log(getCurrent)

    console.log(props.counts)
    return {

    }
  }
})
</script>
