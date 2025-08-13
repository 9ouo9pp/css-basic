# 자동으로 움직이는 애니메이션

- transition 속성은 사용자의 특정 동작에 반응
- animation 속성은 사용자가 어떤 동작을 하지 않아도 미리 지정한 조건에 맞게 자동으로 반복

- @keyframes

  - 애니메이션 세트 지정
  - 애니메이션의 시작과 끝을 등록
  - 0% 또는 from 시작 지점
  - 100% 또는 to 끝 지점
  - 중간 지점 여러개 추가할 수 있다.

- animation-name 이름
  - 키프레임으로 등록한 애니메이션의 이름을 호출
- animation-duration 지속 시간(초)
  - 키프레임 모션 한 세트를 얼마 동안 동작하게 할지 초 단위로 등록
- animation-timing-function 가속도, 사용방법은 transition 속성과 같다
- animation-iteration-count 반복 횟수, infinite 무한 반복
- animation-delay 지연 시간(초)
- animation-play-state running / puased 키프레임 모션 동작 상태

- animation: 이름 진행시간 가속도 지연시간 반복횟수

```css
@keyframes rotation {
 0% {
  transform: rotate(0deg);
 }
 100% {
  transform: rotate(360deg);
 }
}

article {
 width: 400px;
 height: 400px;
 background-color: blue;
 margin: 100px auto;
 animation: rotation 2s linear infinite;
 /* animation-play-state: running; */
}
article:hover {
 animation-play-state: paused;
}
```
