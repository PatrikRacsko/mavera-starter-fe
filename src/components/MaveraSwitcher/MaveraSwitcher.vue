<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  }
})

const isToggled = ref(false)

const toggleSwitch = () => {
  if (!props.disabled) {
    isToggled.value = !isToggled.value
  }
}
</script>

<template>
  <div class="switcher-container" @click="toggleSwitch">
    <input v-model="isToggled" type="checkbox" class="hidden-switch" :disabled="isDisabled" />
    <div :class="{ 'material-switch': true, 'is-on': isToggled, 'is-disabled': isDisabled }">
      <div class="slider">
        <div v-for="i in 6" :key="i" class="dot"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.switcher-container {
  width: 60px;
  height: 30px;
  position: relative;
}

.hidden-switch {
  display: none;
}

.material-switch {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #e0e0e0;
  border-radius: 10px;
  transition: background-color 0.3s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between; /* To handle the space on both sides */
}

.material-switch.is-on {
  background-color: blue;
}

.material-switch .slider {
  width: 15px; /* Adjusted width for new size */
  height: 25px; /* Adjusted height for new size */
  background-color: white;
  border-radius: 7px; /* Adjusted to maintain the rectangle shape */
  position: relative;
  transition: transform 0.3s;
  margin-left: 5px;
}

.material-switch.is-on .slider {
  transform: translateX(35px); /* Adjusted translation to center the slider */
}

.material-switch.is-disabled {
  cursor: not-allowed;
}

.dot {
  width: 2px; /* Adjusted dot size */
  height: 2px;
  background-color: #b0b0b0;
  border-radius: 50%;
  position: absolute;
}

/* Dots positioning */
.dot:nth-child(1) {
  top: 4px;
  left: 4px;
}
.dot:nth-child(2) {
  top: 4px;
  right: 4px;
}
.dot:nth-child(3) {
  top: 12px;
  left: 4px;
}
.dot:nth-child(4) {
  top: 12px;
  right: 4px;
}
.dot:nth-child(5) {
  top: 20px;
  left: 4px;
}
.dot:nth-child(6) {
  top: 20px;
  right: 4px;
}
</style>
