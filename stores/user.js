export const useUserStore = defineStore(
  "user",
  () => {
    const auth = ref({})
    return {
      auth
    }
  },
  {
    persist: [
      {
        key: 'auth',
        paths: ['auth']
      }
    ]
  }
)
