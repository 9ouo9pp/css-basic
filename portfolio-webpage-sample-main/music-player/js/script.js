window.addEventListener("load", () => {
 const frame = document.querySelector("section");
 const articles = frame.querySelectorAll("article");
 //  console.log(articles);
 const audios = frame.querySelectorAll("audio");
 const prev = document.querySelector(".btnPrev");
 const next = document.querySelector(".btnNext");
 const deg = 45;
 const len = articles.length - 1;
 let i = 0;
 let num = 0;
 console.log(num);
 let active = 0;

 // article 개수만큼 반복
 articles.forEach((article, index) => {
  const pic = article.querySelector(".pic");
  // 각 article 요소를 45도씩 회전하고 아래로 배치
  article.style.transform = `rotate(${deg * index}deg)  translateY(-100vh)`;
  pic.style.backgroundImage = `url("images/member${index + 1}.jpg")`;
  //   console.log(pic.style.backgroundImage);

  // 재생, 정지, 처음부터 재성 버튼 변수 저장
  const play = article.querySelector(".play");
  const pause = article.querySelector(".pause");
  const load = article.querySelector(".load");

  // play 버튼 클릭 이벤트
  play.addEventListener("click", (e) => {
   let isActive = e.currentTarget.closest("article").classList.contains("on");
   //    console.log(isActive);
   if (isActive) {
    e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
    e.currentTarget.closest("article").querySelector("audio").play();
   }
  });

  // pause 버튼 클릭 이벤트
  pause.addEventListener("click", (e) => {
   let isActive = e.currentTarget.closest("article").classList.contains("on");
   //    console.log(isActive);
   if (isActive) {
    e.currentTarget.closest("article").querySelector(".pic").classList.remove("on");
    e.currentTarget.closest("article").querySelector("audio").pause();
   }
  });

  // load 버튼 클릭 이벤트
  load.addEventListener("click", (e) => {
   let isActive = e.currentTarget.closest("article").classList.contains("on");
   //    console.log(isActive);
   if (isActive) {
    e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
    e.currentTarget.closest("article").querySelector("audio").load();
    e.currentTarget.closest("article").querySelector("audio").play();
   }
  });
 });

 // article 활성화 함수
 const activation = (index, articles) => {
  articles.forEach((article) => {
   article.classList.remove("on");
  });
  articles[index].classList.add("on");
 };

 // .pic, audio 초기화
 const initMusic = () => {
  audios.forEach((audio) => {
   audio.pause();
   audio.load();
   audio.closest("article").querySelector(".pic").classList.remove("on");
  });
 };

 // prev 버튼 클릭
 prev.addEventListener("click", () => {
  console.log(num);
  // 음악 초기화 함수 실행
  initMusic();

  num++;
  frame.style.transform = `rotate(${deg * num}deg)`;

  //   active === 0 ? (active = len) : active--;
  if (active === 0) {
   active = len;
  } else {
   active--;
  }

  activation(active, articles);
  console.log(num);
 });

 // next 버튼 클릭
 next.addEventListener("click", () => {
  // 음악 초기화 함수 실행
  initMusic();

  num--;
  frame.style.transform = `rotate(${deg * num}deg)`;

  //   active === len ? (active = 0) : active++;
  if (active === len) {
   active = 0;
  } else {
   active++;
  }

  activation(active, articles);
 });
});
