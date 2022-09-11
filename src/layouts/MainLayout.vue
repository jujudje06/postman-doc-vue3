<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="text-primary bg-white">
        <q-btn flat dense round aria-label="Menu" />
        <q-avatar>
          <q-img src="~assets/mars.png" alt="mars-planet" />
        </q-avatar>
        <q-toolbar-title>
          API Doc Generator
        </q-toolbar-title>

        <div>
          v{{ appVersion }}
          <br>
          <i class="powered">
            <a href="https://github.com/itsalb3rt/afterman" target="_blank">
              By Afterman
            </a>
          </i>
        </div>
        <br/>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { computed } from 'vue'
const appVersion = computed(() => process.env.APP_VERSION || '')
</script>

<style scoped>
.powered {
  text-decoration: none;
  font-size: .8rem;
}
</style>
