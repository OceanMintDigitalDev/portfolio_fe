<script setup>
const appConfig = useAppConfig()

console.log(appConfig.ui)
</script>
<template>
  <div>
    <header class="sticky top-0 z-10">
      <Navbar></Navbar>
      
    </header>
    <main class="container mx-auto">
      <NuxtPage/>
      
    </main>

    <!-- <Icon name="line-md:document-code" color="black" size="5rem" />
    <div class="">abc</div> -->
  </div>
  <UNotifications />
  <!-- {{ appConfig.ui.notifications.position }} -->
</template>
