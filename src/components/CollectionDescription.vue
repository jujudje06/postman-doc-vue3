<template>
  <div>
    <h1 class="text-h3 text-center q-my-md">{{info.name}}</h1>
    <q-markdown :no-line-numbers="$store.getters['displaySettings/getDisableLineNumbers']">
      {{ sanitizeInfo }}
    </q-markdown>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps(['info'])
const sanitizeInfo = computed(() => {
  return props.info ? props.info.toString() : ''
})
</script>
