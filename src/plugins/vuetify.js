// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify, ThemeDefinition } from 'vuetify'
// Vuetify
import { createApp } from 'vue'

const myCustomPinckTheme = {
  dark: true,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#FF1867',
    primary01: '#FF186750',
    'primary-darken-1': '#3700B3',
    secondary: '#222222',
    'secondary-darken-1': '#018786',
    error: '#ff002c',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}

const myCustomYellonTheme = {
  dark: true,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#ffff0050',
    primary01: '#ffff0050',
    'primary-darken-1': '#3700B3',
    secondary: '#222222',
    'secondary-darken-1': '#018786',
    error: '#ff002c',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}
const myCustomBlueTheme = {
  dark: true,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#2196F3',
    primary01: '#2196F350',
    'primary-darken-1': '#3700B3',
    secondary: '#222222',
    'secondary-darken-1': '#018786',
    error: '#ff002c',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}
const myCustomRedTheme = {
  dark: true,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#ff0000',
    primary01: '#ff000050',
    secondary: '#222222',
    'secondary-darken-1': '#018786',
    error: '#ff002c',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}




export default createVuetify({
  theme: {
    defaultTheme: 'myCustomPinckTheme',
    themes: {
      myCustomBlueTheme,
      myCustomYellonTheme,
      myCustomPinckTheme,
      myCustomRedTheme,
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