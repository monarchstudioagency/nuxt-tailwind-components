<template>
  <nav class="flex space-x-4 overflow-x-auto" aria-label="Tabs">
    <a v-for="tab in tabs" :key="tab.name" @click="$emit('click', tab.label)"
       :class="[tab.label === value ? 'bg-blue-100 text-blue-700' : 'bg-grey-100 text-grey-700 hover:bg-slate-50', 'cursor-pointer px-3 py-2 font-medium text-sm rounded-md whitespace-nowrap']">
      {{ tab.name }}
    </a>
  </nav>
</template>

<script>

export default {
  name: 'TwLabelTabs',
  props: {
    value: String,
    tabs: Array
  }
}
</script>
