<script setup>
const zipCode = useState('zipCode', () => '');

const onSubmit = async () => {
  const zipCodeRegex = /^\d{5}$/;

  if (zipCodeRegex.test(zipCode.value)) {
    await navigateTo({
        path:`/weather/${zipCode.value}`
    })
  }
};
</script>

<template>
    <div class="container max-w-sm mx-auto py-6">
      <form @submit.prevent="onSubmit">
        <label
          for="zipCodeInput"
          class="block text-gray-700 font-bold mb-2"
          >ZIP Code</label
        >
        <input
          id="zipCodeInput"
          type="text"
          minlength="5"
          maxlength="5"
          pattern="\d{5}"
          name="zip_code"
          placeholder="Enter 5-digit ZIP code for 5 day weather forecast:"
          class="border rounded w-full py-2 px-3 mb-2"
          required
          v-model="zipCode"
        />
        <button
          type="submit"
          class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  </template>
<style scoped></style>
