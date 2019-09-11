class SideBarView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
    }

    // An example of creating HTML procedurally. Think about the pros and cons of this approach.
    render() {
        let content = fetch("src/view/sidebar.html")
            .then(res => res.text())
            .then(function(template) {
                this.container.html(template);
                this.afterRender();
            }.bind(this));

        this.afterRender();
    }

    afterRender() {
    }
}
