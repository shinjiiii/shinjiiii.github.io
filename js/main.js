'use strict';

{
  function callback(entries, obs){
    entries.forEach(entry => {  //交差した要素をentryとして次の処理をするように命令
      if(!entry.isIntersecting){
        return;     //要素が交差していない時は何もしたくない→isIntersectingで交差しているかどうかを調べて、それがfalseだったら早期returnをする
      }

      entry.target.classList.add('appear');  //交差したらappearクラスをつけたい→entry.targetに対してclassList.addをつける

      obs.unobserve(entry.target);  //appearクラスがついたら監視対象から外す
    });
  }

  // 要素が画面と20%くらい交差したらcallbackを実行したい
  const options = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(callback, options);
  // 上記でIntersection Observer APIの設定完了。以下に対象の要素を監視するコードを書く

  const targets = document.querySelectorAll('.animate');

  targets.forEach(target => {   //targetsをforEachで処理する
    observer.observe(target);   
  });
}

