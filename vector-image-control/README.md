# 1. 벡터 이미지 파일 제어하기

```html
<article>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 458 522">
    <path
      d="M224 112c-8.8 0-16-7.2-16-16l0-16c0-44.2 35.8-80 80-80l16 
     0c8.8 0 16 7.2 16 16l0 16c0 44.2-35.8 80-80 80l-16 0zM0 288c0-76.3 
     35.7-160 112-160c27.3 0 59.7 10.3 82.7 19.3c18.8 7.3 39.9 7.3 58.7 
     0c22.9-8.9 55.4-19.3 82.7-19.3c76.3 0 112 83.7 112 160c0 128-80 
     224-160 224c-16.5 0-38.1-6.6-51.5-11.3c-8.1-2.8-16.9-2.8-25 0c-13.4 
     4.7-35 11.3-51.5 11.3C80 512 0 416 0 288z"
    />
  </svg>
</article>
```

```css
article {
  width: 500px;
  border: 1px solid #000;
  box-sizing: border-box;
  padding: 50px;
  margin: 50px auto;
}
article svg {
  width: 100%;
}
/* path 속성 바꾸기 */
article svg path {
  fill: transparent;
  stroke: red;
  stroke-width: 3;
}
```

## 1.1 패스의 stroke-dasharray, stroke-dashoffset 속성

- stroke-dasharray는 선의 간격을 띄는 속성

  - 값이 클수록 선의 간격의 더 벌어진다.
  - 이 때 중요한 점은 stoke-dasharray로 빈 공간이 늘어날 수록 실제 선의 길이가 같은 비율로 늘어난다.
  - 즉, stroke-dasharray로 설정한 빈 공간과 실제 선이 그려지는 영역의 크기는 항상 같다.

- stroke-dashoffset은 가시 영역에 보이는 선의 시작 위치를 지정

```css
article {
  width: 500px;
  border: 1px solid #000;
  box-sizing: border-box;
  padding: 50px;
  margin: 50px auto;
}
article svg {
  width: 100%;
}
/* path 속성 바꾸기 */
article svg path {
  fill: transparent;
  stroke: red;
  stroke-width: 3;
  stroke-dasharray: 100;
  stroke-dashoffset: 0;
}
article:hover svg path {
  stroke-dashoffset: -50;
}
```

## [파비콘 만들기 사이트]

("https://www.favicon-generator.org/")
