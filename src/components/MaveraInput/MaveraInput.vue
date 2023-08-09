<script setup lang="ts">
import { ref, computed } from 'vue'
defineProps<{
  disabled?: boolean
  placeholder?: string
  type?: string
}>()

// data
const inputValue = ref('')
const isFocused = ref(false)
const isError = ref(false)
const errorMessage = ref('')

//computed
const hasValue = computed(() => inputValue.value.trim().length > 0 && isFocused.value)
</script>

<template>
  <div class="input-container">
    <input
      v-model="inputValue"
      :type="type"
      class="material-input"
      :class="{
        'material-input--focused': hasValue,
        'material-input--disabled': disabled,
        'material-input--error': isError
      }"
      :disabled="disabled"
      :placeholder="placeholder"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
    <div v-show="isFocused && inputValue.length === 0 && !isError" class="focus-border"></div>
    <div v-if="isError" class="error-text">{{ errorMessage }}</div>
  </div>
</template>

<style scoped>
.input-container {
  position: relative;
  width: 100%;
}

.material-input {
  border: 1px solid #f2f5f8;
  background-color: #f6f8fa;
  outline: none;
  padding: 10px;
  border-radius: 14px;
  width: 100%;
}

.material-input:hover {
  border: 1px solid #d5dbe2;
}

.material-input--focused {
  background-color: white;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
}

.material-input--disabled {
  background-color: #f6f8fa;
  color: #b0b0b0;
  cursor: not-allowed;
  opacity: 0.6;
  box-shadow: none !important;
  border: 1px solid #f2f5f8;
  border-radius: 14px;
}

.material-input--disabled:hover {
  border: 1px solid #f2f5f8;
}

.material-input--error {
  border: 1px solid red;
  background-color: white;
}

.material-input--error:hover {
  border: 1px solid red;
  background-color: white;
}

.error-text {
  color: red;
  font-size: 10px;
  padding-top: 5px;
  padding-left: 15px;
}

.focus-border {
  position: absolute;
  bottom: 0;
  left: 10%;
  width: 80%;
  height: 2px;
  background-color: blue;
  border-radius: 14px;
  transform: scaleX(0);
  transform-origin: center;
}

input:focus + .focus-border {
  animation: expandFocus 0.6s forwards;
}

@keyframes expandFocus {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}
</style>
