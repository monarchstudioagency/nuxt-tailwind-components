<template>
  <div class="border-b border-gray-200">
    <nav class="-mb-px flex space-x-8 overflow-x-auto" aria-label="Tabs">
      <a v-for="tab in tabs" :key="tab.name" @click="$emit('click', tab)"
         :class="[tab.current ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'cursor-pointer whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm']">
        {{ tab.name }}
      </a>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'TwBorderTabs',
  props: {
    tabs: {
      type: Array,
      default: []
    }
  }
}
</script>
