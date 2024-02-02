// [基本]
// to 初期状態から移動
// from 設定した値から初期状態へ戻す
// fromTo 出発点と到着点を設定
// set  初期状態を設定
// timeline  時系列でアニメーションを設定
// add  アニメーション終了時にjsを追加

//他のページで要素がない場合はエラーが出るので、以下の設定をする
gsap.config({nullTargetWarn: false}) 

document.addEventListener("DOMContentLoaded", () => {
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

document.addEventListener("DOMContentLoaded", () => {
  gsap.to(".js_box", {
    // remや%などの単位をつけることもできる
    // x: '200rem',
    // 関数を使うこともできる
    // x : () =>document.innerWidth / 2, delay : 1
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

// [イージング]
document.addEventListener("DOMContentLoaded", () => {
  // https://gsap.com/docs/v3/Eases/
  // gsap.to(".js_box", {
  //   x: 500,
  //   ease: "power2.inOut",
  //   duration: 1,
  //   delay: 1,
  // });
});

// [.utils関数]
// https://greensock.com/docs/v3/GSAP/Utilities
document.addEventListener("DOMContentLoaded", () => {
  // ランダムな値を設定することもできる
  // let transX = gsap.utils.random(0, 500);
  // gsap.to(
  // ".js_box", {
  //   x : transX, duration : 1, delay : 1,
  // });
  // 複数クラスを選択する
  // gsap.utils.toArray('.js_box').forEach((target) => {
  //   gsap.to(target, {
  //     x : 500, duration : 1, delay : i * .5,
  //   });
  // })
});

// [擬似要素を動かすには]
// 擬似要素はDON要素ではないので、gsapで動かすことはできない
// 「カスタムプロパティ」css変数を使う
{
  /* <p class="heading">会社概要</p> */
}
// .heading {
//   position: relative;
//   margin-left: 100px;
//   display: inline-block;
//   --scaleX: 0;
//   &::before,
//   &::after {
//     content: "";
//     display: block;
//     width: 50px;
//     height: 1px;
//     background-color: #333;
//     position: absolute;
//     top: 50%;
//     transform: translateY(-50%) scaleX(var(--scaleX));
//   }
document.addEventListener("DOMContentLoaded", () => {
  // gsap.to(
  // ".heading", {
  //   '--scaleX': 1, duration : 1, delay : 1
  // });
});

// [コントロールメソッド]
// https://greensock.com/get-started/#timeline-control
{
  /* <ul class="lists">
<li class="list js_start">出発</li>
<li class="list js_pause">停止</li>
<li class="list js_resume">再出発</li>
<li class="list js_reverse">逆再生</li>
<li class="list js_restart">やり直し</li>
<li class="list js_kill">キル</li>
</ul>
<div class="wrap">
<div class="box js_rotate">回転</div>
</div> */
}
// document.addEventListener('DOMContentLoaded', () => {
//   const start = document.querySelector('.js_start');
//   const pause = document.querySelector('.js_pause');
//   const resume = document.querySelector('.js_resume');
//   const reverse = document.querySelector('.js_reverse');
//   const restart = document.querySelector('.js_restart');
//   const kill = document.querySelector('.js_kill');
//   const rotateAnime = gsap.to(".js_rotate", {rotate : 360, duration : 3, repeat : -1});
//   rotateAnime.pause();

//   start.addEventListener('click', () => {
//     rotateAnime.play();
//   });
//   pause.addEventListener('click', () => {
//     rotateAnime.pause();
//   });
//   resume.addEventListener('click', () => {
//     rotateAnime.resume();
//   });
//   restart.addEventListener('click', () => {
//     rotateAnime.restart();
//   });
//   reverse.addEventListener('click', () => {
//     rotateAnime.reverse();
//   });
//   kill.addEventListener('click', () => {
//     rotateAnime.kill();
//   });
// });

// [ScrollToプラグイン スムーススクロール]
// https://greensock.com/scrolltoplugin/
// 目的地には数値もオブジェクトも指定できる、素のjsより楽
// ヘッダーの高さを考慮してスムーススクロール
// scroll-behevior:smooth;と併用をしないこと

document.addEventListener("DOMContentLoaded", () => {
  const lists = document.querySelector(".lists");
  const anchors = document.querySelectorAll(".list a");

  anchors.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      // 素のjs
      // let element = document.querySelector(anchor.getAttribute('href'));
      // window.scrollTo({
      //   top: element.offsetTop,
      //   behavior: 'smooth',
      // })

      // ScrollToプラグイン
      gsap.to(window, {
        duration: 1,
        ease: "power.Out",
        scrollTo: {
          y: anchor.getAttribute("href"),
          offsetY: lists.offsetHeight,
        },
      });
    });
  });
});

// [ScrollTriggerプラグイン]
/*
gsap.to(
".js_box", {
    x: 500, duration: 1, ease : "none", scrollTrigger: {
      trigger: '.js_box', //対象の要素
      start : 'top center', //開始位置
      // start: '50% 20%',
      end : 'top 20%', // 終了位置
      // scrub: true, // スクロールに合わせてアニメーションを進める ease : "none"をつけると動きが良くなることもある
      // scrub: .7, // スクロールに合わせてアニメーションを進める（慣性がつく .1=0.1秒遅れて動く）
      // pin : ".js_box2", // 要素を固定する
      // toggleActions : 'play pause resume reset', // 連続した動きを設定
      // once : true, // 一度だけ実行繰り返したい場合はfalse
      // toggleClass: {  // クラス付与
      //   targets : ".js_box, .js_box2",
      //   className : 'is_active',
      // }, 
      // endTrigger : '.js_box2', // アニメーションが終了するトリガー
      // onUpdate: (self) => { //コールバック関数
      //   console.log(self.progress); //アニメーションの進捗率
      // },
      // markers : true,
      markers: {
        startColor: "red",
        endColor: "blue",
      }
    }
});
*/
document.addEventListener("DOMContentLoaded", () => {
  // 複数要素に順番にかけていく パターン1
  // const boxes = document.querySelectorAll('.js_box');
  // boxes.forEach((box) => {
  //   gsap.to(
  //   box, {
  //     autoAlpha: 0,
  //     scrollTrigger: {
  //       trigger: box,
  //       start : 'top center',
  //       markers : true,
  //     }
  //   });
  // });
  // 複数要素に順番にかけていく パターン2
  // gsap.utils.toArray('.js_box').forEach((box) => {
  //   gsap.to(
  //   box, {
  //     autoAlpha: 0,
  //     scrollTrigger: {
  //       trigger: box,
  //       start : 'top center',
  //       markers : true,
  //     }
  //   });
  // });
  // タイムラインとの組み合わせ
  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '.js_box',
  //     start : 'top center',
  //     end : 'bottom 20%',
  //     markers : true,
  //     scrub : true,
  //   }
  // });
  // tl
  //   .to('.js_box', { x : 100})
  //   .to('.js_box', { y : 200})
  //   .to('.js_box', { x : -200})
  //   .to('.js_box', { y : 0})
  //   .to('.js_box', { x : 0})
});


// [matchMedia]レスポンシブ
/*
document.addEventListener("DOMContentLoaded", () => {
  const mm = gsap.matchMedia();
  mm.add("(min-width: 768px)", () => {
    gsap.fromTo(
      ".card",
      {
        autoAlpha: 0,
        y: 20
      },
      {
        autoAlpha: 1,
        y: 0,
        delay: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".cards",
          start: "top center",
          markers: true,
        },
      },
    );
  });

  mm.add("(max-width: 767px)", () => { 
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          autoAlpha: 0,
          y: 20
        },
        {
          autoAlpha: 1,
          y: 0,
          scrollTrigger: {
            trigger: card,
            start: "top 40%",
            markers: true,
          },
        },
      );
    })
  })
});
*/

// ラインマーカーアニメーション アニメーション登録
// /*
document.addEventListener('DOMContentLoaded', () => {
  const markers = document.querySelectorAll('.js_marker');
  // [通常のやり方]
  // markers.forEach((marker) => {
  //   gsap.to(
  //     marker, {
  //       'backgroundSize': '100% 100%',
  //       scrollTrigger: {
  //         trigger: marker,
  //         start : 'top 30%',
  //         markers : true,
  //       }
  //     });
  //   });

  // [アニメーションを登録して使い回したい場合]
  // アニメーション登録
  gsap.registerEffect({
    name : 'lineMarker',
    effect : (targets, config) => { 
      gsap.to(
        targets, {
          backgroundSize: config.backgroundSize,
          duration: config.duration,
          scrollTrigger: {
            trigger: targets,
            start : config.start,
            markers : true,
          }
        });
    },
    // 初期状態
    defaults : {
      backgroundSize: '100% 100%',
      duration: 1,
      start : 'top 30%',
    },
  })
  // 登録したアニメーションを実行
  // markers.forEach((marker) => {
  //   gsap.effects.lineMarker(marker, {});
  // });
  // 登録したアニメーションを実行（特定の箇所だけアニメーションを変えたい）
  markers.forEach((marker, i) => {
    if (i == 0 || i == 1) { 
      gsap.effects.lineMarker(marker, {backgroundSize : '100% 60%'});
    } else {
      gsap.effects.lineMarker(marker, {});
    }
    });
});
// */
