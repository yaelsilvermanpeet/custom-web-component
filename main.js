class WordCount extends HTMLElement {
    //constructor can custom child behaviors
    constructor() {
        super()
        const parent = this.parentNode
        console.log(parent)
        const shadow = this.attachShadow({mode: 'open'})
        const text = document.createElement('span')
        shadow.appendChild(text)

        const count = `${this.countWords(parent)}`
        text.textContent = count;
    

    setInterval(()=> {
    const count = `${this.countWords(parent)}`
    text.textContent = count
    }, 200)
    }


    countWords(node) {
        const text = node.innerText || node.textContent
        return text.split(/\s+/g).length
    }
}

customElements.define("word-count", WordCount);
//define parameters are name, class, extends
