<script setup lang="ts">
import { computed, ref } from 'vue'
defineProps<{
  disabled?: boolean
}>()
const isChecked = ref(false)

const checkboxId = computed(() => {
  return `materialCheckbox-${Math.random().toString(36).substr(2, 9)}`
})
</script>

<template>
  <div class="checkbox-container">
    <input
      :id="checkboxId"
      v-model="isChecked"
      :disabled="disabled"
      type="checkbox"
      class="hidden-checkbox"
    />
    <label :for="checkboxId" class="material-checkbox-label">
      <span class="checkmark"></span>
    </label>
  </div>
</template>

<style scoped>
.checkbox-container {
  position: relative;
  display: inline-block;
}

.hidden-checkbox {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.material-checkbox-label {
  position: relative;
  padding-left: 20px;
  cursor: pointer;
  user-select: none;
  background-color: #f6f8fa;
  border: 1px solid #f2f5f8;
  height: 20px;
  display: inline-block;
  border-radius: 6px;
}

.hidden-checkbox:checked ~ .material-checkbox-label {
  background-color: blue;
  border: 1px solid blue;
}

.checkmark {
  position: absolute;
  top: 50%;
  left: 50%;
}

.hidden-checkbox:checked ~ .material-checkbox-label .checkmark:after {
  content: '';
  position: absolute;
  left: -3px;
  top: -6px;
  width: 6px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.material-checkbox-label:hover {
  border-color: #d5dbe2;
}

.hidden-checkbox:disabled ~ .material-checkbox-label {
  background-color: #f6f8fa;
  border-color: #d5dbe2;
  cursor: not-allowed;
  opacity: 0.6;
}

.hidden-checkbox:disabled:checked ~ .material-checkbox-label {
  background-color: #e0e0e0;
  border-color: #d5dbe2;
}

.hidden-checkbox:disabled ~ .material-checkbox-label:hover,
.hidden-checkbox:disabled:checked ~ .material-checkbox-label:hover {
  border-color: #d5dbe2;
  background-color: #f6f8fa;
  cursor: not-allowed;
}
</style>
