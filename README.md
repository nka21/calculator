## デプロイURL
Webアプリ / デスクトップアプリ として機能するように対応しました  
[calculator by tauri](https://calculator-iota-ebon.vercel.app/)

## アプリ画面
<img src="/.github/assets/screenshot.png" alt="スクリーンショット" width="300">

## 開発者のためのセットアップ
```sh
git clone git@github.com:nka21/calculator.git
cd calculator
```

### voltaをインストール
Nodeのランタイムバージョン管理ツール
#### MacOS
```sh
brew install volta
```
#### Windows
公式インストーラーを使い、インストール
[公式サイト](https://docs.volta.sh/guide/getting-started)の「Windows Installation」を参考に
### Node, corepack, pnpmをインストール
ここからのコマンドは、必ずトップディレクトリで実行してください
```sh
node -v
volta install corepack@0.28.2

pnpm -v

# pnpmでnod_modulesをインストール
pnpm install --frozen-lockfile
```
### アプリの起動
```sh
pnpm tauri dev
```