<template>
  <nuxt-link v-if="to" :to="to" :class="['cursor-pointer inline-flex', customClass]">
    <slot></slot>
  </nuxt-link>
  <a :class="['cursor-pointer inline-flex items-center', customClass]" v-else @click="$emit('click')"><slot/></a>
</template>

<script>
export default {
  name: "TwLink",
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'default'
    },
    underline: {
      type: Boolean,
      default: false
    },
    to: {
      type: String
    }
  },
  computed: {
    customClass() {

      let style;

      switch (this.type) {
        case "primary":
          style = "font-medium text-blue-600"
          break;
        case "default":
          style = "font-medium text-gray-900"
          break;
        case "danger":
          style = "font-medium text-red-600"
          break;
        case "success":
          style = "font-medium text-emerald-600"
          break;
        case "white":
          style = "font-medium text-white"
          break;
        default:
          style = "font-medium text-blue-600"
          break;
      }

      switch (this.size) {
        case "small":
          style += " text-xs"
          break;
        case "default":
          style += " text-sm"
          break;
        default:
          style += " text-sm";
          break;
      }

      if (this.underline) style += ' underline'

      return style

    }
  },
}
</script>
