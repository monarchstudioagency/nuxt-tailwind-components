<template>
  <component :is="composeIconName" :class="customClass" aria-hidden="true"></component>
</template>

<script>
export default {
  name: "TwIcon",
  props: {
    icon: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'outline',
    },
    customClass: null
  },
  computed: {
    composeIconName() {
      if(this.icon) {
        return `hero-${this.type}-${this.icon}`;
      } else {
        return null;
      }
    }
  }
}
</script>