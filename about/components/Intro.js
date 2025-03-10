class Intro extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/styles/base.css" />
      <style>
        p {
          font-size: 0.9rem;
        }
      </style>
      <section>
        <h4>초기 개발부터 서비스 배포 및 운영 경험</h4>
        <ul>
          <li>
            모바일 앱 서비스 Dr.Listen를 초기부터 개발하여 모바일 환경에서의 배포 및 운영 담당
          </li>
          <li>
            React Native를 활용하여 React 생태계에 대한 전반적인 경험 축적
          </li>
        </ul>

        <h4>asdasd</h4>
        <ul>
          <li>
            123
          </li>
          <li>
            234
          </li>
        </ul>
      </section> 
    `;
  }
}

customElements.define('about-intro', Intro);
