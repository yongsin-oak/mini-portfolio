class MyText extends HTMLElement {
  static get observedAttributes() {
    return [
      "size",
      "color",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "s1",
      "s2",
      "s3",
      "medium",
      "semiBold",
      "bold",
    ];
  }

  constructor() {
    super();
    this.updateStyles();
  }

  connectedCallback() {
    this.updateStyles();
  }

  attributeChangedCallback() {
    this.updateStyles();
  }

  updateStyles() {
    const fontSizes = {
      h1: "32px",
      h2: "24px",
      h3: "20px",
      h4: "18px",
      h5: "16px",
      h6: "14px",
      s1: "16px",
      s2: "14px",
      s3: "12px",
    };

    const fontWeights = {
      medium: "500",
      semiBold: "600",
      bold: "700",
    };

    const getFontWeight = () => {
      for (const key of Object.keys(fontWeights)) {
        if (this.hasAttribute(key)) {
          return fontWeights[key];
        }
      }
      return "400";
    };

    const getFontSize = () => {
      for (const key of Object.keys(fontSizes)) {
        if (this.hasAttribute(key)) {
          return fontSizes[key];
        }
      }
      return "16px";
    };

    this.style.fontWeight = getFontWeight();
    this.style.fontSize = this.getAttribute("size") || getFontSize();
    this.style.color = this.getAttribute("color") || "inherit";
  }
}

customElements.define("my-text", MyText);
