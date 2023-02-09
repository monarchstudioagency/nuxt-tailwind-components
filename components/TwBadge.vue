<template>
    <span>
      <span :class="[
        circle ? 'rounded-full' : 'rounded-md',
        getMainClass,
        closable ? 'pr-0.5' : 'pr-2',
        'inline-flex items-center text-xs font-medium py-0.5 pl-2',
        ]">
      <span class="mr-1.5 flex-shrink-0 flex items-center justify-center" v-if="status">
         <span :class="['h-1.5 w-1.5 rounded-full', getStatusClass]" aria-hidden="true"></span>
      </span>
      <slot></slot>
      <button v-if="closable"
              @click="$emit('close')" type="button"
              :class="[
                  getCloseClass,
                  'flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center focus:outline-none focus:text-white'
                  ]">
        <hero-solid-x-mark class="w-3 h-3"/>
      </button>
      </span>
    </span>
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
    }
  },
  computed: {
    getMainClass() {
      if(this.status) {
        return "bg-white border border-neutral-200 text-neutral-700";
      }
      switch (this.type) {
        case "primary":
          return `bg-primary-50 text-primary-700`;
        case "error":
          return `bg-red-50 text-red-700`;
        case "success":
          return `bg-green-50 text-green-700`;
        case "warning":
          return `bg-orange-50 text-orange-700`;
        case "default":
          return `bg-white border border-neutral-200 text-neutral-700`;
      }
    },
    getStatusClass() {
      switch (this.type) {
        case "primary":
          return `bg-primary-600`;
        case "error":
          return `bg-red-600`;
        case "success":
          return `bg-green-600`;
        case "warning":
          return `bg-orange-600`;
        case "default":
          return `bg-neutral-600`;
      }
    },
    getCloseClass() {
      switch (this.type) {
        case "primary":
          return "text-primary-400 hover:bg-primary-100 hover:text-primary-500 focus:text-primary-600";
        case "error":
          return "text-red-400 hover:bg-red-100 hover:text-red-500 focus:text-red-600";
        case "success":
          return "text-success-400 hover:bg-success-100 hover:text-success-500 focus:text-success-600";
        case "warning":
          return "text-warning-400 hover:bg-warning-100 hover:text-warning-500 focus:text-warning-600";
        case "default":
          return "text-neutral-400 hover:bg-neutral-100 hover:text-neutral-500 focus:text-neutral-600";
      }
    }
  }
}
</script>
