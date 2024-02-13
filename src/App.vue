<script setup>
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'

</script>

<template>
  <div class="flex h-screen">
    <div class="">
      <Sidebar />
    </div>

    <div class="flex-1 flex flex-col">
      <div class="shadow-xl shadow-blue-gray-900 text-white p-4">
        <Header />
      </div>

      <div class="p-4 flex-1 overflow-y-auto">
        <router-view class="max-h-screen" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
