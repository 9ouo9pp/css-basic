# background

## 배경색 지정하기

```css
body {
 /* background-color: #000; */
 background: #333;
}
```

## 배경 이미지 삽입하기

- background-image: url(이미지 경로);
- background-repeat: repeat | repeat-x | repeat-y | no-repeat;
- background-position: 가로축 세로축;
- background-size: contain | cover;
- background-attachment: fixed;

```css
body {
 /* background-color: #000; */
 background: #333;
}
.img-box {
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 width: 300px;
 height: 300px;
 background-color: #fff;

 /* 배경 이미지 삽입하기 */
 /* background-image: url("../images/background-img.png"); */
 /* background-repeat: no-repeat; */
 /* background-position: center; */
 /* background-size: cover; */

 background: url("../images/background-img.png") no-repeat center;
 background-size: cover;
}
```
