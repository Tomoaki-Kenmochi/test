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

const record1 = document.getElementById("record1");
const record2 = document.getElementById("record2");
const record3 = document.getElementById("record3");
const record4 = document.getElementById("record4");
const record5 = document.getElementById("record5");

// console.log(counter)

// console.log(document.getElementById("record").innerText);

// 経過時間のミリ秒

let elapsed = 0;

let intervalId = null;

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
  if (intervalId !== null) { return; }
  let pre = new Date();
  intervalId = setInterval(function() {
    const now = new Date();
    elapsed += now - pre;
    pre = now;
    updateTime();
  }, 10);
});


// ストップボタン押した回数
let not = 0;
function counter(){

  const ms = elapsed % 1000;
  const s = Math.floor(elapsed / 1000) % 60;
  const m = Math.floor(elapsed / (1000*60)) % 60;
  const h = Math.floor(elapsed / (1000*60*60));

  const msStr = ms.toString().padStart(3, '0');
  const sStr = s.toString().padStart(2, '0');
  const mStr = m.toString().padStart(2, '0');
  const hStr = h.toString().padStart(2, '0');

  not++;
  document.getElementById("stop_counter").innerHTML = not;


  if (not == 1) {
    record1.innerHTML = `${mStr}:${sStr}.${msStr}`;
    elapsed1 = elapsed;
  }
  else if (not == 2) {
    record2.innerHTML = `${mStr}:${sStr}.${msStr}`;
    elapsed2 = elapsed;
  }
  else if (not == 3) {
    record3.innerHTML = `${mStr}:${sStr}.${msStr}`;
    elapsed3 = elapsed;
  }
  else if (not == 4) {
    record4.innerHTML = `${mStr}:${sStr}.${msStr}`;
    elapsed4 = elapsed;
  }
  else if (not == 5){
    record5.innerHTML = `${mStr}:${sStr}.${msStr}`;
    elapsed5 = elapsed;

    average = [elapsed1 + elapsed2 + elapsed3  + elapsed4 + elapsed5]/5;

    const a_ms = average % 1000;
    const a_s = Math.floor(average / 1000) % 60;
    const a_m = Math.floor(average / (1000*60)) % 60;
    const a_h = Math.floor(average / (1000*60*60));

    const a_msStr = a_ms.toString().padStart(3, '0');
    const a_sStr = a_s.toString().padStart(2, '0');
    const a_mStr = a_m.toString().padStart(2, '0');
    const a_hStr = a_h.toString().padStart(2, '0');

    average_record.innerHTML = `${a_mStr}:${a_sStr}.${a_msStr}`;
  };

  clearInterval(intervalId);
  intervalId = null;

};

reset.addEventListener('click', function(e) {
  elapsed = 0;

  // ラップタイムの場合
  // not = 0;
  // document.getElementById("stop_counter").innerHTML = not;
  // record1.innerHTML = "00:00.000"
  // record2.innerHTML = "00:00.000"
  // record3.innerHTML = "00:00.000"
  // record4.innerHTML = "00:00.000"
  // record5.innerHTML = "00:00.000"

  updateTime();
});
