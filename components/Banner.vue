<template>
  <div :class="['pb-2 sm:pb-5 w-full', hide]">
    <div class="w-full mx-auto">
      <div class="p-2 rounded-lg bg-gray-700 shadow-lg sm:p-3">
        <div class="flex items-center justify-between flex-wrap">
          <div class="w-0 flex-1 flex items-center">
          <span class="flex p-2 rounded-lg bg-gray-800">
            <tw-icon :icon="icon" custom-class="h-6 w-6 text-white"/>
          </span>
            <p class="ml-3 font-base text-white truncate text-sm">
              <span class="md:hidden" v-if="smallTitle"> {{ smallTitle }} </span>
              <span :class="smallTitle ? 'hidden md:inline' : 'inline'"> {{ title }} </span>
            </p>
          </div>
          <div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <nuxt-link :to="to" class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50">
              {{ buttonText }} </nuxt-link>
          </div>
          <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
            <button type="button" class="-mr-1 flex p-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-white" @click="hideBanner">
              <span class="sr-only">Dismiss</span>
              <!-- Heroicon name: outline/x -->
              <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TwIcon from "@thomsmonarch/tw-ui/components/Icon.vue";

export default {
  name: "TwBanner",
  components: {TwIcon},
  props: {
    id: {
      type: String,
      default: 'top_banner'
    },
    icon: {
      type: String,
      default: 'speakerphone'
    },
    smallTitle: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    buttonText: {
      type: String,
      default: ''
    },
    action: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: '/'
    }
  },
  data() {
    return {
      hide: 'hidden'
    }
  },
  methods: {
    hideBanner() {
      this.hide = "hidden";
      if(process.client) {
        localStorage.setItem(this.id, "hidden");
      }
    }
  },
  mounted() {
    if(process.client) {
      if(!localStorage.getItem(this.id)) {
        this.hide = ''
      }
    }
  }
}
</script>
