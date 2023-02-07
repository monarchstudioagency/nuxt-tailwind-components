<template>
  <div>
    <label :for="id" class="block text-sm font-medium text-gray-700 mb-1" v-if="label">{{ label }}</label>
    <select :id="id" :name="id"
            v-model="value"
            @input="$emit('input', $event.target.value)"
            class="border block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            @change="$emit('change', $event.target.value)">
      <slot></slot>
    </select>
  </div>
</template>

<script>

export default {
  name: "TwSelect",
  props: {
    label: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: 'select'
    },
    value: [String, Boolean, Number]
  }
}
</script>
