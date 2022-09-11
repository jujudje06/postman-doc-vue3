<template>
  <div>
    <q-chip class="request-method" :color="methodColor" text-color="white">
      {{ method }}
    </q-chip>
    <strong class="vertical-middle text-h6 q-my-sx text-bold request-name" :id="anchor">{{requestName}}</strong>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity'
import { defineProps } from 'vue'

const props = defineProps({
  method: {
    type: String
  },
  requestName: {
    type: String
  },
  anchor: {
    type: String
  }
})

const colors = [
  { method: 'POST', value: 'primary' },
  { method: 'GET', value: 'positive' },
  { method: 'PATCH', value: 'grey' },
  { method: 'DELETE', value: 'negative' },
  { method: 'PUT', value: 'indigo' }
]

const methodColor = computed(() => {
  const result = colors.find(color => color.method === props.method.toUpperCase())
  return result.value
})
</script>
