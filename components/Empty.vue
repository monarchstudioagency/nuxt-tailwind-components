<template>
  <div class="text-center">
    <tw-icon :icon="icon" class="mx-auto h-12 w-12 text-gray-400"/>
    <h3 class="mt-2 text-sm font-medium text-gray-900">{{ title }}</h3>
    <p class="mt-1 text-xs text-slate-500" v-if="description">{{ description }}</p>
    <div class="mt-6" v-if="buttonText">
      <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" @click="$emit('click')">
        <!-- Heroicon name: solid/plus -->
        <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
        </svg>
        {{ buttonText }}
      </button>
    </div>
  </div>

</template>

<script>
  export default {
    name: "TwEmpty",
    props: {
      icon: {
        type: String,
        default: "folder"
      },
      title: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      buttonText: {
        type: String,
        default: ''
      },
      route: {
        type: String,
        default: '/'
      }
    }
  }
</script>
