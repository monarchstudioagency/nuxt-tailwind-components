<template>
  <div>
    <div class="mt-3 relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-blue-600 focus-within:border-blue-600">
      <label :for="id"
             :class="['rounded-full absolute -top-2 left-2 -mt-px inline-block px-1 text-xs font-medium text-gray-500', disabled ? 'bg-slate-100' : 'bg-white']">
        {{ label }}
      </label>
      <textarea v-if="type === 'textarea'" :value="value" @input="handleInput($event.target.value)" @keyup.enter="handleEnter" :placeholder="placeholder" :rows="rows" :name="id" :id="id"
                class="outline-none block w-full border-0 p-0 text-gray-900 placeholder-gray-400 focus:ring-0 sm:text-sm" />
      <input v-else :value="value" @input="handleInput($event.target.value)" @keyup.enter="handleEnter"
             @blur="handleBlur"
             :type="type" :name="id" :id="id"
             :disabled="disabled"
             class="bg-transparent outline-none block w-full border-0 p-0 text-gray-900 placeholder-gray-400 focus:ring-0 sm:text-sm"
             :placeholder="placeholder" />
      <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <tw-icon icon="exclamation-circle" custom-class="h-5 w-5 text-red-500" aria-hidden="true" v-if="textError"/>
      </div>
      <slot></slot>
    </div>
    <p class="mt-2 text-xs text-red-600" v-if="textError">{{ textError }}</p>
  </div>
</template>

<script>
import TwIcon from "@thomsmonarch/tw-ui/components/Icon.vue";

export default {
  name: "TwIncludeInput",
  components: {TwIcon},
  props: {
    type: {
      type: String,
      default: 'text'
    },
    id: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    rows: {
      type: Number,
      default: 2
    },
    value: {
      type: String
    },
    textError: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput (value) {
      this.$emit('input', value)
    },
    handleEnter (value) {
      this.$emit('enter', value)
    },
    handleBlur (value) {
      this.$emit('blur', value)
    }
  }
}
</script>
