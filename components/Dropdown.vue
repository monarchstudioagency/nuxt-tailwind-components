<template>
  <div class="relative inline-block text-left">
    <div @click="dropdownState = !dropdownState">
      <slot name="trigger"></slot>
    </div>
    <div
        :class="['dropdown-container absolute origin-top-right mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-40', dropdownStateClass, positionState]"
        role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
      <slot name="header"></slot>
      <div class="py-1" role="none">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import TwIcon from "@thomsmonarch/tw-ui/components/Icon.vue";

export default {
  name: "TwDropdown",
  components: {TwIcon},
  props: {
    position: {
      type: String,
      default: "left"
    }
  },
  data() {
    return {
      dropdownState: false
    }
  },
  methods: {
    close(e) {
      if (!this.$el.contains(e.target)) this.dropdownState = false;
    }
  },
  computed: {
    dropdownStateClass() {
      if (this.dropdownState) {
        return "open";
      } else {
        return "";
      }
    },
    positionState() {

      switch (this.position) {
        case "left":
          return 'right-0';
        case "right":
          return 'left-0';
      }

    }
  },
  mounted() {
    if (process.client) document.addEventListener('click', this.close)
  },
  beforeDestroy() {
    if (process.client) document.removeEventListener('click', this.close)
  }
}
</script>
