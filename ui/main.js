/**
 * Used only for development (via `npm run dev`).
 *
 * This file is useful for testing your component in isolation from Node-RED.
 */
import { createApp } from 'vue'

import UILCD from './components/LCD.vue'

createApp(UILCD).mount('#app')
