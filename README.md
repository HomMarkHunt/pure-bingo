# pure-bingo

<img width="450" src="https://cloud.githubusercontent.com/assets/14356345/20018344/b77ba3ca-a30a-11e6-9a02-bc6a654fbd52.png"/>

## What's pure-bingo

* html
* js
* css

のみで作成した画像でビンゴ行うためのアプリです!

忘年会などにどうぞ！！


## Who it works?

### Start

* スタートボタン押下で、ルーレットが回り出します

<img width="450" src="https://cloud.githubusercontent.com/assets/14356345/20018961/716bc9f2-a30d-11e6-9211-27326136f555.png"/>

### Stop

* ストップボタン押下で、ルーレットが止まります
* ストップと同時にタイトルと画面下部にヒットした画像名が蓄積されていきます

<img width="450" src="https://cloud.githubusercontent.com/assets/14356345/20019219/85c9b39a-a30e-11e6-9aea-13139c45ab68.png"/>

### Last

* 画像名が蓄積されていき
* 最後はalertがでて終了です

<img width="450" src="https://cloud.githubusercontent.com/assets/14356345/20019444/ad283b54-a30f-11e6-964f-3b67c079e13e.png">

## Who to use?

1. `img/` 配下に任意の画像を配置します。画像は**.jpgのみ**です。
1. TOP画像は`img/top.js`で配置してください。
1. `bingo.js` 内の配列に先ほど配置した画像名を**拡張子なしで**記載していきます

```javascript:bingo.js
var list = [
  "sample1",
  "sample2",
  "sample3",
  "sample4",
  "sample5",
];
```

4. あとは`bingo.html`をブラウザで開いてビンゴ開始です
