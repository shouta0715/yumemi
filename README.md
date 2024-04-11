# ゆめみコーディングテスト

## 目次

- [ゆめみコーディングテスト](#ゆめみコーディングテスト)
  - [目次](#目次)
  - [プロジェクトについて](#プロジェクトについて)
  - [使用技術](#使用技術)
    - [node version](#node-version)
    - [フロントエンド](#フロントエンド)
    - [ホスティング](#ホスティング)
    - [テストツール](#テストツール)
    - [formatterとlinter](#formatterとlinter)
  - [環境構築](#環境構築)
  - [ディレクトリ構造とルール](#ディレクトリ構造とルール)
    - [ディレクトリのルール](#ディレクトリのルール)
    - [ディレクトリ構造](#ディレクトリ構造)
  - [テスト](#テスト)
  - [デプロイ先](#デプロイ先)
  - [コマンド一覧](#コマンド一覧)

## プロジェクトについて

[ゆめみフロントエンドコーディングテスト](https://notion.yumemi.co.jp/%E6%8E%A1%E7%94%A8%E9%96%A2%E9%80%A3%E8%B3%87%E6%96%99%E5%85%AC%E9%96%8B/%E3%83%95%E3%83%AD%E3%83%B3%E3%83%88%E3%82%A8%E3%83%B3%E3%83%89%E3%82%B3%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E8%A9%A6%E9%A8%93)の課題を解いたリポジトリです。

## 使用技術

### node version

| ツール | バージョン |
| ------ | ---------- |
| node   | 20.10.0    |
| npm    | 10.2.4     |
| pnpm   | 8.15.1     |

### フロントエンド

| ツール                                        | バージョン |
| --------------------------------------------- | ---------- |
| [Next.js](https://nextjs.org/)                | 14.1.4     |
| [React](https://reactjs.org/)                 | ^18        |
| [TypeScript](https://www.typescriptlang.org/) | ^5         |
| [Storybook](https://storybook.js.org/)        | 8.0.5      |
| [sass](https://sass-lang.com/)                | 1.72.0     |

### ホスティング

| ツール                                  | URL                                                                          |
| --------------------------------------- | ---------------------------------------------------------------------------- |
| [Vercel](https://vercel.com/)           | [Vercel](https://poplus-green.vercel.app/)                                   |
| [Chromatic](https://www.chromatic.com/) | [storybook](https://www.chromatic.com/builds?appId=66093e6d4bf883189fbfb062) |

### テストツール

| ツール                                          | バージョン |
| ----------------------------------------------- | ---------- |
| [Vitest](https://vitest.dev/)                   | 1.4.0      |
| [Testing Library](https://testing-library.com/) | 14.2.2     |
| [Playwright](https://playwright.dev/)           | 1.42.1     |

### formatterとlinter

| ツール                                                    | バージョン |
| --------------------------------------------------------- | ---------- |
| [ESLint](https://eslint.org/)                             | 8.57.0     |
| [Prettier](https://prettier.io/)                          | 3.2.5      |
| [husky](https://typicode.github.io/husky/)                | 9.0.11     |
| [lint-staged](https://github.com/lint-staged/lint-staged) | 15.2.2     |

## 環境構築

1. リポジトリをクローンします。

```bash
git clone https://github.com/shouta0715/yumemi
```

2. パッケージをインストールします。

```bash
pnpm install --frozen-lockfile
```

3.  環境変数を設定します。

[RESAS API](https://opendata.resas-portal.go.jp/)

```bash
cp .env.example .env.local
```

| 変数名  | 説明               |
| ------- | ------------------ |
| API_KEY | RESAS APIのAPIキー |
| API_URL | RESAS APIのURL     |

4. 開発サーバー

```bash
pnpm dev

# or

pnpm preview
```

5. Storybookの起動とテスト

```bash
pnpm sb

pnpm sb:test
```

6. integrationテストの実行

```bash
pnpm test
```

7. e2eテストの実行

```bash
pnpm test:e2e
```

8. フォーマットとlint

```bash
pnpm format
```

9. ビルドと本番環境の起動

```bash
pnpm build && pnpm start

# or

pnpm preview
```

## ディレクトリ構造とルール

### ディレクトリのルール

- ルーティングは基本的に`/app/(apps)`に配置をする。他のgroupにしたい場合は、`/app/(group name)`に配置する。

- フォルダを作成し`index`をprefixにしてファイルを作成する。

  - (例: `index.tsx` `index.module.scss` `index.stories.tsx`)

- `page`と`layout`はNext.jsの関係上名前を変更できないので、それに付随して関連するファイルもprefixを`page.`や`layout.`にする。

  - (例: `page.tsx` `layout.tsx` `layout.module.scss`)

- そのルーティングでしか使わないものは`page.tsx`と同階層の`_features`に配置する。

- `_features`の中には`(フォルダ名)/components`や`(フォルダ名)/hooks`などを配置する。

- 共通コンポーネントは`/components`に配置する。`/components/ui`以外はスタイルを持つことができる。

- `/components/ui`はライブラリのコンポーネント配置する。`/components/ui`はスタイルなどを行わず、そのまま`export`する。スタイルとstoryは行わない。

### ディレクトリ構造

```bash
├── .env.local # 環境変数
├── .github　# GitHub Actionsの設定
├── .husky # huskyの設定(基本的には触らない)
├── .storybook # Storybookの設定
├── __tests__ # テストファイルのセットアップ用
├── e2e　# e2eテスト
├── public # 静的ファイル
├── src
│   ├── app
│   │   ├── (apps) # ルーティング
│   │   │   ├── _features # ページでしか使わないコンポーネント
│   │   │   │   ├── checkbox # チェックボックス
│   │   │   │   │   ├── components # チェックボックスのコンポーネント (index.tsx)が配置されている。
│   │   │   │   │   └── hooks　# チェックボックスのhooks (index.ts)が配置されている。
│   │   │   │   └── prefectures # 都道府県のコンポーネント
│   │   │   │       ├── api # 都道府県のデータ取得のファイル
│   │   │   │       ├── components # 都道府県のコンポーネント (index.tsx)が配置されている。
│   │   │   │       ├── mocks # APIのモックデータ
│   │   │   │       └── utils # 都道府県のユーティリティ
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx # トップページ
│   │   ├── layout.module.scss　# レイアウト用のスタイル
│   │   └── layout.tsx　#グローバルレイアウト
│   ├── components # 共通コンポーネント (ui配下以外はスタイルを持つことができる)
│   │   ├── checkbox
│   │   │   ├── index.module.scss
│   │   │   ├── index.stories.tsx
│   │   │   └── index.tsx
│   │   ├── loader
│   │   │   ├── index.module.scss
│   │   │   ├── index.stories.tsx
│   │   │   └── index.tsx
│   │   └── ui
│   │       └── image
│   │           └── index.tsx
│   ├── layouts #グローバルやページごとのレイアウト
│   │   ├── header
│   │   │   ├── index.module.scss
│   │   │   ├── index.stories.tsx
│   │   │   └── index.tsx
│   │   ├── index.module.scss
│   │   ├── index.stories.tsx
│   │   └── index.tsx
│   ├── libs # ライブラリや独自のユーティリティを配置
│   │   ├── constant # 定数
│   │   │   └── env # 環境変数 server onlyを使用して、サーバー側でのみしか使用できない様になっている。
│   │   │       └── index.ts
│   │   ├── errors # カスタムのエラーを配置 エラーはここのファイルを使用してエラーを生成する。
│   │   │   ├── index.test.ts
│   │   │   └── index.ts
│   │   ├── fetch　# fetchのラッパー
│   │   │   ├── index.test.ts
│   │   │   └── index.ts
│   │   └── types # 共通の型を配置
│   │       ├── api
│   │       │   └── prefectures
│   │       │       └── index.ts
│   │       └── next
│   │           └── index.ts
│   ├── styles # 共通のスタイルや変数を配置
│   │   ├── common
│   │   │   ├── _bp.scss
│   │   │   ├── _variables.scss
│   │   │   └── index.scss
│   │   └── global
│   │       ├── _reset.scss
│   │       └── index.scss
│   └── tests # vitestに関連しないテストの設定ファイル
└──       └── storybook.ts
```

## テスト

- `.env.test`にテスト用の環境変数を設定する。
- `/components/ui`以外はテストを行うようにする。`tsx`ファイルはできるだけstorybook上でテストを行う。
- `/components/ui`はテストを行わない。
- `.ts`ファイルはVitestを使用してテストを行う。

## デプロイ先

1. Storybookのデプロイ先

   - [Chromatic](https://www.chromatic.com/builds?appId=66093e6d4bf883189fbfb062)

2. Next.jsのデプロイ先
   - [Vercel](https://poplus-green.vercel.app/)

## コマンド一覧

| コマンド          | 説明                                                                         |
| ----------------- | ---------------------------------------------------------------------------- |
| `dev`             | Next.jsの開発サーバーを起動します。                                          |
| `build`           | Next.jsアプリケーションをビルドします。                                      |
| `start`           | ビルドされたNext.jsアプリケーションを起動します。                            |
| `analyze`         | ビルドプロセス中にアプリケーションのバンドル分析を有効にします。             |
| `preview`         | アプリケーションをビルドし、その後起動します。                               |
| `lint`            | Next.jsのlintツールを使ってプロジェクトのコードを検証します。                |
| `format`          | PrettierとESLintを使ってプロジェクトのコードを整形し、修正します。           |
| `format:check`    | PrettierとESLintを使ってプロジェクトのコードの整形状態をチェックします。     |
| `type-check`      | TypeScriptのコンパイラを使って型チェックを行いますが、コードは出力しません。 |
| `test`            | Vitestを使ってテストを実行します（`.env.test`環境ファイルを使用）。          |
| `test:ui`         | VitestのUIを使ってテストを実行します。                                       |
| `test:coverage`   | テストカバレッジを計測しながらVitestでテストを実行します。                   |
| `test:e2e`        | Playwrightを使ってエンドツーエンドテストを実行します。                       |
| `test:e2e:ui`     | PlaywrightのUIを使ってエンドツーエンドテストを実行します。                   |
| `test:e2e:debug`  | デバッグモードでPlaywrightのエンドツーエンドテストを実行します。             |
| `test:e2e:report` | Playwrightのテストレポートを表示します。                                     |
| `prepare`         | Huskyを使ってGitフックを設定します。                                         |
| `sb`              | Storybookの開発サーバーをポート6006で起動します。                            |
| `sb:build`        | Storybookをビルドします。                                                    |
| `sb:test`         | `test-storybook`を使ってStorybookのテストを実行します。                      |
