<template>
  <div>
    <nuxt-link v-if="to" :to="to" class="cursor-pointer text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50 hover:text-gray-900 flex items-center" role="menuitem" tabindex="-1">
      <slot></slot>
    </nuxt-link>
    <a v-else @click="$emit('click')" class="cursor-pointer text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50 hover:text-gray-900 flex items-center" role="menuitem" tabindex="-1">
      <slot></slot>
    </a>
  </div>
</template>

<script>

export default {
  name: "TwDropdownItem",
  props: {
    to: String
  }
}
</script>
