# Firestore

この項目では、Firestoreコレクションの内容や、更新処理について記述します。

## コンセプト

- Discord上のデータは、変更時にデータベースに同期する
- Discord上では、冗長化されていないデータを直接読み出してよい
- Web上の一覧表示では、かならず冗長化されたデータを読み出す

## スキーマ

### Role コレクション {#role-collection}

Discordのロールデータの一部を同期するためのコレクションです。

```
{
  raw: {
    id: string,
    name: string,
    color: string,
  },
  addition: {
    description: string,
    icon_url: string,
  }
}
```

#### raw
Discordのデータを直接同期したものです。

- color

#### addition
アプリ上で使用する追加情報です。

- description
  - ロールの説明です。
- icon\_url
  - アイコンのURLです。

### Member コレクション {#member-collection}
Discordのメンバーデータの一部を同期するためのコレクションです。

```
{
  raw: {
    id: string,
    username: string,
    description: string,
    avatar_url: string,
  },
  addition: {
    bio: string,
    roles: (Roleの参照)[],
  }
}
```

#### addition
- bio
  - 自己紹介文です。
- roles
  - 持っているロールのリストを表します。
  - ただし、ロールのデータは[Role コレクション](#role-collection)の参照として保持します。

### Thread コレクション

Discordのスレッドのデータの一部を同期するためのコレクションです。

```
{
  raw: {
    id: string,
    name: string,
  },
  addition: {
    members: (Memberの参照)[],
    roles: (Roleの参照)[],
    icon_url: string,
    description: string,
    latest_update: Date,
  },
}
```

#### addition

- members
  - スレッドに参加しているメンバーのリストを表します。
  - メンバーは、対応する[Member コレクション](#member-collection)のドキュメントの参照として表されます。
- roles
  - スレッドに関連付けられたロールのリストを表します。
  - ロールは、対応する[Role コレクション](#role-collection)のドキュメントの参照として表されます。
- icon\_url
  - スレッドのアイコンです。
- description
  - スレッドの説明文です。
- latest\_update
  - スレッドが最後に更新された日時です。
  - ただしこれは厳密ではありません。

### Copy コレクション {#copy-collection}

一覧表示、検索用にコピー・冗長化されたコレクションです。

#### thread ドキュメント

スレッドのリストです。
スレッドを一覧表示する際にこのドキュメントを読み取ります。

#### member ドキュメント

メンバーのリストです。
メンバーを一覧表示する際にこのドキュメントを読み取ります。


## 冗長化
### タイミング

1時間に一回、[Copy コレクション](#copy-collection)にすべてのメンバー、スレッドのドキュメントの内容がコピーされます。

### 注意点
#### Copyコレクションを一覧表示、検索以外の目的で使わない
- [Copy コレクション](#copy-collection)は速報性に著しく欠けます。
- 読み取るドキュメント数を削減するためのものなので、一覧表示しない場合には使わないでください。


