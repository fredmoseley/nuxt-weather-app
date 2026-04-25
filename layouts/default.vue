<template>
  <div>
    <header class="shawdow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <nuxt-link
          to="/"
          class="font-bold"
          >Nuxt Weather App</nuxt-link
        >
        <ul class="flex gap-4">
          <li v-if="route.path !== '/'">
            <nuxt-link
              to="/"
              class="inline-flex items-center gap-1 rounded-sm px-1 py-0.5 text-slate-700 underline decoration-slate-400 underline-offset-2 transition hover:text-teal-700 hover:decoration-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              >← New ZIP Search</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/about"
              class="rounded-sm px-1 py-0.5 text-slate-700 underline decoration-slate-400 underline-offset-2 transition hover:text-teal-700 hover:decoration-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              >About</nuxt-link
            >
          </li>
        </ul>
      </nav>
    </header>
    <!-- Output the page content -->
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
</script>

<style>
.router-link-exact-active {
  color: #12b488;
}
</style>
