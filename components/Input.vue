<template>
  <div>
    <div class="space-y-1">
      <label v-if="label" :for="id" class="block text-sm font-medium text-gray-700">
        {{ label }} </label>
      <div class="mt-1 relative rounded-md">
        <input :id="id" :name="id" :type="inputType" v-if="type !== 'textarea'"
               :value="value"
               @input="handleInput($event.target.value)"
               @keyup.enter="handleEnter"
               :placeholder="placeholder"
               @blur="handleBlur"
               :autocomplete="autocomplete"
               :min="min"
               :disabled="disabled === true"
               :maxlength="maxlength"
               :class="['appearance-none block w-full border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm disabled:bg-slate-50 disabled:text-slate-500', getSizeClass]"/>

        <!--Eye Icon-->
        <svg v-if="type === 'password'" @mousedown="inputType = 'text'" @mouseup="inputType = type"
            xmlns="http://www.w3.org/2000/svg" class="absolute w-5 h-5 right-3 top-2.5 text-slate-500 hover:text-slate-800 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>

        <textarea
            :id="id" :name="id"
            :class="['appearance-none block w-full border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm', getSizeClass]"
            @input="handleInput($event.target.value)"
            @blur="handleBlur"
            @keyup.enter="handleEnter"
            :placeholder="placeholder"
            :value="value"
            :rows="rows"
            v-if="type === 'textarea'"/>

        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" v-if="icon">
          <tw-icon :icon="icon" custom-class="h-5 w-5 text-slate-300" aria-hidden="true"/>
        </div>
        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none" v-if="textError">
          <tw-icon icon="exclamation-circle" custom-class="h-5 w-5 text-red-500" aria-hidden="true"/>
        </div>
        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none" v-if="textSuccess">
          <tw-icon icon="check-circle" custom-class="h-5 w-5 text-emerald-500" aria-hidden="true"/>
        </div>
      </div>
    </div>
    <p class="mt-2 text-xs text-red-600" v-if="textError">{{ textError }}</p>
  </div>
</template>

<script>
import TwIcon from "@thomsmonarch/tw-ui/components/Icon.vue";

export default {
  name: "TwInput",
  components: {TwIcon},
  props: {
    type: {
      type: String,
      default: 'text'
    },
    min: {type: String},
    maxlength: String,
    autocomplete: String,
    disabled: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: null
    },
    rows: {
      type: Number,
      default: 2
    },
    value: [String, Number],
    textError: {
      type: String,
      default: ''
    },
    textSuccess: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: "medium"
    }
  },
  data() {
    return  {
      inputType: this.type
    }
  },
  computed: {
    getSizeClass() {
      if (this.icon) {
        switch (this.size) {
          case "medium":
            return "pr-3 pl-10 py-2";
          case "large":
            return "pr-4 pl-8 py-3";
          default:
            return "pr-3 py-2 "
        }
      } else {
        switch (this.size) {
          case "medium":
            return "px-3 py-2";
          case "large":
            return "py-3 px-4";
          default:
            return "px-3 py-2 "
        }
      }
    },
  },
  methods: {
    handleInput(value) {
      this.$emit('input', value)
    },
    handleEnter(value) {
      this.$emit('enter', value)
    },
    handleBlur(value) {
      this.$emit('blur', value)
    }
  }
}
</script>
