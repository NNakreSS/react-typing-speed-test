import { nanoid } from "@reduxjs/toolkit";

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

export const getWords = () => {
  const text = `Sabahın erken saatlerinde kuş sesleriyle uyanırız Doğanın kolları bize sıcak bir kucaklama sunar güne enerji dolu başlarız Yavaşça yataktan kalkarız pencereden dışarı bakarız Rüzgar hafifçe eser ağaçlar nazikçe sallanır Gün ışığı odamıza dolarken mutluluk yüzümüzde belirir Kahvaltı masasına otururuz bir fincan sıcak kahve eşliğinde güne merhaba deriz Sevdiklerimizle sohbet eder kahkahalarla dolu anlar yaşarız Ardından dışarı çıkarız doğanın tüm güzelliklerini keşfetmek için Yemyeşil çimenler rengarenk çiçekler ve kuşların cıvıltısı bizi karşılar Her adımda doğanın bize sunduğu huzuru hissederiz Gökyüzündeki bulutlar özgürlüğün sembolü gibi görünür Zamanın durduğu anlarda içimizdeki dinginlikle bütünleşiriz Gün batarken doğanın renk cümbüşü daha da belirginleşir Ufukta kaybolan güneş günü uğurlarken bize umut verir Geceye doğru yavaşça döneriz yıldızların ışıltısına kendimizi kaptırırız Gökyüzündeki her bir yıldız bize sonsuzluğu hatırlatır Uykuya dalarken içimizdeki huzurun devam etmesini dileriz Dışarıda gece sessizliği hüküm sürerken yıldızlar gökyüzünde parıldar Ayın ışığı sakin sulara yansır manzara büyüleyicidir Gecenin sessizliği içimize huzur verir hayallerimiz uzak diyarlara yolculuk yapar Yıldızların altında yürürken zamanın durduğunu hissederiz Gece boyunca doğanın sessiz şarkısına kulak veririz Sabahın ilk ışıklarıyla birlikte yeniden uyanırız doğanın mucizeleriyle dolu bir gün daha bizi bekler Her anı kucaklayarak yaşamın tadını çıkarırız Gökyüzünde yıldızlar parlıyordu sessizlik etrafı sarmıştı Rüzgar hafifçe esiyordu ağaçlar kımıldamadan duruyordu Ayın ışığı suyun üstünde dans ediyordu manzara büyüleyiciydi Gece sessizliği içime huzur veriyordu düşüncelerim sonsuzluğa yolculuk yapıyordu Yıldızların altında yürüdüğümde zamanın durduğunu hissediyordum Gece boyunca doğanın melodisini dinliyordum her bir notada huzur buluyordum Sabah güneşin ilk ışıklarıyla yeniden doğuyordu doğanın mucizeleriyle dolu bir gün başlıyordu Her anı değerlendirerek yaşamın keyfini çıkarıyordum`;

  const textArray = text.split(" ");
  const shuffledArray = shuffleArray(textArray);
  const wordsArray = shuffledArray.map((word) => {
    return {
      id: nanoid(),
      word,
      status: "idle" /*status: fail | success | idle */,
    };
  });
  return wordsArray;
};
