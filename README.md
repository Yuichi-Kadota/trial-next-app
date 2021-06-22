# trial-next-app

next のお試しアプリ

## ローカル実行方法

---

### front

```
$cd ./front
```

```
$npm install
```

```
$npm run dev
```

### モックサーバー起動

```
$go get github.com/gostub/gostub
```

```
$cd ./mock
```

```
$gostub -p 8081 -o .
```

実行例

```
$curl localhost:8081/test
```

```
{ "msg": "Hello, World!" }
```
