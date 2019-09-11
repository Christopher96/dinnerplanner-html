class OverviewView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
    }

    // An example of creating HTML procedurally. Think about the pros and cons of this approach.
    render() {
        let content = fetch("src/view/overview.html")
            .then(res => res.text())
            .then(function(html) {
                this.container.innerHTML = html;
                this.afterRender();
            }.bind(this));
    }

    afterRender() {
    }
}
