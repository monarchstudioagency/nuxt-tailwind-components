<template>
  <div class="relative flex items-start">
    <div class="flex items-center h-5">
      <input
          :value="value"
          @input="handleInput($event.target.checked)"
          :id="label" aria-describedby="description" :name="label" type="checkbox" :checked="value"
          class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded cursor-pointer"
          @change="handleChange($event.target.checked)">
    </div>
    <div class="ml-3 text-sm">
      <label :for="label" class="font-medium text-gray-700">{{ text }}</label>
      <p class="text-gray-500" v-if="description">{{ description }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "TwCheckbox",
  props: {
    label: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean
    }
  },
  methods: {
    handleChange(value) {
      this.$emit('change', value)
    },
    handleInput(value) {
      this.$emit('input', value)
    },
  }
}
</script>
