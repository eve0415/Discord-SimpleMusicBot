---
sidebar_position: 4
---
# 【環境別】Replit で使用する

:::warning

ここで紹介しているのは、セットアップの一例です。ご自身で利用される際は、Replitなどの利用するサービスの利用規約、プライバシーポリシー、およびヘルプセンターなどをご参照の上、自己責任の範囲でご使用ください。ここに記載されている内容は、あくまで参考です。  
また、このボットやボットの開発者はReplitと提携等はしておらず、無関係です。Replitのサポートに、ボットについての問い合わせることはご遠慮ください。このガイドはReplitでの使用を促すものではありません。

:::

Discord-SimpleMusicBotを [Replit](https://replit.com/) で実行する手順を説明します。

## 前提条件
* Replitへの登録は完了しているものとします。
* PCで作業していることを前提としています。
* Replitで常時稼働する方法についてサポートはいたしません。

## 手順
### 1. Replを作成します
  Replitのトップページで、右上にある`+`ボタンをクリックし、`Create a Repl`の画面で、右上の`Import from GitHub`をクリックします。  
  * `GitHub URL`の欄に、`https://github.com/mtripg6666tdr/Discord-SimpleMusicBot`と入力します。
  * `Language`を`Node.js`にします。
  
  この状態で`Import from GitHub`をクリックして、完了するまで待ちます。

### 2. 最新のバージョンにリセットします
  `master`ブランチは開発用ブランチなので、最新のリリースの時点にリセットします。  
  貝殻マークの`Shell`に移動し、以下のコマンドを実行します。
  ```sh
  git reset --hard <最新のバージョン>
  ```
  `<最新のバージョン>`は、適宜現時点での最新バージョンに読みかえてください。

### 3. Node.jsのバージョンを確認します
  貝殻のマークの`Shell`に移動し、以下のコマンドを実行し、バージョンを確認します
  ```sh
  node -v
  ```

  #### Node.jsのバージョンが14以前の場合
  Node.jsのバージョンがv12.x.xやv14.x.xのような古いバージョンの場合、新しいバージョンのNode.jsが使えるよう次のコマンドを実行してください。
  ```sh
  npm i node@v18-lts --no-save
  ```

### 4. 依存関係をインストールします
  以下のコマンドで依存関係をインストールします
  ```sh
  npm i
  ```

### 5. ソースコードをトランスパイルします
  以下のコマンドでソースコードをトランスパイルします。
  ```sh
  npm run build
  ```

### 6. ボットの各種設定を行います
  ボットの各種設定を[「ボットの設定について」](./configuration.md)を参考に行ってください。

  * `.env`ファイルは**作成せず**に、Replitの画面左側の`Tools`の中にある、`Secrets`を選択して設定してください。
    例えば、`.env`で`TOKEN=DISCORDのトークン`としたければ、`key`に`TOKEN`、`value`に`DISCORDのトークン`を設定します。
  * `config.json`は、Replitの画面左側の`Files`のところにある`New File`と出るボタンを押して、`config.json`を作成し、`config.json.sample`をコピー＆ペースとして設定してください。
  * `config.json`の`webserver`は必ず`true`に設定してください。

### 7. 画面上の`Run`から実行します
  これで設定は完了です。

### エラーが発生して動かない場合
  `Error: Cannot find module ...`というエラーが発生して、ボットが起動しない場合は、以下の手順に従ってください。
  1. Replitの画面の左側の`Files`の右にあるメニューボタンを押して、`Show hidden files`を選択します。
  2. ファイルの一覧から`.replit`というファイルを探し、以下のように変更します
```diff title=".replit"
- entrypoint = "index.js"
+ entrypoint = "dist/index.js"
```
