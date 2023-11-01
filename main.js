class WordCount extends HTMLElement {
    //constructor can custom child behaviors
    constructor() {
    //super calls the constructor of the HTMLelement
        super()
    //set the parent of this element to a variable    
    const parent = this.parentNode
    //create SHADOW DOM with mode open for edit
    const shadow = this.attachShadow({mode: 'open'})
    const text = document.createElement('span')
    text.textContent = "test text"
    shadow.appendChild(text)

    setInterval(()=> {
    const count = 'Words: ${this.countWords(parent)}'
    text.textContent = count
    }, 200)
    }

    countWords(node) {
        const text = node.innerText || node.textContent
        return text.split(/\s+/g).length
    }
}

customElements.define('word-count', WordCount);
//define parameters are name, class, extends
