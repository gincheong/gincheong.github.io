class Posts extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <link rel="stylesheet" href="/styles/base.css" />
      <style>
        h3 {
          margin-bottom: 10px;
        }

        ul {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          column-gap: 14px;
          padding-inline-start: 1rem;
          margin-block: 4px;
        }

        li {
          font-weight: 700;

          list-style: none;
        }
      </style>
      <section>
        <h3>Posts</h3>
        <ul>
          <a href='/articles/202503/20250302/20250302 - 유용하게 쓰고 있는 맥용 소프트웨어들.html'>
            유용하게 쓰고 있는 맥용 소프트웨어들
          </a>
        </ul>

      </section> 
    `;
  }
}

customElements.define('about-posts', Posts);
