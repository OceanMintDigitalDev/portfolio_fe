export default defineAppConfig({
  ui: {
    strategy: 'override',
    notifications: {
      // Show toasts at the top right of the screen
      // wrapper: 'fixed flex flex-col justify-end z-[55]',
      position: 'top-0 right-0'
    }
  }
})