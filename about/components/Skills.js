class Skills extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/styles/base.css" />
      <style>
        h3 {
          margin-bottom: 10px;
        }

        ul {
          display: flex;
          flex-direction: row;
          column-gap: 4px;
          padding-inline-start: 1rem;
          margin-block: 4px;
        }

        li {
          padding: 2px 6px;
          border-radius: 6px;

          font-weight: 700;

          list-style: none;
        }
      </style>
      <section>
        <h3>Techs</h3>
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>React Native</li>
          <li>GraphQL</li>
          <li>Python</li>
        </ul>
        <h3>Tools</h3>
        <ul>
          <li>Vim</li>
          <li>ESLint</li>
          <li>Prettier</li>
          <li>Github</li>
        </ul>
        <ul>
          <a href='/articles/202503/20250302/20250302 - 유용하게 쓰고 있는 맥용 소프트웨어들.html'>
            유용하게 쓰고 있는 맥용 소프트웨어들
          </a>
        </ul>

      </section> 
    `;
  }
}

customElements.define('about-skills', Skills);
