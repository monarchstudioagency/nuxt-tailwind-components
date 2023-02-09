<template>
  <div :class="[
    {'border border-neutral-200': bordered},
    {'rounded-lg': rounded},
    'bg-white text-left text-neutral-800 overflow-x-auto max-w-full']">
    <div class="align-middle inline-block min-w-full">
      <div>
        <table
          :class="[
            {'rounded-lg': rounded},
            {'divide-y divide-neutral-200': !striped},
            'min-w-full text-sm'
            ]" :id="id">
          <thead>
          <tr>
            <th v-for="(h, index) in fields" :key="h.key" scope="col"
                :class="[
                      {'rounded-tl-lg' : index === 0 && rounded},
                      {'rounded-tr-lg' : index === fields.length - 1 && rounded},
                      'text-xs px-3 py-3 font-medium text-neutral-500 bg-white']">
              {{ h.label }}
            </th>
          </tr>
          </thead>
          <tbody :class="[
            {'divide-y divide-neutral-200': !striped},
            'bg-white']">
          <tr v-for="(item, index) in items"
              :class="[
                  {'bg-neutral-50': !isOdd(index) && striped},
                  cursor ? 'hover:bg-neutral-100 cursor-pointer' : ''
                  ]"
              @click="$emit('row-click', item)"
              @mouseenter="$emit('row-mouseenter', item)"
              @mouseleave="$emit('row-mouseleave', item)">
            <td :class="[
                {'rounded-bl-lg': (index === items.length - 1 && i === 0) && rounded},
                {'rounded-br-lg': (index === items.length - 1 && i === displayedFieldKeys.length - 1) && rounded},
                'px-3 py-2 whitespace-nowrap'
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
    rounded: {
      type: Boolean,
      default: true
    },
    bordered: {
      type: Boolean,
      default: true
    },
    striped: {
      type: Boolean,
      default: false
    },
    cursor: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: []
    },
    id: ''
  },
  methods: {
    isOdd(num) {
      return num % 2;
    }
  },
  computed: {
    displayedFieldKeys() {
      return Object.entries(this.fields).map(([_key, value]) => value.key);
    }
  }
}
</script>
