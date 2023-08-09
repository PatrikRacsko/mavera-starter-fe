<script setup lang="ts">
import MaveraInput from '@/components/MaveraInput/MaveraInput.vue'
//import MaveraCheckbox from '@/components/MaveraCheckbox/MaveraCheckbox.vue'
import MaveraSwitcher from '@/components/MaveraSwitcher/MaveraSwitcher.vue'
import MaveraDropdown from '@/components/MaveraDropdown/MaveraDropdownR.vue'
</script>

<template>
  <div class="registration-form">
    <h1>Registration Form</h1>

    <MaveraInput placeholder="Email" class="full-width-input" />

    <div class="two-columns">
      <MaveraInput placeholder="First name" />
      <MaveraInput placeholder="Last name" />
    </div>

    <div class="two-columns">
      <MaveraDropdown placeholder="Select country" />
      <MaveraDropdown placeholder="Select language" />
    </div>

    <div class="two-columns">
      <MaveraInput placeholder="Password" type="password" />
      <MaveraInput placeholder="Confirm password" type="password" />
    </div>

    <div class="privacy-row">
      <strong>Private profile</strong>
      <MaveraSwitcher />
    </div>

    <hr />
  </div>
</template>

<style scoped>
.registration-form {
  padding: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}

.full-width-input {
  width: 100%;
}

.two-columns {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
}

.privacy-row {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  align-items: center;
}

hr {
  width: 100%;
}

/* Mobile view: Stack elements */
@media (max-width: 768px) {
  .two-columns {
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
  .privacy-row {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
}
</style>
