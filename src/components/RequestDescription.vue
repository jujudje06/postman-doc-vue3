<template>
  <div>
    <p class="text-h6">Description</p>
    <q-markdown :no-line-numbers="$store.getters['displaySettings/getDisableLineNumbers']">
{{description}}
    </q-markdown>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps(['description'])
</script>
