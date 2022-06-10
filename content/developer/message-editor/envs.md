# 環境変数

メッセージエディタの挙動を制御する環境変数について記述します。

## DISCORD\_BOT\_TOKEN
- 必須
- Discordボットのトークンです。
  - このトークンでログインしたボットアカウントのメッセージのみ編集することがでいます。

## LOGIN\_REQUIRED {#login-reuired}
- オプション
- デフォルトで `true`

- `true`の場合はページの表示にDiscordログインを要求します。
- `false`の場合はページを自由に表示できます。

:::danger

公開されたWebサーバーでメッセージエディタを起動する場合は`true`にすることを強くおすすめします。

:::
  

## DISCORD\_SECRET
- オプション
  - [LOGIN_REQUIRED](#login-required)が`true`の場合は必須です。
- OAuth2のsecretです。

## BASE\_URL
- オプション

