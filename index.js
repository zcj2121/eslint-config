import basicEslint from './modules/basic'
import tsEslint from './modules/ts'
import reactEslint from './modules/react'
import vueEslint from './modules/vue'
module.exports = {
  extends: [
    basicEslint,
    tsEslint,
    reactEslint,
    vueEslint
  ],
}
