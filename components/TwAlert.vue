<template>
  <div :class="['rounded-md p-4 border', background]">
    <div class="flex">
      <div class="flex-shrink-0">
        <hero-outline-information-circle v-if="['primary', 'blue', 'neutral'].includes(color)" :class="['h-5 w-5', textColor]"/>
        <hero-outline-exclamation-circle v-if="color === 'orange'" :class="['h-5 w-5', textColor]"/>
        <hero-outline-x-circle v-if="color === 'red'" :class="['h-5 w-5', textColor]"/>
        <hero-outline-check-circle v-if="color === 'green'" :class="['h-5 w-5', textColor]"/>
      </div>
      <div class="ml-3">
        <h3 :class="['text-md leading-none font-medium', textColor]">{{ title }}</h3>
        <div :class="['mt-2 text-sm', textColorDarken]" v-if="description">
          <p>{{ description }}</p>
        </div>
        <div class="mt-4" v-if="btnText">
          <div class="-mx-2 -my-1.5 flex">
            <button type="button"
                    @click="$emit('click')"
                    :class="['px-2 py-1.5 rounded-md text-sm font-medium', btnBackground, textColorDarken]">
              {{ btnText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "TwAlert",
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    title: {
      type: String,
      default: '',
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    btnText: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      background: 'bg-primary-50 border-primary-200',
      btnBackground: 'bg-primary-100 hover:bg-primary-200',
      textColor: 'text-primary-700',
      textColorDarken: 'text-primary-800'
    }
  },
  mounted() {
    switch (this.color) {
      case "blue":
        this.background = 'bg-blue-50 border-blue-200';
        this.btnBackground = 'bg-blue-100 hover:bg-blue-200';
        this.textColor = 'text-blue-700';
        this.textColorDarken = 'text-blue-800';
        break;
      case "neutral":
        this.background = 'bg-neutral-50 border-neutral-200';
        this.btnBackground = 'bg-neutral-100 hover:bg-neutral-200';
        this.textColor = 'text-neutral-700';
        this.textColorDarken = 'text-neutral-800';
        break;
      case "orange":
        this.background = 'bg-orange-50 border-orange-200';
        this.btnBackground = 'bg-orange-100 hover:bg-orange-200';
        this.textColor = 'text-orange-700';
        this.textColorDarken = 'text-orange-800';
        break;
      case "red":
        this.background = 'bg-red-50 border-red-200';
        this.btnBackground = 'bg-red-100 hover:bg-red-200';
        this.textColor = 'text-red-700';
        this.textColorDarken = 'text-red-800';
        break;
      case "green":
        this.background = 'bg-green-50 border-green-200';
        this.btnBackground = 'bg-green-100 hover:bg-green-200';
        this.textColor = 'text-green-700';
        this.textColorDarken = 'text-green-800';
        break;
      default:
        this.background = 'bg-primary-50 border-primary-200';
        this.btnBackground = 'bg-primary-100 hover:bg-primary-200';
        this.textColor = 'text-primary-700';
        this.textColorDarken = 'text-primary-800';
        break;
    }
  }
}
</script>
