<template>
  <div :class="['w-full border-t border-gray-200', getSpace]"></div>
</template>

<script>
export default {
  name: "TwDivider",
  props: {
    space: {
      type: String,
      default: "3"
    }
  },
  computed: {
    getSpace() {
      return `my-${this.space}`;
    }
  }
}
</script>
