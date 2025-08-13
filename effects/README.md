# 다양한 그래픽 효과 적용하기

## linear-gradient, radial-gradient 그레디언트 적용하기

```css
선택자 {
 background: linear-gradient(방향, 색상1, 색상2);
 background: radial-gradient(색상1, 색상2);
}
```

```css
div {
 display: inline-block;
 width: 200px;
 height: 200px;
 margin: 50px;
}
div:nth-of-type(1) {
 background: radial-gradient(to bottom, blue, red);
}
div:nth-of-type(2) {
 background: linear-gradient(to top, blue, red);
}
div:nth-of-type(3) {
 background: linear-gradient(to right, blue, red);
}
div:nth-of-type(4) {
 background: linear-gradient(to left, blue, red);
}
div:nth-of-type(5) {
 background: linear-gradient(80deg, blue, red);
}
```

## filter 특수 효과

- blur 요소의 흐림 효과 조절
- brightness 요소의 밝기 조절
- contrast 요소의 대비 조절
- grayscale 요소의 흑백 지정
- hue-rotate 요소의 색상 단계 조절
- invert 요소의 색상 반전 단계 조절
- saturate 요소의 채도 조절
- sepia 요소의 갈색 톤 단계 조절

```css
/* 수치값이 커질수록 blur 효과 증가 */
img:nth-of-type(2) {
 filter: blur(3px);
}

/* 1보다 작아지면 어두워지고 커지면 밝아짐 */
img:nth-of-type(3) {
 filter: brightness(0.5);
}

/* 100% 보다 작아지면 대비효과가 낮아지고 높아지면 대비증가 */
img:nth-of-type(4) {
 filter: contrast(150%);
}

/* 100%로 근접할수록 흑백으로 전환 */
img:nth-of-type(5) {
 filter: grayscale(100%);
}

/* 0deg 원래 이미지 색상 0 ~ 360deg까지 변경할수록 색상 변경 */
img:nth-of-type(6) {
 filter: hue-rotate(180deg);
}

/* 100%로 근접할수록 색감이 정 반대로 전환 */
img:nth-of-type(7) {
 filter: invert(100%);
}

/* 0으로 근접할수록 색감의 채도가 낮아짐 */
img:nth-of-type(8) {
 filter: saturate(1.5);
}

/* 100%로 근접할수록 갈색톤으로 색감이 변경 */
img:nth-of-type(9) {
 filter: sepia(100%);
}
```
