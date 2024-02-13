<template>
  <div
    class="relative flex flex-col bg-clip-border bg-white text-gray-700 h-[calc(100vh-2rem)] w-full h-full shadow-xl shadow-blue-gray-900/5">
    <div class="mb-2 p-4">
      <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">heylink.
      </h5>
    </div>
    <nav class="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
      <router-link to="/" exact :class="{ 'bg-blue-50 hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50': $route.path === '/' }" class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all focus:text-blue-900 active:text-blue-900 outline-none">
        <img src="./../assets/Group_18.png" alt="Dashboard">
      </router-link>

      <router-link to="/overview" exact :class="{ 'bg-blue-50 hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50': $route.path === '/overview' }" class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all focus:text-blue-900 active:text-blue-900 outline-none">
        <img src="./../assets/Group_17.png" alt="Dashboard">
      </router-link>
    </nav>
  </div>
</template>