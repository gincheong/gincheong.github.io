class Experiences extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <link rel="stylesheet" href="/styles/base.css" />
      <style>
        h4 {
          margin-block-end: 0.5rem;
        }

        ul {
          padding-inline-start: 1.5rem;
          margin-block-start: 0;
        }

        dl {
          font-weight: 500;
        }

        dd {
          padding-top: 0.5rem;
          margin-inline-start: 0.5rem;

          font-size: 0.9rem;
          font-weight: 400;
        }

        dd:before {
          content: '• ';
        }
      </style>
      <section>
        <h2>경력</h3>

        <article>
          <h3>주)제네시스랩 <small>(2020.01 ~ 2023.11)</small></h3>

          <dl>
            <dt>정신건강 관리 서비스 Dr.Listen</dt>
            <dd>React Native 모바일 앱 하이브리드 개발</dd>
            <dd>
              <a
                target="_blank"
                href="https://apps.apple.com/kr/app/%EB%8B%A5%ED%84%B0%EB%A6%AC%EC%8A%A8-%EC%9A%B0%EC%9A%B8-%EB%B6%88%EC%95%88-%EB%A7%88%EC%9D%8C%EA%B1%B4%EA%B0%95-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%9D%BC%EA%B8%B0-%EB%B3%B5%EC%95%BD%EC%95%8C%EB%A6%BC/id1608846704"
                >App Store</a
              >
              /
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.genesislab.drlisn&hl=ko_KR"
                >Google Play</a
              >
              /
              <a target="_blank" href="https://home.drlisten.ai">Homepage</a>
            </dd>
            <br>
            <dt>콘텐츠 에디터 Zuicy Studio</dt>
            <dd>모바일 앱 Zuicy의 콘텐츠 에디터 Zuicy Studio 웹 개발</dd>
            <dd>
              <a target="_blank" href="https://studio.zuicy.ai/">Studio</a>
              /
              <a target="_blank" href="https://home.zuicy.ai/">Homepage</a>
            </dd>
            <br>
            <dt>B2B 영상 면접 서비스 Viewinter HR 백오피스 툴</dt>
            <dd>고객사용 관리 툴 Company 서비스, 자사 관리 툴 Admin 서비스 개발</dd>
          </dl>

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
        </article>

        <br>

        <article>
          <h3>원데이코리아 <small>(2019.04 ~ 2020.01)</small></h3>

          <dl>
            <dt>인공지능 챗봇 Tumakr 개발</dt>
            <dd>챗봇 프론트엔드 개발 담당</dd>
            <dd>Rasa Framework를 활용한 인공지능 챗봇 서버 개발</dd>
            <br>
            <dt>사내 데이터베이스 서버 개발</dt>
            <dd>Python Flask를 이용한 상품 데이터 조회 API 서버 개발</dd>
          </dl>
        </article>
      </section>
    `;
  }
}

customElements.define('about-experiences', Experiences);
