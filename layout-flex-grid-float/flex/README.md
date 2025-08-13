# 플렉스 박스 레이아웃

## 플렉스 박스 레이아웃에서 사용하는 용어

- 플렉스 컨테이너(박스): 부모 박스, 플렉스를 적용할 대상을 묶는 요소
- 플렉스 아이템(항목): 자식 박스, 플렉스를 적용할 대상
- 주축(main axis): 플렉스 컨테이너 안에서 플렉스 아이템을 배치하는 기본 방향
  - 기본적으로 왼쪽에서 오른쪽 배치
  - 플렉스 아이템의 배치가 시작되는 위치를 "주축 시작점" flex-start
  - 플렉스 아이템의 배치가 끝나는 위치를 "주축 끝점" flex-end
- 교차축(cross axis): 주축과 교차하는 방향을 말함
  - 기본적으로 위에서 아래로 배치
  - 플렉스 아이템의 배치가 시작되는 위치를 "교차축 시작점" flex-start
  - 플렉스 아이템의 배치가 끝나는 위치를 "교차축 끝점" flex-end

## 플렉스 박스 항목을 배치하는 속성

- justify-content: 주축 방향의 정렬 방법
- align-items: 교차축 방향의 정렬 방법
- align-self: 교차축에 있는 개별 항목의 정렬 방법
- align-content: 교차축에 여러 줄로 표시된 항목의 정렬 방법

### 플렉스 컨테이너를 지정하는 display 속성

- flex: 컨테이너 안의 플렉스 항목을 블록 레벨 요소로 배치
- inline-flex: 컨테이너 안의 플렉스 항목을 인라인 레벨 요소로 배치

### 플렉스 방향을 지정하는 flex-direction 속성

- row: 주축을 가로로 지정하고 왼쪽에서 오른쪽으로 배치, 기본값
- row-reverse: 주축을 가로로 지정, 반대로 오른쪽에서 왼쪽으로 배치
- column: 주축을 세로로 지정하고 위쪽에서 아래쪽으로 배치
- column-reverse: 주축을 세로로 지정하고 아래쪽에서 위쪽으로 배치

### 플렉스 항목의 줄을 바꾸는 flex-wrap 속성

- nowrap: 플렉스 항목을 한줄에 표시, 기본값
- wrap: 플렉스 항목을 여러 줄에 표시
- wrap-reverse: 플렉스 항목을 여러 줄에 표시하되, 시작점과 끝점이 바뀜

### 배치 방향과 줄 바꿈을 한꺼번에 지정하는 flex-flow 속성

- flex-direction 속성과 flex-wrap 속성을 한꺼번에 지정
- 기본값은 row nowrap

### 주축 정렬 방법을 지정하는 justify-content 속성

- flex-start: 주축의 시작점에 맞춰 배치
- flex-end: 주축의 끝점에 맞춰 배치
- center: 주축의 중앙에 맞춰 배치
- space-between: 첫 번째 항목과 끝 항목을 주축의 시작점 끝점에 배치한 후 나머지 항목은 그 사이에 같은 간격으로 배치
- space-around: 모든 항목을 주축에 같은 간격으로 배치

### 교차축 정렬 방법을 지정하는 align-items 속성

- flex-start
- flex-end
- center
- baseline: 교차축의 문자 기준선에 맞춰 배치
- stretch: 플렉스 항목을 늘려 교차축에 가득 차게 배치

### 특정 항목만 정렬 방법을 지정하는 align-self 속성

- 값은 align-items 속성에서 사용하는 값과 같다
- 플렉스 항목에 사용

### 여러 줄일 때 교차축 정렬방법을 지정하는 align-content 속성

- 주축에서 줄 바꿈이 생겨서 플렉스 항목을 여러 줄로 표시할 때
- align-content 속성을 사용하면 교차축에서 플렉스 항목 간의 간격을 지정할 수 있다

- flex-start
- flex-end
- center
- space-between
- space-around
- stretch
