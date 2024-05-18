import { defineConfig } from "astro/config";
import relativeLinks from "astro-relative-links";

// https://docs.astro.build/ja/guides/configuring-astro/
// https://docs.astro.build/ja/reference/configuration-reference/
export default defineConfig({
  // 最終的にデプロイされるURLです
  // site: 'https://www.my-site.dev',
  //HTMLの圧縮
  // compressHTML: false,
  // CSSスコープの詳細度設定
  scopedStyleStrategy: 'class',
  // ビルドの出力対象を指定します。
  output: 'static',
  build: {
    // 例: ビルド時に`page/index.html`ではなく`page.html`を生成。
    // format: 'file',
    //build時にインラインCSSにしない。
    inlineStylesheets: "never",
    // ビルドされるファイルの出力先
    assets: 'assets/build',
  },
  // 自動プレビュー
  server: {
    // ポートを変更したい場合に使用
    // port: 1234,
    host: true,
    // ブラウザ自動オープン
    // open: true
  },
  // プラグイン astro-relative-links 相対パスの設定
  integrations: [relativeLinks()],
  vite: {
    build: {
      // 圧縮
      minify: false,
      //css分離
      cssCodeSplit: false,
      // ファイルの出力先
      rollupOptions: {
        output: {
          // assetFileNames: "assets/[ext]/[name][extname]",
          // entryFileNames: "entry.[hash].mjs",
          // chunkFileNames: "chunks/chunk.[hash].mjs",
        },
      },
    },
  },
});
