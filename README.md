# styled component
## 🎈 styled-component-by-sim-yoon
- 🎬 movie introduction page
- 📝 `styled-componenet`, `css animation`, `useState`

<br>

## 👩🏻‍💻 Contributor
- heegu0311
- merorii

<br>

## ✔ 구현할 기능 목록
- [x] 컴포넌트 구조짜기 
- **List Page**
- [x] 영화 포스터 나열하기(api)
- [x] 한국영화, 외국영화 버튼 호버 모션
- [x] 한국영화, 외국영화 버튼 클릭시 구분에 맞는 포스터 출력
- [x] 포스터에 마우스 올렸을 때 포스터가 기울어지는 모션
- [x] 포스터 클릭시 detail 페이지 띄우기
- [ ] (다크모드)
- **Detail Page**
- [x] 클릭된 영화 정보 출력하기
- [x] 카드 hover시(click시) 뒤집는 모션과 함께 별점 보여주기
- [x] 나가기 버튼 모션
- [ ] 좋아요, + 버튼 모션
- [ ] (반응형적용)

<br>
<hr>
<br>

## 📃 요구사항
- 절대 Master branch 에 바로 push 하지 않습니다!(base setting은 제외)
- 각자의 branch로 push후 main(master) branch에 Pull request 로 협업 및 review를 진행한 뒤에 merge합니다.
- commit message는 convention에 맞게 작성합니다.

### ✔ BASE 요구사항
- 파일명: 파일명에는 PascalCase(대문자로 시작)를 사용합니다. *예), ReservationCard.js*
- 참조명: React 컴포넌트의 참조 이름에는 PascalCase를 쓰고 그 인스턴스의 이름에는 camelCase(소문자로 시작)를 사용합니다.
- 주석은 쓰는 것은 괜찮지만 짧은 한줄짜리 주석을 다는 것은 하지 말기 (최대한 변수나 method naming에 다 의미가 들어갈수 있도록 한다.)
- 추가 참조사항 : https://firejune.com/1795/Airbnb%EC%9D%98+React%252FJSX+%EC%8A%A4%ED%83%80%EC%9D%BC+%EA%B0%80%EC%9D%B4%EB%93%9Cㅍ

### ✔ 프로그래밍 요구사항
- 모든 styled 변수는 해당 컴포넌트 파일에 정의하는 것을 권장한다.
- 다른 컴포넌트랑 같은 css를 공유할 땐 `export` 또는 `src/components/layouts`
- DOM 트리가 깊어질수록 렌더링 속도가 느려지기 때문에, 외부 CSS 라이브러리에 있는 컴포넌트는 Wrapper 컴포넌트를 사용하지 않고 가능하면 해당 컴포넌트를 상속해 스타일을 적용하는 것을 권장한다.
```javascript
import styled from 'styled-components'
import { ThirdPartyStyledComponent } from 'third-party-css-library'
const StyledComponent = styled(ThirdPartyStyledComponent)
    margin: 1rem;
    ...
```

### React-structure Reference
- https://velog.io/@_junukim/%EB%82%98%EB%A7%8C%EC%9D%98-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%84%A4%EA%B3%84%ED%95%98%EA%B8%B0-3tk5rs8r52