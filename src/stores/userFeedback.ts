import { defineStore } from 'pinia'

export const useUserFeedbackStore = defineStore('userFeedback', {
  state: () => ({
    loading: false
  })
})
