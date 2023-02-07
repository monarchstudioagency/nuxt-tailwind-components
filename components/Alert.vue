<template>
  <div :class="['rounded-md p-4 border', background]">
    <div class="flex">
      <div class="flex-shrink-0">
        <tw-icon :icon="icon" :class="['h-5 w-5', textColor]"/>
      </div>
      <div class="ml-3">
        <h3 :class="['text-sm font-medium', textColor]">{{ title }}</h3>
        <div :class="['mt-2 text-sm', textColorDarken]" v-if="description">
          <p class="text-xs">{{ description }}</p>
        </div>
        <div class="mt-4" v-if="btnText">
          <div class="-mx-2 -my-1.5 flex">
            <a :href="btnLink" v-if="btnLink"
               target="_blank"
               rel="noopener noreferrer"
               :class="['px-2 py-1.5 rounded-md text-sm font-medium', background, btnBackgroundHover, textColorDarken]">
              {{ btnText }}
            </a>
            <nuxt-link :to="to" v-else-if="to"
               :class="['px-2 py-1.5 rounded-md text-sm font-medium', background, btnBackgroundHover, textColorDarken]">
              {{ btnText }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TwIcon from "@thomsmonarch/tw-ui/components/Icon.vue";

export default {
  name: "TwAlert",
  components: {TwIcon},
  props: {
    type: {
      type: String,
      default: 'info'
    },
    title: {
      type: String,
      default: '',
      required: true
    },
    btnText: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    btnLink: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      background: 'bg-blue-50',
      btnBackgroundHover: 'hover:bg-blue-100',
      textColor: 'text-blue-700',
      textColorDarken: 'text-blue-800',
      icon: 'information-circle'
    }
  },
  mounted() {
    switch (this.type) {
      case "info":
        this.background = 'bg-blue-50 border-blue-200';
        this.btnBackgroundHover = 'hover:bg-blue-100';
        this.textColor = 'text-blue-700';
        this.textColorDarken = 'text-blue-800';
        this.icon = 'information-circle';
        break;
      case "warning":
        this.background = 'bg-orange-50 border-orange-200';
        this.btnBackgroundHover = 'hover:bg-orange-100';
        this.textColor = 'text-orange-700';
        this.textColorDarken = 'text-orange-800';
        this.icon = 'exclamation';
        break;
      case "error":
        this.background = 'bg-rose-50 border-rose-200';
        this.btnBackgroundHover = 'hover:bg-rose-100';
        this.textColor = 'text-rose-700';
        this.textColorDarken = 'text-rose-800';
        this.icon = 'x-circle';
        break;
      case "success":
        this.background = 'bg-green-50 border-green-200';
        this.btnBackgroundHover = 'hover:bg-green-100';
        this.textColor = 'text-green-700';
        this.textColorDarken = 'text-green-800';
        this.icon = 'check-circle';
        break;
    }
  }
}
</script>
