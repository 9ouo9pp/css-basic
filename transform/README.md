# 콘텐츠 모양을 자유롭게 변형하기

- transform(2D)

  - scale: 선택한 요소의 크기를 확대 축소, 현재 크기의 비율을 기준으로 1보다 크면 확대, 작으면 축소
  - skew: 선택한 요소를 x축 또는 y축으로 비틀어서 변형, 원하는 각도를 지정하여 기울기 조정할 수 있음
  - translate: 현재 위치 기준에서 x축 또는 y축으로 이동
  - rotate: 회전, 원하는 각도를 지정하여 회전

- transform(3D)

  - rotateX, rotateY
  - translateZ

- perspective

  - px
  - 3D효과가 적용된 요소가 입체감 있게 보읻록 부모 요소에 perspective 속성을 적용하여 **원근감**을 부여한다.

- transform-style

  - preserve-3d
  - 3D 효과가 적용된 요소에 모션 처리를 하면 해당 3D 효과가 풀리는데,
  - 이 때 부모 요소에 preserve-3d 속성을 적용하여 3D 효과를 유지시킬 수 있다.

- transform-origin
  - 가로축, 세로축

```css
/* 2D transform */
section {
 display: inline-block;
 width: 200px;
 height: 200px;
 border: 1px solid #000;
 margin: 50px;
}
section article {
 width: 100%;
 height: 100%;
 background-color: blue;
 opacity: 0.3;
}
section:nth-of-type(1) article {
 transform: scale(1.3);
}
section:nth-of-type(2) article {
 transform: skewX(20deg);
}
section:nth-of-type(3) article {
 transform: translateY(50px);
}
section:nth-of-type(4) article {
 transform: rotate(70deg);
}
```

```css
/* 3D transform */
section {
 display: inline-block;
 width: 200px;
 height: 200px;
 border: 1px solid #000;
 margin: 50px;
 /* 값이 작을 수록 3D요소의 왜곡이 심하게 나타난다. */
 perspective: 400px;
}
section article {
 width: 100%;
 height: 100%;
 background-color: blue;
 opacity: 0.3;
}
section:nth-of-type(1) article {
 transform: rotateX(45deg);
}
section:nth-of-type(2) article {
 transform: rotateY(45deg);
}
section:nth-of-type(3) article {
 transform: translateZ(100px);
}
section:nth-of-type(4) article {
 transform: translateZ(-100px);
}
```

```css
/* transform origin */
section {
 display: inline-block;
 width: 200px;
 height: 200px;
 border: 1px solid #000;
 margin: 100px;
 /* 값이 작을 수록 3D요소의 왜곡이 심하게 나타난다. */
 perspective: 600px;
}
section article {
 width: 100%;
 height: 100%;
 background-color: blue;
 opacity: 0.3;
}
section:nth-of-type(1) article {
 transform: rotateY(120deg);
 transform-origin: center;
}
section:nth-of-type(2) article {
 transform: rotateY(120deg);
 transform-origin: right center;
}
```
