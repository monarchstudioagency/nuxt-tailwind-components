<template>
  <button type="button"
          :class="['items-center', customClass ? customClass : custom]" @click="$emit('click')">
    <tw-loading v-if="loading"/>
    <slot v-else/>
  </button>
</template>

<script>

export default {
  name: "TwButton",
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    custom: '',
    rounded: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    },
    loadingTheme: {
      type: String,
      default: 'dark'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium'
    },
  },
  computed: {
    customClass() {

      let return_class = "inline-flex font-medium shadow-sm "

      switch (this.type) {
        case "primary":
          return_class += "border border-transparent text-white bg-primary-600 hover:bg-primary-700";
          break;
        case "default":
          return_class += "border border-gray-200 text-gray-600 bg-white hover:border-gray-500";
          break;
        case "success":
          return_class += "border border-transparent bg-green-600 text-white hover:bg-green-700";
          break;
        case "error":
          return_class += "border border-transparent bg-rose-600 text-white hover:bg-rose-700";
          break;
        case "white":
          return_class += "shadow-sm text-gray-600 bg-white hover:bg-gray-100";
          break;
        case "black":
          return_class += "border border-transparent font-medium text-white bg-gray-800 hover:bg-blue-700";
          break;
        case "active":
          return_class += "border border-violet-500 font-medium text-violet-600 bg-violet-50 hover:bg-violet-100";
          break;
        case "custom":
          return null;
        default:
          return_class += "border border-transparent text-white bg-blue-600 hover:bg-blue-700";
          break;
      }

      if (this.rounded) {
        return_class += " rounded-full"
      } else {
        return_class += " rounded-md"
      }
      if (this.circle) {
        return_class += " rounded-full w-8 h-8 p-1 flex justify-center items-center "
      } else {
        return_class += this.size === "large" ? "" : " px-4 py-2 "
      }
      if (this.full) {
        return_class += " w-full justify-center "
      }
      if (this.disabled) {
        return_class += " opacity-50 cursor-not-allowed "
      }

      if(this.size === "medium") {
        return_class += " text-sm "
      }

      if(this.size === "small") {
        return_class += " text-xs px-3 py-2 "
      }

      if(this.size === "mini") {
        return_class += " text-xs px-2 py-1 "
      }

      if(this.size === "large") {
        return_class += " text base px-6 py-3 "
      }

      return return_class

    },
    loadingClass() {

      switch (this.type) {
        case "primary":
          return "text-white";
        case "default":
          return "text-gray-500";
        case "white":
          return "text-gray-500";
        case "black":
          return "text-white";
        case "custom":
          return "text-white";
        default:
          return "text-white";
      }
    }
  }
}
</script>
