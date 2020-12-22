// ランダマイザー
const spin = [
    "R","R2","R'",
    "U","U2","U'",
    "L","L2","L'",
    "B","B2","B'",
    "D","D2","D'",
    "F","F2","F'",
    "M","M2","M'",
];

document.getElementsByTagName("button")[0].addEventListener("click" , ()=> {
    for(i = spin.length - 1; i > 1; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = spin[i];
        spin[i] = spin[j];
        spin[j] = tmp;
    };
    document.getElementById("randomize").textContent = spin;
});

// console.log(document.getElementById("randomize").textContent.length); ダメでした


// フィッシャー–イェーツのシャッフル
// for(i = array.length - 1; i > 1; i--) {
//     var j = Math.floor(Math.random() * (i + 1));
//     var tmp = array[i];
//     array[i] = array[j];
//     array[j] = tmp;
// };
// document.getElementById("randomize").textContent = array;



// タイマー部分

// 以下丸パクリ
// 性質上、何時間は不要なので、時間関連は削除。

const timeElement = document.getElementById('time');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

const record = document.getElementById("record");

// console.log(document.getElementById("record").innerText);

// 経過時間のミリ秒
let elapsed = 0;

let intervalId = null;

// stopボタンのClick回数
let not = 0;


function updateTime() {
  const ms = elapsed % 1000;
  const s = Math.floor(elapsed / 1000) % 60;
  const m = Math.floor(elapsed / (1000*60)) % 60;
  const h = Math.floor(elapsed / (1000*60*60));

  const msStr = ms.toString().padStart(3, '0');
  const sStr = s.toString().padStart(2, '0');
  const mStr = m.toString().padStart(2, '0');
  const hStr = h.toString().padStart(2, '0');

  timeElement.innerHTML = `${mStr}:${sStr}.${msStr}`;
}

start.addEventListener('click', function(e) {

  // 計測回数が5回以上ならリセットする
  if (not == 5) {
      // ページの再読み込みで対応
      location.reload();
  }

  if (intervalId !== null) { return; }
  let pre = new Date();

  intervalId = setInterval(function() {
    const now = new Date();
    elapsed += now - pre;
    pre = now;
    updateTime();
  }, 10);
});

// stop.addEventListener('click', function(e) {
    // const ms = elapsed % 1000;
    // const s = Math.floor(elapsed / 1000) % 60;
    // const m = Math.floor(elapsed / (1000*60)) % 60;
    // const h = Math.floor(elapsed / (1000*60*60));

    // const msStr = ms.toString().padStart(3, '0');
    // const sStr = s.toString().padStart(2, '0');
    // const mStr = m.toString().padStart(2, '0');
    // const hStr = h.toString().padStart(2, '0');



//     // function updateTime下で定数指定をしている為、同じように表示するにはここにも必要。
//     //

//     clearInterval(intervalId);
//     intervalId = null;
//     // record1.innerHTML = `${mStr}:${sStr}.${msStr}`;

// });



// stop関連

stop.addEventListener("click", function () {

  // 経過時間が0なら動かない
  if (elapsed > 0) {
    const ms = elapsed % 1000;
    const s = Math.floor(elapsed / 1000) % 60;
    const m = Math.floor(elapsed / (1000*60)) % 60;
    const h = Math.floor(elapsed / (1000*60*60));

    const msStr = ms.toString().padStart(3, '0');
    const sStr = s.toString().padStart(2, '0');
    const mStr = m.toString().padStart(2, '0');
    const hStr = h.toString().padStart(2, '0');

    not++;

    if (not == 1) {
      elapsed1 = elapsed;
      record1.innerHTML = `${mStr}:${sStr}.${msStr}`;
      // record1.innerHTML = `${elapsed1}.`;

    } else if (not == 2) {
      elapsed2 = elapsed;
      record2.innerHTML = `${mStr}:${sStr}.${msStr}`;
      // record2.innerHTML = `${elapsed2}.`;

    } else if (not == 3) {
      elapsed3 = elapsed;
      record3.innerHTML = `${mStr}:${sStr}.${msStr}`;
      // record3.innerHTML = `${elapsed3}.`;

    } else if (not == 4) {
      elapsed4 = elapsed;
      record4.innerHTML = `${mStr}:${sStr}.${msStr}`;
      // record4.innerHTML = `${elapsed4}.`;

    } else if (not == 5) {
      elapsed5 = elapsed;
      record5.innerHTML = `${mStr}:${sStr}.${msStr}`;
      // record5.innerHTML = `${elapsed5}.`;

      // ５回目に自動的に平均値を計算
      averege = [elapsed1 + elapsed2 + elapsed3 + elapsed4 + elapsed5]/5;

      // 間違い（elapsed ではなく averegeを使う）
      // const a_ms = elapsed % 1000;
      const a_ms = averege % 1000;
      const a_s = Math.floor(averege / 1000) % 60;
      const a_m = Math.floor(averege / (1000*60)) % 60;
      // const a_h = Math.floor(averege / (1000*60*60));

      const a_msStr = a_ms.toString().padStart(3, '0');
      const a_sStr = a_s.toString().padStart(2, '0');
      const a_mStr = a_m.toString().padStart(2, '0');
      // const a_hStr = h.toString().padStart(2, '0');

      // 間違い（５回目の計測値だけが参照されている）
      // avg.innerHTML = "5回平均" + `${mStr}:${sStr}.${msStr}`;
      avg.innerHTML = `${a_mStr}:${a_sStr}.${a_msStr}`;
      // avg.innerHTML = `${averege}.`;
  }

  };


  clearInterval(intervalId);
  intervalId = null;

  elapsed = 0;
  updateTime();

});


// reset関連
reset.addEventListener('click', function(e) {
  // let score = ["record1","record2","record3","record4","record5"];
  // scoreIndex = 0;
  // scoreLength = score.length;
  // // let res = document.getElementById("scoreLength");


  // document.getElementById("record1").textContent = "00:00.000";
  // document.getElementById("record2").textContent = "00:00.000";
  // document.getElementById("record3").textContent = "00:00.000";
  // document.getElementById("record4").textContent = "00:00.000";
  // document.getElementById("record5").textContent = "00:00.000";
  // document.getElementById("avg").textContent =  "???????";

  // ページの再読み込みで対応
  location.reload();

});
