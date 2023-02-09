<template>
  <div :class="['w-full border-t border-neutral-200', getSpace]"></div>
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
      switch (this.space) {
        case "1": {
          return "my-1";
        }
        case "2": {
          return "my-2";
        }
        case "3": {
          return "my-3";
        }
        case "4": {
          return "my-4";
        }
        case "5": {
          return "my-5";
        }
      }
    }
  }
}
</script>
