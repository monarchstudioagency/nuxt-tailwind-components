<template>
  <a @click="$emit('click')" class="rounded-lg cursor-pointer text-neutral-700 block px-4 py-2 text-sm hover:bg-neutral-50 hover:text-neutral-900 flex items-center" role="menuitem" tabindex="-1">
    <slot></slot>
  </a>
</template>

<script>

export default {
  name: "TwDropdownItem",
  props: {
    to: String
  }
}
</script>
