<template>
  <div class="shadow rounded-lg border border-neutral-100 bg-white text-left text-neutral-800">
    <div class="align-middle inline-block min-w-full">
      <div :class="['', customClass]">
        <table class="min-w-full divide-y divide-gray-100 rounded-lg" :id="id" :style="customStyle">
          <thead>
          <tr>
            <th v-for="(h, index) in fields" :key="h.key" scope="col"
                :class="[
                      index === 0 ? 'rounded-tl-lg' : '',
                      index === fields.length - 1 ? 'rounded-tr-lg' : '',
                      'text-sm px-4 py-3 font-normal text-neutral-500 bg-neutral-50']">
              {{ h.label }}
            </th>
          </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="(item, index) in items"
              :class="[
                  cursor ? 'hover:bg-neutral-50 cursor-pointer' : ''
                  ]"
              @click="$emit('row-click', item)"
              @mouseenter="$emit('row-mouseenter', item)"
              @mouseleave="$emit('row-mouseleave', item)">
            <td :class="[
                (index === items.length - 1 && i === 0) ? 'rounded-bl-lg' : '',
                (index === items.length - 1 && i === displayedFieldKeys.length - 1) ? 'rounded-br-lg' : '',
                'px-4 py-3 whitespace-nowrap'
                ]" v-for="(key, i) in displayedFieldKeys">
              <slot
                :name="`cell(${key})`"
                :value="item[key]"
                :item="item">
                {{ item[key] }}
              </slot>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TwTable",
  props: {
    fields: {
      type: Array,
      default: []
    },
    cursor: {
      type: Boolean,
      default: true
    },
    items: {
      type: Array,
      default: []
    },
    id: '',
    customStyle: '',
    customClass: ''
  },
  computed: {
    displayedFieldKeys() {
      return Object.entries(this.fields).map(([_key, value]) => value.key);
    }
  }
}
</script>
