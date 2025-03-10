class Section extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
      <section id=${this.getAttribute("myId")} class="nes-container">
        ${this.innerHTML}
    </section>`;
  }
}
customElements.define("my-section", Section);
