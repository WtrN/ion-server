# ION Server

## Description

これは、[ion-tools](https://github.com/decentralized-identity/ion-tools/tree/main)を利用したION活用サーバーの検証実装になります。

## 起動

### dotenvファイルの追加

`./config/`に`.env.develop`ファイルを作成し、以下の内容を追加する。

``` .env
NODE_ENV=development
BASIC_AUTH_USER=<UserName>
BASIC_AUTH_PASSWORD=<Password>
```

作成後、以下のコマンドを実行する

``` shell
npm run start
```

## 検証

``` shell
curl http://${UserName}:${Password}@localhost:3000/ion/create-did
```

``` shell
curl http://${UserName}:${Password}@localhost:3000/ion/resolve-did/${DID}
```
