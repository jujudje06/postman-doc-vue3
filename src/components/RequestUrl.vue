<template>
  <div>
    <q-markdown>
```
{{ setUrlVars(url) }}
```
    </q-markdown>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useStore } from 'vuex'

const props = defineProps({
  url: {
    type: String
  }
})

const $store = useStore()

const setUrlVars = (url) => {
  const urlVars = props.url.match(/({{[a-zA-Z]+}})/)
  if (urlVars) {
    urlVars.forEach(element => {
      const result = $store.getters['collection/getCollectionVariables'].find(item =>
        item.key === element.replace(/({{)|(}})/g, '')
      )
      url = url.replace(`{{${result?.key}}}`, result?.value)
    })
  }
  return url
}
</script>
