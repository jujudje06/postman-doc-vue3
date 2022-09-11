<template>
  <div>
    <q-page-sticky position="bottom-right" class="z-max" :offset="[18, 18]">
      <q-btn fab icon="settings" color="primary" @click="toggleDialog" />
    </q-page-sticky>
    <q-dialog position="right" v-model="showDialog">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Display settings</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section class="general-settings">
          <p class="text-bold">General</p>
          <div>
            <q-toggle
              @input="toggleDisableLineNumbers"
              v-model="toggleLineNumbers"
              label="Disable line numbers"
            ></q-toggle>
          </div>
          <div>
            <q-toggle
              @update:model-value="darkMode"
              v-model="toggleDarkMode"
              label="Dark Mode"
            ></q-toggle>
          </div>
          <div>
            <q-separator class="q-mt-md" />
          </div>
        </q-card-section>
        <q-card-section class="content-settings">
          <div>
            <p class="text-bold">Content</p>
          </div>
          <div>
            <q-toggle
              @update:model-value="toggleDisplayRequestHeaders"
              v-model="displayRequestHeaders"
              label="Display Headers"
            ></q-toggle>
          </div>
          <div>
            <q-toggle
              @update:model-value="toggleDisplayRequestUrl"
              v-model="displayRequestUrl"
              label="Display URL"
            ></q-toggle>
          </div>
          <div>
            <q-toggle
              @update:model-value="toggleDisplayRequestDescription"
              v-model="displayRequestDescription"
              label="Display Description"
            ></q-toggle>
          </div>
          <div>
            <q-toggle
              @update:model-value="toggleDisplayRequestBody"
              v-model="displayRequestBody"
              label="Display Body"
            ></q-toggle>
          </div>
          <div>
            <q-separator class="q-mt-md" />
          </div>
        </q-card-section>
        <q-card-section>
          <div>
            <q-btn
              @click="displayRaw = true"
              color="primary"
              outline
              label="View collection in raw (JSON)"
            />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog maximized v-model="displayRaw">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Collection</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section>
          <q-markdown>
            ```json
            {{ $store.getters["collection/getCollection"] }}
            ```
          </q-markdown>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity'
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { useStore } from 'vuex'

const $store = useStore()
const $q = useQuasar()

const showDialog = ref(false)
const displayRaw = ref(false)
const toggleDarkMode = ref(false)

const toggleLineNumbers = computed(() => $store.getters['displaySettings/getDisableLineNumbers'] || true)
const displayRequestHeaders = computed(() => $store.getters['displaySettings/getDisplayRequestHeaders'] || true)
const displayRequestDescription = computed(() => $store.getters['displaySettings/getDisplayRequestDescription'] || true)
const displayRequestBody = computed(() => $store.getters['displaySettings/getDisplayRequestBody'] || true)
const displayRequestUrl = computed(() => $store.getters['displaySettings/getDisplayRequestUrl'] || true)

const toggleDialog = () => {
  showDialog.value = !showDialog.value
}
const toggleDisableLineNumbers = () => {
  $store.commit('displaySettings/SET_DISABLE_LINE_NUMBER', !toggleLineNumbers)
}
const toggleDisplayRequestHeaders = () => {
  $store.commit('displaySettings/SET_DISPLAY_REQUEST_HEADERS', !displayRequestHeaders)
}
const toggleDisplayRequestUrl = () => {
  $store.commit('displaySettings/SET_DISPLAY_REQUEST_URL', !displayRequestUrl)
}
const toggleDisplayRequestDescription = () => {
  $store.commit('displaySettings/SET_DISPLAY_REQUEST_DESCRIPTION', !displayRequestDescription)
}
const toggleDisplayRequestBody = () => {
  $store.commit('displaySettings/SET_DISPLAY_REQUEST_BODY', !displayRequestBody)
}
const darkMode = () => {
  $q.dark.set(!toggleDarkMode.value)
}
</script>
