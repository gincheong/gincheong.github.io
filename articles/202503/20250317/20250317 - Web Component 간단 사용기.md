# 20250317 - Web Component 간단 사용기

이 홈페이지의 [/about](/about) 페이지는 Web Component를 이용해서 만들었다.
Web Component는 Web API 중의 하나로.. 자세한 설명은 [공식 문서](https://developer.mozilla.org/ko/docs/Web/API/Web_components)를 참고하는 걸 추천드리고

여기에서는 Shadow DOM이라는 걸 사용해서 다른 element와 독립된 style이나 script를 작성할 수 있다.
요지는 React같은 걸 사용하면서 개발할 때처럼 HTML Element를 컴포넌트라는 단위로 묶어서 개발이 가능하다.

about페이지에 있는 내용은 읽을 내용은 얼마 안 되지만 직접 작성하는 입장에선 자잘한 마크업까지 치면 양이 꽤 많아진다.
여기에 있는 내용은 변경될 수도 있고, 경우에 따라서는 새로 추가될 내용도 있으니 앞으로의 유지보수를 조금이나마 고려하고 싶었다.

마침 데이터 분리가 확실한 페이지니까, 각각의 소제목에 해당되는 부분을 Web Component로 만들기로 했다.
GPT를 통해서 간단한 예시 코드를 받고 [Profile.js](/about/components/Profile.js)파일을 만들었다.

### 써보기

```js
class Profile extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <link rel="stylesheet" href="/styles/base.css" />
      <style>
        .profile {
          display: flex;
          flex-direction: column;
          row-gap: 10px;
          width: 400px;
        }
      </style>
      <section>
        <h2>프로필</h2>
        <div class="profile">
          <span>프론트엔드 엔지니어</span>
          <span>gincheong2@gmail.com</span>
        </div>
      </section>
    `;
  }
}

customElements.define('about-profile', Profile);
```

실제랑은 다르게 내용을 조금 줄였다.

### Mode

```js
const shadow = this.attachShadow({ mode: 'open' });
```

`attachShadow` 메소드로 Shadow DOM을 사용할 때 `mode`를 설정할 수 있는데, 이 mode가 `closed`일 때는 Shadow DOM 외부에서 자바스크립트를 통해 내부를 제어할 수 없게 한다.
반대로 `open`이면 제어가 가능하다.

나는 확장 프로그램으로 화면의 요소를 제어하는 Vimium을 쓰고 있었기에, `closed`로 구현하면 Vimium이 동작하지 않게 되므로 `open`으로 구현했다.
이외에도 JavaScript를 통해서 크롤링을 하는 도구 등에 영향을 줄 수도 있을 것 같다.
내부 script와 style은 이 설정과 무관하게 독립적으로 관리되니 특별한 사유가 없다면 `open`으로 해 둬도 좋을 것 같다.
어차피 브라우저 개발자 도구를 사용하면 Shadow DOM 내부는 얼마든지 접근이 가능하다.

### innerHTML?

```js
shadow.innerHTML = `
  <link rel="stylesheet" href="/styles/base.css" />
    ...
  </section>
`;
```

나는 innerHTML을 사용하여 DOM 내부에 직접 마크업을 작성해서 입력했다.
나는 정적인 데이터만 표시하면 되었기 때문에, 작성하는 데 편의성을 위해서 innerHTML을 사용헀다.
알아보는 것 자체는 편리했지만 확장 도구들을 따로 알아보지 않고 작성하느라 들여쓰기나 마크업 자동완성 등이 전혀 동작하지 않아 불편한 점은 있었다.

이 방법 대신 각각의 요소를 `createElement`로 만들어서 `appendChild`를 반복하는 식으로도 구현이 가능하다.

### createElement

```js
class MyElement extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    this.count = 0;

    this.paragraph = document.createElement('p');
    this.paragraph.innerText = String(this.count);

    const plusButton = document.createElement('button');
    plusButton.innerText = '+';
    plusButton.onclick = () => this.updateCount(++this.count);

    const minusButton = document.createElement('button');
    minusButton.innerText = '-';
    minusButton.onclick = () => this.updateCount(--this.count);

    const section = document.createElement('section');
    section.appendChild(this.paragraph);
    section.appendChild(plusButton);
    section.appendChild(minusButton);

    shadow.appendChild(section);
  }

  updateCount(newCount) {
    this.paragraph.innerText = this.count;
  }
}

customElements.define('my-element', MyElement);
```

예시처럼 상태값에 따라 화면을 업데이트할 필요가 있다면 요소를 createElement로 만들고, 해당 요소의 값만 바꾸는 식으로 구현하면 될 것이다.
전체 innerHTML을 다시 그리게 하는 방법도 가능하지만, 이렇게 하면 `p`태그만 리렌더링되기 때문에 렌더링 최적화가 가능하다.
대신 이건 실제 마크업이 어떻게 배치되었는지 알아보기가 어려운 점이 있었다.
두 개를 적절히 짬뽕해서 작성 편의성도 챙기되 업데이트 최적화를 할 수 있는 방법이 없을까? -> [Lit.dev](https://lit.dev/)

비슷한 고민거리를 통해서 React, Vue, Svelte 등에서 고유 확장자를 가진 파일들이 생겨난 게 아닌가 싶다. 아닐수도?
물론 이 프레임워크들이 Shadow DOM을 쓰는 건 아니다.

### 써보고 난 느낌

예전에는 웹 브라우저별로 자바스크립트를 동작시키는 방식이 제각각이어서, 브라우저 간 차이를 해소해주는 jQuery가 크게 각광받았다고 한다.
그러면서 자연스레 프론트엔드 개발에는 어떤 라이브러리가 병행되었고, "순수 자바스크립트도 가능하다"라는 의미를 강조하기 위해 자바스크립트라는 언어에만 특히나 "바닐라 자바스크립트"라는 키워드가 생겼다고 한다.
jQuery는 이제 쓰임새가 많이 줄었지만, 그 자리를 React나 Vue와 같은 프레임워크가 대신하여 여전히 프론트엔드 개발은 외부 모듈의 의존성이 크다.
IT업계는 Lightweight가 강조되는 곳이기 때문에 바닐라 자바스크립트를 경험해 보는 것도 내 식견을 넓히는 데 도움이 되지 않을까 생각한다.

그치만 쓰기 불편하다는 느낌이 가시진 않는다.
