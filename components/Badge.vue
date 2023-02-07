<template>
  <div>
    <span :class="getDynamicClass">
      <div class="mr-1.5 flex-shrink-0 flex items-center justify-center" v-if="status">
                <span :class="['h-1.5 w-1.5 rounded-full', `bg-${statusColor}-500`]" aria-hidden="true"></span>
              </div>
      <slot></slot>
        <button v-if="closable"
                @click="$emit('close')" type="button"
                :class="['flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-blue-400 hover:bg-blue-200 hover:text-blue-500 focus:outline-none focus:bg-blue-500 focus:text-white']">
          <tw-icon icon="x" class="w-3 h-3"/>
        </button>
      </span>
  </div>
</template>

<script>

export default {
  name: "TwBadge",
  props: {
    status: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'medium'
    }
  },
  computed: {
    getDynamicClass() {

      let custom_class = 'inline-flex items-center text-xs font-semibold ';

      if (this.circle) {
        custom_class += " rounded-full ";
      } else {
        custom_class += " rounded-sm ";
      }

      if (!this.closable) {
        custom_class += " py-0.5 pl-2 pr-2";
      } else {
        custom_class += " py-0.5 pl-2 pr-0.5";
      }

      if (!this.status) {
        if (this.type === "primary") {
          custom_class += " bg-blue-100 text-blue-700 ";
        }
        if (this.type === "warning") {
          custom_class += " bg-orange-100 text-orange-700 ";
        }
        if (this.type === "error") {
          custom_class += " bg-rose-100 text-rose-700 ";
        }
        if (this.type === "success") {
          custom_class += " bg-emerald-100 text-emerald-700 ";
        }
        if (this.type === "default") {
          custom_class += " bg-white border border-200 text-gray-600 ";
        }
      } else {
        custom_class += " bg-white border border-200 text-gray-600 ";
      }

      return custom_class;
    },
    statusColor() {
      switch (this.type) {
        case "primary":
          return "blue";
        case "success":
          return "emerald";
        case "error":
          return "rose";
        case "warning":
          return "orange";
        case "default":
          return "slate";
      }
    }
  }
}
</script>
