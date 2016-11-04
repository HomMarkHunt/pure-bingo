// ビンゴ用数字配列
var list = [
  "sample1",
  "sample2",
  "sample3",
  "sample4",
  "sample5",
];

var isStop = true;

function startBingo() {
  // ボタンの表示切り替え
  document.getElementById("start").style.display = "none";
  document.getElementById("stop").style.display = "inline";
  isStop = false;
  roulette();
}

function stopBingo() {
  // ボタンの表示切り替え
  document.getElementById("start").style.display = "inline";
  document.getElementById("stop").style.display = "none";
  isStop = true;
}

function roulette() {
  var id = "";
  var rnd = Math.floor(Math.random() * list.length);
  
  //画像タグ
  var imgTag = "<img src = 'img/" + list[rnd] + ".jpg' width='210' height='280'>";
  var imgTagS = "・" + list[rnd];
  
  // ストップボタンが押された
  if (isStop) {
    // 遅延呼び出しを解除
    clearTimeout(id);
 
    document.getElementById("name").innerHTML = "<h1>" + list[rnd] + "</h1>";   
  	document.getElementById("view").innerHTML = imgTag;
    if (!document.getElementById("out").innerHTML) {
      document.getElementById("out").innerHTML = document.getElementById("out").innerHTML + imgTagS;
    }
    else {
      document.getElementById("out").innerHTML = document.getElementById("out").innerHTML + "　" + imgTagS;
    }
    
    //決定したエンジニアをリストから削除する
    list.splice(rnd, 1);
    // リストが空になったら終了
    if (list.length == 0) {
      alert("最後です。");
      document.getElementById("start").disabled = true;
    }
    return false;
  }
  
  // 乱数を画面に表示
  document.getElementById("view").innerHTML = imgTag;
  //$("view").innerText = list[rnd];
  // 100ms後に再帰的に実行するよう登録する
  id = setTimeout("roulette()", 100);
}
