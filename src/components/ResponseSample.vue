<template>
  <section>
    <strong class="text-h6">{{ response.name }}</strong><br>
    <strong>Status:</strong> {{ response.status }}<br>
    <strong>Code:</strong> {{ response.code }}<br>
    <request-body :body="response.body">
        <strong>Body</strong>
    </request-body>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'
import requestBody from 'src/components/RequestBody'
defineProps(['response'])
</script>
