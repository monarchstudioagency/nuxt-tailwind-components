<template>
  <div class="group relative inline-block text-left" tabindex="-1">
    <slot name="trigger"/>
    <div :class="['relative invisible -translate-y-2 scale-95 transform opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100 z-50']">
      <div :class="['absolute mt-2 w-64 divide-y divide-gray-100 rounded-md border border-gray-200 bg-white shadow-lg outline-none z-50', getPositionOrigin.origin, getPositionOrigin.position]" role="menu">
        <slot name="header"></slot>
        <div class="p-1.5">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "TwDropdown",
  props: {
    position: {
      type: String,
      default: "top-right"
    }
  },
  computed: {
    getPositionOrigin() {

      const DATA = {};

      switch (this.position) {
        case "top-left":
          DATA.origin = "origin-top-left"
          DATA.position = "left-0"
          break;
        case "top-right":
          DATA.origin = "origin-top-right"
          DATA.position = "right-0"
          break;
        case "bottom-left":
          DATA.origin = "origin-bottom-left"
          DATA.position = "left-0"
          break;
        case "bottom-right":
          DATA.origin = "origin-bottom-right"
          DATA.position = "right-0"
          break;
      }

      return DATA;
    }
  }
}
</script>
