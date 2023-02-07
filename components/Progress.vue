<template>
  <div class="h-1 w-full bg-gray-200 overflow-hidden rounded">
    <div :style="`width: ${percentage}%`" :class="['transition-all ease-in-out duration-300 h-full', percentage < 70 ? 'bg-blue-500' : 'bg-red-500']"></div>
  </div>
</template>

<script>
export default {
  name: "TwProgress",
  props: {
    percentage: {
      type: Number,
      default: 0
    }
  }
}
</script>
