import { defineConfig } from 'vite';

// Growi v7 テーマ型プラグインのビルド設定
// manifest.json を生成し、SCSSをCSSにコンパイルして出力する
export default defineConfig({
  build: {
    manifest: true,
    rollupOptions: {
      input: ['src/styles/style.scss'],
    },
  },
});
