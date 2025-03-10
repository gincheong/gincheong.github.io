class Profile extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/styles/base.css" />
      <style>
        .profile {
          display: flex;
          flex-direction: column;
          row-gap: 10px;
          width: 400px;
        }

        .profile dt {
          flex: 0.3;

          font-weight: bold;
        }

        .profile dd {
          flex: 1;
        }

        .profile > span {
          display: flex;
          flex-direction: row;
        }
      </style>
      <section>
        <h3>프로필</h3>
        <dl class="profile">
          <span>
            <dt>이름</dt>
            <dd><strong>이인규</strong></dd>
          </span>
          <span>
            <dt>직무</dt>
            <dd>프론트엔드 엔지니어</dd>
          </span>
          <span>
            <dt>이메일</dt>
            <dd>gincheong2@gmail.com</dd>
          </span>
          <span>
            <dt>GitHub</dt>
            <dd><a target="_blank" href="https://github.com/gincheong">github.com/gincheong</a></dd>
          </span>
        </dl>
      </section>
    `;
  }
}

customElements.define('about-profile', Profile);
