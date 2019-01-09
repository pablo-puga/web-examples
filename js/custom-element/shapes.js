
class Circle extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(document.createElement('style'));
        shadow.appendChild(document.createElement('div'));
    }

    static get observedAttributes() {
        return['color', 'radius'];
    }

    connectedCallback() {
        this.updateStyle();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.updateStyle();
    }

    updateStyle() {
        let radius = parseInt(this.getAttribute('radius') || 10);
        let color = this.getAttribute('color') || 'transparent';
        this.shadowRoot.childNodes.forEach(child => {
            if (child.nodeName === 'STYLE') {
                child.textContent = `
                    div {
                        background-color: ${color};
                        height: ${radius * 2}px;
                        width: ${radius * 2}px;
                        border-radius: 50%;
                    }
                `;
            }
        });
    }
}

customElements.define('shape-circle', Circle);