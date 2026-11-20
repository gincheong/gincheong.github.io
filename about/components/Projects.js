class Projects extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <link rel="stylesheet" href="/styles/base.css" />
      <style>
        ul {
          padding-inline-start: 1.5rem;
        }
      </style>
      <section>
        <h2>프로젝트</h2>

        <h3>
          Unmouse
          <a target="_blank" href="https://gincheong.github.io/Unmouse/">
            Link
          </a>
          <small>
          <a target="_blank" href="https://github.com/gincheong/Unmouse">
            (github)
          </a>
          </small>
        </h3>
        <p>
          마우스 키 입력을 키보드 단축키로 동작시키는 앱
        </p>
        
        <h3>
          telegram-notification-bot
          <small>
          <a target="_blank" href="https://github.com/gincheong/telegram-notification-bot">
            (github)
          </a>
          </small>
        </h3>
        <p>
          텔레그램 그룹 대화방에서 사용자가 지정한 키워드가 사용되면 알림을 전송하는 키워드 알림 봇
        </p>
        <ul>
          <li>2019.03 ~ 2023.08 AWS를 통해 서비스</li>
          <li>335개 사용자 데이터 DB에 등록</li>

        </ul>

        <h3>
          Vim Playground -
          <a target="_blank" href="https://vim-playground-nine.vercel.app/">
            Link
          </a>
          <small>
          <a target="_blank" href="https://github.com/gincheong/vim-playground">
            (github)
          </a>
          </small>
        </h3>
        <p>
          Vim 키맵핑을 테스트해볼 수 있는 Playground 웹 서비스
        </p>
        <ul>
          <li>Gemini 3 Pro 모델을 이용한 바이브 코딩</li>
          <li>Vercel을 통해 서비스</li>
        </ul>

        <h3>
          그거 어딨더라? 우리집 물건 찾기 -
          <a target="_blank" href="https://home-item-finder.netlify.app">
            Link
          </a>
          <small>
          <a target="_blank" href="https://github.com/gincheong/home-item-finder">
            (github)
          </a>
          </small>
        </h3>
        <p>
          집에 있는 서랍, 옷장, 선반에 있는 물건들을 디지털로 저장한다. 찾고 싶은 물건을 이름으로 검색해서 쉽게 위치를 파악 가능!
        </p>
      </section>
    `;
  }
}

customElements.define('about-projects', Projects);
