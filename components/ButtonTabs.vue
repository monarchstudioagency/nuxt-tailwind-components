<template>
  <div class="block">
    <nav class="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
      <a v-for="tab in tabs" :key="tab.label" @click="$emit('click', tab.label)"
         :class="[tab.label === value ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700', 'cursor-pointer group relative min-w-0 flex-1 overflow-hidden bg-white py-3 px-4 text-xs font-medium text-center hover:bg-gray-50 focus:z-10']">
        <span>{{ tab.name }}</span>
        <span aria-hidden="true" :class="[tab.label === value ? 'bg-blue-500' : 'bg-transparent', 'absolute inset-x-0 bottom-0 h-0.5']" />
      </a>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'TwButtonTabs',
  props: {
    value: String,
    tabs: Array
  },
  watch: {
    value() {
      console.log(this.value)
    }
  }
}
</script>
