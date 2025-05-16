import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
<<<<<<< HEAD
    
  // server: {
  //   historyApiFallback: true,
  //    proxy: {
  //         '/api/v1/auth': 'https://trail-aykq.onrender.com',
  //   },
  // },
}});
=======
  },
});
>>>>>>> 10a4ea6fb9e6bb17a38295f5843b789324563189
