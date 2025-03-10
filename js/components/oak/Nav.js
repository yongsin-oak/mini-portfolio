class Nav extends HTMLElement {
  connectedCallback() {
    const navItems = {
      about: "About",
      skills: "Skills",
      portfolio: "Portfolio",
      contact: "Contact",
    };

    this.innerHTML = `
    <nav>
        <div class="mobile-toggle">
          <button class="menu-toggle">☰</button>
          <button class="music-toggle" id="mobile">Unmute Song</button>
        </div>
        <div class="nav-links">
            ${Object.keys(navItems)
              .map(
                (item) =>
                  `<a href="${"#" + item}" class="nav-item">${
                    navItems[item]
                  }</a>`
              )
              .join("")}
        </div>
        <button class="music-toggle" id="computer">Unmute Song</button>
    </nav>`;
  }
}
customElements.define("my-nav", Nav);
