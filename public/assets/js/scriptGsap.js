// [基本]
// to 初期状態から移動
// from 設定した値から初期状態へ戻す
// fromTo 出発点と到着点を設定
// set  初期状態を設定
// timeline  時系列でアニメーションを設定
// add  アニメーション終了時にjsを追加

window.addEventListener("DOMContentLoaded", () => {
  // 初期状態から移動
  /*
  gsap.to(".js_box", {
    x: 400,
    delay:.5
  });

  gsapで設定した値から初期状態へ戻す
  gsap.from(".js_box", {
    x: 400,
    y: 400,
  });
  */
  /*
  // 出発点と到着点を設定
  gsap.fromTo(
    ".js_box",
    {
      x: 400,
    },
    {
      y: 400,
    },
  );
  */
  /*
  // 出発点と到着点を設定（複数要素を選択）
  gsap.fromTo(
    '.js_box, .js_box2',
    {
      x: 400,
    },
    {
      y: 400,
    },
  );

  // 初期状態を設定
  gsap.set(
  ".js_box", {
    x: 400,
    y: 400,
  });
  */
  /*
  // タイムライン：時系列でアニメーションを設定
  const tl = gsap.timeline();
  tl.to(".js_box", { x: 400, delay: .5 })
    '<'直前の動きと同時に発火
    .to(".js_box", { y: 400 }, '<' )
    2秒早く発火
    .to(".js_box", { y: 400 }, '-=2' )
    2秒遅く発火
    .to(".js_box", { y: 400 }, '+=2' )
    .to(".js_box", { y: 400 } )
    .to(".js_box", { x: 800 })
    アニメーション終了時にjsを追加
    .add(function () {
      console.log("完了");
    })
  :/

  /*
  // タイムライン：時系列でアニメーションを設定
  // タイムライン全体に設定を適用
  const tl = gsap.timeline({
    defaults: {
      duration: 2,
      ease: "power2.inOut",
    },
  });
  tl.to(".js_box", { x: 400 })
    .to(".js_box", { y: 400 })
    .to(".js_box", { x: 800 })
  */
});


/*
[よく使うプロパティとGSAP特有のプロパティ]
x x:()=>{}も出来る
y
xPercent
yPercent
rotate
rotateX
rotateY
rotateZ
scale

clip-path inset(0 0 0 0)
filter:'blur'
filter:property[i]みたいに配列を入れることもできる
width
height
display:'none'
// 👇ただここにもあるように気をつけよう
https://greensock.com/get-started/#timeline-control

autoAlpha
duration
repeat -1だと無限
repeatDelay
yoyo 
yoyoEase
delay
stagger
*/

window.addEventListener("DOMContentLoaded", () => {
  gsap.to(".js_box", {
    // remや%などの単位をつけることもできる
    // x: '200rem',

    // 関数を使うこともできる
    // x : () =>window.innerWidth / 2, delay : 1

    // ランダムな値を設定することもできる
    // x : 'random(0, 100, 500)',

    // cssでいうtransform:translateX(50%)と同じ
    // xPercent: 50, delay : 1

    // rotate : 45, delay : 1
    // rotateX : 80, delay : 1
    // rotateZ : 180, delay : 1
    // scale : 2, delay : 1
    // scaleX : 2, delay : 1
    // clipPath : 'polygon(27% 0, 0% 100%, 100% 47%)', delay : 1
    // filter : 'blur(50px)', duration : 1, delay : 1
    // width : '100%', duration : 1, delay : 1
    // opacity : '0', duration : 1, delay : 1

    // autoAlpha = opacity + visibility
    // autoAlpha : '0', duration : 1, delay : 1

    // yoyo = 元の状態に戻る repeatをつける
    // autoAlpha : '0', repeat : 1, yoyo : true,  duration : 1, delay : 1

    // 1秒待って永遠に繰り返す
    // autoAlpha : '0', repeat : -1, repeatDelay : 1,  duration : 1, delay : 1

    // バウンドさせる、元に戻る
    // https://gsap.com/docs/v3/Eases
    // x: 200, repeat: -1, repeatDelay: 1, yoyo : true, yoyoEase : true, ease: "bounce.out", duration: 1, delay: 1,

    // stagger = 対象が複数ある場合に指定した時間分ずらして実行する
    // x: 300, delay: 1, stagger : 1
    // 1秒ごとに逆順に動かす
    // x: 300, delay: 1, stagger: {
    //   each : 1, from : 'end'
    // }

  });
});

[イージング]
window.addEventListener('DOMContentLoaded', () => {
  // https://gsap.com/docs/v3/Eases/
  gsap.to(
  ".js_box", {
    x : 500, ease : 'power2.inOut', duration : 1, delay : 1
  });
});