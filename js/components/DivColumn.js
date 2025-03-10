class DivColumn extends HTMLElement {
  static get observedAttributes() {
    return ["justify", "align", "gap"];
  }

  constructor() {
    super();
    this.style.display = "flex";
    this.style.flexDirection = "column";
  }

  connectedCallback() {
    this.updateStyles();
  }

  attributeChangedCallback() {
    this.updateStyles();
  }

  updateStyles() {
    this.style.justifyContent = this.getAttribute("justify");
    this.style.alignItems = this.getAttribute("align");
    this.style.gap = this.getAttribute("gap");
  }
}

customElements.define("div-column", DivColumn);
