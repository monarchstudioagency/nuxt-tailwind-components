<template>
  <nav class="py-3 flex items-center" aria-label="Pagination">
    <div v-if="from > 1">
      <button @click="$emit('previous')" type="button"
              class="mr-3 relative inline-flex items-center px-2 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
        <tw-icon icon="chevron-left" class="w-4"/>
      </button>
    </div>
    <div class="hidden sm:block">
      <p class="text-sm text-slate-700">
        <span class="font-medium">{{ from }}</span>
        -
        <span class="font-medium">{{ offset >= total ? total : offset }}</span>
        sur
        <span class="font-medium">{{ total }}</span>
      </p>
    </div>
    <div v-if="offset < total">
      <button @click="$emit('next')" type="button" class="ml-3 relative inline-flex items-center px-2 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
        <tw-icon icon="chevron-right" class="w-4"/>
      </button>
    </div>
  </nav>

</template>

<script>
import TwIcon from "@thomsmonarch/tw-ui/components/Icon.vue";

export default {
  name: 'TwPagination',
  components: {TwIcon},
  props: {
    offset: {
      type: Number,
      default: 25
    },
    from: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    }
  }
}
</script>