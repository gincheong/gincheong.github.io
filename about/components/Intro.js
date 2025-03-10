class Intro extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/styles/base.css" />
      <style>
        li {
          font-size: 0.9rem;
        }
      </style>
      <section>
        <h4>사내 신 기술 도입에 기여</h4>
        <ul>
          <li>회사 내 프로젝트에 최초로 GraphQL을 도입하여 사용함</li>
          <li>기존 사용 중이던 REST API + Postman 방식과 비교하여 장/단점 분석</li>
          <li>직접 사용한 경험을 통해 동료들과 의견을 나누며 기술 도입에 긍정적 영향을 줌</li>
        </ul>

        <h4>서비스 초기 개발부터 배포까지의 경험</h4>
        <ul>
          <li>모바일 앱 Dr.Listen를 초기부터 개발하여 모바일 환경에서의 배포 및 운영 담당</li>
          <li>React Native를 활용하여 iOS, Android 두 플랫폼 동시 개발</li>
          <li>서비스를 성공적으로 런칭하고 사내 신규 프로젝트에 React Native가 도입되는 데 기여</li>
        </ul>
      </section> 
    `;
  }
}

customElements.define('about-intro', Intro);
