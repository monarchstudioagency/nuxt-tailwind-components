<template>
  <div class="relative">
    <span style="width: fit-content;" :class="['z-10 text-xs px-2 py-1 absolute rounded shadow-md text-center', hidden, positionClass, typeClass]" role="tooltip">
      {{ content }}
    </span>
    <span @mouseenter="mouseEnter" @mouseleave="mouseLeave" aria-describedby="tooltip">
      <slot></slot>
    </span>
  </div>
</template>

<style scoped>
.tooltip-top {
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>

<script>
export default {
  name: "TwTooltip",
  props: {
    content: {
      type: String,
      default: false
    },
    position: {
      type: String,
      default: 'top'
    },
    type: {
      type: String,
      default: 'default'
    }
  },
  data() {
    return {
      hidden: 'hidden'
    }
  },
  computed: {
    positionClass() {
      if(this.position === 'top') {
        return 'tooltip-top';
      }
    },
    typeClass() {
      if(this.type === 'default') {
        return "bg-gray-700 text-gray-100"
      }
      if(this.type === 'success') {
        return "bg-emerald-500 text-white"
      }
      if(this.type === 'warning') {
        return "bg-orange-500 text-white"
      }
    }
  },
  methods: {
    mouseEnter() {
      this.hidden = '';
    },
    mouseLeave() {
      this.hidden = 'hidden';
    }
  }
}
</script>