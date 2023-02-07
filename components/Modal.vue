<template>
  <div :class="['fixed z-10 inset-0 overflow-y-auto modal-container', open ? 'open' : '']">
    <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-gray-900 bg-opacity-90 bg-blur"/>
      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6 modal-content">
        <div>
          <button type="button" class="absolute cursor-pointer text-gray-400 hover:text-gray-900 right-5 top-6"
                  @click="$emit('close')">
            <tw-icon icon="x" custom-class="w-7 h-7"></tw-icon>
          </button>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TwIcon from "@thomsmonarch/tw-ui/components/Icon.vue";

export default {
  name: "TwModal",
  components: {TwIcon},
  props: {
    open: {
      type: Boolean,
      default: false
    }
  }
}
</script>