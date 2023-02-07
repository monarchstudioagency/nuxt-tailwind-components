<template>
  <section id="tw-drawer" :class="{'open': open}" aria-labelledby="slide-over-title" role="dialog"
           aria-modal="true">
    <div id="tw-drawer-panel-box" class="flex flex-col divide-y divide-gray-200 overflow-y-auto">
      <div class="flex items-start justify-between py-7 px-4 sm:px-7">
        <h2 class="text-lg font-medium text-gray-900"> {{ title }} </h2>
        <div class="ml-3 h-7 flex items-center">
          <button type="button"
                  class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  @click="$emit('close')">
            <tw-icon icon="x" class="h-6 w-6" aria-hidden="true" @click.native="$emit('close')"/>
          </button>
        </div>
      </div>
      <div class="relative flex-1 h-full py-7 px-4 sm:px-7">
        <slot></slot>
      </div>
      <div class="flex flex-shrink-0 justify-end px-4 py-4" v-if="footer">
        <slot name="footer"/>
      </div>
    </div>
  </section>
</template>

<script>
import TwIcon from "@thomsmonarch/tw-ui/components/Icon.vue";

export default {
  name: "TwDrawer",
  components: {TwIcon},
  props: {
    open: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Panel title'
    },
    footer: Boolean
  }
}
</script>
