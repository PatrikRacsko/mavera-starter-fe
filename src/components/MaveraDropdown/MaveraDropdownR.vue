<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  placeholder?: string
}>()

const options = ['Option 1', 'Option 2', 'Option 3']
const selectedValue = ref('')
const isDropdownOpen = ref(false)

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value
}

function selectOption(option: string) {
  selectedValue.value = option
  isDropdownOpen.value = false
}
</script>

<template>
  <div class="dropdown-container" @click="toggleDropdown">
    <input
      v-model="selectedValue"
      readonly
      class="material-dropdown-input"
      :class="{ 'list-open': isDropdownOpen }"
      :placeholder="placeholder"
    />
    <div class="chevron"></div>
    <ul v-if="isDropdownOpen" class="material-dropdown-list">
      <li v-for="option in options" :key="option" @click="selectOption(option)">
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.dropdown-container {
  position: relative;
}

.material-dropdown-input {
  border: 1px solid #f2f5f8;
  background-color: #f6f8fa;
  outline: none;
  padding: 10px;
  border-radius: 14px;
  width: 100%;
  cursor: pointer;
  font-size: 14px;
  width: 100%;
}

.material-dropdown-input.list-open {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.chevron {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #333; /* Chevron color */
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  transition: transform 0.3s ease;
}

.dropdown-container:hover .chevron {
  border-top-color: #999;
}

.material-dropdown-input.list-open + .chevron {
  transform: translateY(-50%) rotate(180deg);
}

.material-dropdown-list {
  border: 1px solid #f2f5f8;
  border-top: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
  width: 100%;
  z-index: 20;
}

.material-dropdown-list li {
  padding: 10px;
  cursor: pointer;
}

.material-dropdown-list li:hover {
  background-color: #f6f8fa;
}
</style>
