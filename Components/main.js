class WordCount extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const text = document.createElement('span');
        shadow.appendChild(text);
    }
    
    connectedCallback() {
        // Get a reference to the textarea element
        const textarea = this.closest('.container').querySelector('.text-input-area');

        // Update the word count when the textarea content changes
        textarea.addEventListener('input', () => {
            const count = this.countWords(textarea.value);
            this.shadowRoot.querySelector('span').textContent = count;
        });

        // Initial word count
        const initialCount = this.countWords(textarea.value);
        this.shadowRoot.querySelector('span').textContent = initialCount;
    }

    countWords(text) {
        const words = text.split(/\s+/).filter(word => word !== '');
        return `Words: ${words.length}`;
    }
}


customElements.define('word-count', WordCount);
