# CSS로 HTML 요소 선택하기

## 전체 선택자

```css
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}
```

## 태그(타입) 선택자

- 태그명을 이용하여 선택

```css
html,
body {
 font-family: Arial, sans-serif;
 font-size: 16px;
 background-color: #fff;
}
a {
 text-decoration: none;
 color: #000;
}
ul,
ol,
li {
 list-style: none;
}
img {
 vertical-align: middle;
 border: 0;
}
```

## 자손 선택자

- 자식과 하위 요소들 모두 선택하기

```css
.wrap strong {
 border: 1px solid red;
}
```

## 자식 선택자

- 직계 자식 요소만 선택하기

```css
.wrap > strong {
 border: 1px solid blue;
}
```

## 순서 선택자

- **형제 요소**의 순서를 이용하여 선택하기

```css
/* 순서 선택자 */
ul li {
 border: 1px solid red;
}
ul li:nth-of-type(1) {
 border: 1px solid green;
}
ul li:nth-of-type(2) {
 border: 1px solid blue;
}
ul li:nth-of-type(3) {
 border: 1px solid violet;
}
ul li:nth-of-type(4) {
 border: 1px solid yellowgreen;
}

.navi > li:nth-of-type(1) {
 border: 1px solid salmon;
}
```

## 수열 선택자

- 수식을 이용하여 선택하기

```css
ul li:nth-of-type(2n + 1) {
 background-color: #ccc;
}
```

```css
/* 홀수 */
ul li:nth-of-type(odd) {
 background-color: #ccc;
}
```

```css
/* 짝수 */
ul li:nth-of-type(even) {
 background-color: #ccc;
}
```

## 속성 선택자

- 속성값을 이용하여 선택하기

```css
input[type="text"] {
 border: 1px solid blue;
}
input[type="password"] {
 border: 1px solid red;
}
input[type="email"] {
 border: 1px solid violet;
}
```

## 가상 선택자

- 가상의 요소를 선택

```css
h1 {
 position: relative;
}
h1:hover {
 color: red;
}
h1::before {
 content: "";
 color: green;
 display: block;
 width: 200px;
 height: 4px;
 background-color: blueviolet;
 position: absolute;
 bottom: 0;
 left: 0;
}
h1::after {
 content: "HOT";
 border-radius: 4px;
 background-color: red;
 font-size: 16px;
 color: #fff;
}
```
