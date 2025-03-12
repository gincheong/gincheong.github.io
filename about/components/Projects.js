class Projects extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });

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
      </section>
    `;
  }
}

customElements.define('about-projects', Projects);
