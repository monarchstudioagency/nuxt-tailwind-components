<template>
  <div class="group relative">
    <span :class="[
        getPositionClass,
        'shadow-lg max-w-md transform text-xs text-neutral-600 border border-neutral-200 font-medium bg-white px-2.5 py-1.5 rounded-md hidden group-hover:block absolute text-center z-50']">
      {{ text }}
    </span>
    <slot/>
  </div>
</template>

<script>
export default {
  name: "TwTooltip",
  props: {
    text: {
      type: String,
      default: false
    },
    position: {
      type: String,
      default: 'top'
    },
    theme: {
      type: String,
      default: "light"
    }
  },
  computed: {
    getPositionClass() {
      switch (this.position) {
        case "top":
          return "left-1/2 -translate-x-1/2 -translate-y-full"
        case "right":
          return "top-1/2 -translate-y-1/2 translate-x-full -right-2"
        case "left":
          return "top-1/2 -translate-y-1/2 -translate-x-full -left-2"
        case "bottom":
          return "left-1/2 -translate-x-1/2 translate-y-full"
      }
    }
  }
}
</script>