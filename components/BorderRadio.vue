<template>
  <fieldset>
    <legend class="text-sm font-medium text-slate-900">{{ label }}</legend>

    <div :class="`mt-4 grid grid-cols-1 gap-y-4 sm:gap-x-4 sm:grid-cols-${grid}`">
      <label
          :class="[item.value === value ? 'bg-blue-50 border-blue-500 ring-1 ring-blue-500' : 'border-gray-300',
          'relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none']"
          v-for="item in items" :key="item.value">
        <input type="radio" :name="name" :value="item.value" class="sr-only" @change="$emit('change', item.value)">
        <span class="flex-1 flex">
          <span class="flex flex-col">
            <span class="block text-sm font-medium text-gray-900"> {{ item.label }} </span>
            <span class="mt-1 flex items-center text-sm text-gray-500" v-if="item.description"> {{ item.description }} </span>
            <span class="mt-6 text-sm font-medium text-gray-900" v-if="item.caption"> {{ item.caption }} </span>
          </span>
        </span>
        <tw-icon icon="check-circle" :class="[item.value !== value ? 'invisible' : '', 'h-5 w-5 text-blue-600']"/>
        <span :class="[item.value === value ? 'border border-blue-500' : 'border-2 border-transparent', 'absolute -inset-px rounded-lg pointer-events-none']" aria-hidden="true"></span>
      </label>

    </div>

    <!--Cheat code to have Tailwind class-->
    <span class="sm:grid-cols-2 sm:grid-cols-3 sm:grid-cols-4 sm:grid-cols-5"></span>

  </fieldset>
</template>

<script>
import TwIcon from "@thomsmonarch/tw-ui/components/Icon.vue";

export default {
  name: "TwBorderRadio",
  components: {TwIcon},
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: '',
      required: true
    },
    items: {
      type: Array,
      default: []
    },
    grid: {
      type: String,
      default: "3"
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
