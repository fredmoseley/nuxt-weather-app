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
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">About</nuxt-link>
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

<style>
.router-link-exact-active {
  color: #12b488;
}
</style>
