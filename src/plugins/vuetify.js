// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify, ThemeDefinition } from 'vuetify'
// Vuetify



const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#FF1867',
    'primary-darken-1': '#3700B3',
    secondary: '#222222',
    'secondary-darken-1': '#018786',
    error: '#B0102093',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}




export default createVuetify({
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    },
  },

  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
})
//#FF1867
// #DE1359
// #BE0F4B
// #9E0A3D
// #800730
// #630423
// #480217
// #2E010C
// #160004
// #030000

//
//#2a0411
//#d41456