import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@fortawesome/react-fontawesome': '@fortawesome/react-fontawesome',
      '@fortawesome/free-solid-svg-icons': '@fortawesome/free-solid-svg-icons',
      'firebase/auth': 'firebase/auth',
      'sweetalert2': 'sweetalert2/dist/sweetalert2.js',
      // Add any other aliases or custom paths if needed
    },
  },
})
