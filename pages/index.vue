<script setup>
import { getZipCodeError, normalizeZipCodeInput } from '~/utils/zipCode'

const zipCode = useState('zipCode', () => '')
const touched = ref(false)
const zipError = ref('')
const zipErrorId = 'zipCodeError'

const validateZipCode = () => {
  zipError.value = getZipCodeError(zipCode.value)
  return !zipError.value
}

const onZipInput = () => {
  zipCode.value = normalizeZipCodeInput(zipCode.value)

  if (touched.value) {
    validateZipCode()
  }
}

const onSubmit = async () => {
  touched.value = true

  if (!validateZipCode()) {
    return
  }

  await navigateTo({
    path: `/weather/${zipCode.value}`,
  })
}

onBeforeMount(() => {
  zipCode.value = ''
  touched.value = false
  zipError.value = ''
})
</script>

<template>
  <div class="container mx-auto max-w-lg py-6">
    <div class="rounded bg-white p-6 shadow">
      <form
        @submit.prevent="onSubmit"
        class="space-y-4"
        novalidate
      >
        <div class="space-y-1">
          <h1 class="text-xl font-semibold text-gray-900">Check your 5-day forecast</h1>
          <p class="text-sm text-gray-600">Enter your ZIP code to view local weather details.</p>
        </div>
        <div class="space-y-2">
          <label
            for="zipCodeInput"
            class="block font-bold text-gray-700"
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
            class="w-full rounded border px-3 py-2"
            required
            v-model="zipCode"
            @input="onZipInput"
            :aria-invalid="zipError ? 'true' : 'false'"
            :aria-describedby="zipError ? zipErrorId : undefined"
          />
          <p
            v-if="zipError"
            :id="zipErrorId"
            role="alert"
            aria-live="polite"
            class="text-sm text-red-600"
          >
            {{ zipError }}
          </p>
        </div>
        <button
          type="submit"
          class="w-full rounded-full bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600 focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
<style scoped></style>
