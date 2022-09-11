import { createStore } from 'vuex'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */
import displaySettings from './Modules/DisplaySettings'
import collection from './Modules/Collection'

const store = createStore({
  modules: {
    displaySettings,
    collection
  }
})

export default store
