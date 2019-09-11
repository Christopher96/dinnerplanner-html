class PrintoutView {
    constructor(container) {
        this.container = container;
        this.startBtn = null;
    }

    // An example of creating HTML declaratively. Think about the pros and cons of this approach.
    render() {
        fetch("src/view/printout.html")
            .then(res => res.text())
            .then(template => {
                this.container.html(template);
                this.afterRender();
            })
    }

    afterRender() {
    }
}
