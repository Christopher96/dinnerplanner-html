class OverviewView {
    constructor(container, model) {
        this.container = $(container);
        this.model = model;
    }

    // An example of creating HTML procedurally. Think about the pros and cons of this approach.
    render() {
        let html = `
        <div id="overviewHeader">
            <span class="title">My Dinner: 3 People</span>
            <button class="btn btn-primary">Go back and edit dinner</button>
        </div>
        <hr/>
        <div id="overviewDishes"></div>
        <hr/>
        <div id="overviewPrint">
            <button class="btn btn-primary">
                Print Full Recipe
            </button>
        </div>
        `;
        let content = fetch("src/view/overview.html")
            .then(res => res.text())
            .then(function(template) {
                this.container.html(template);
                this.afterRender();
            }.bind(this));
    }

    afterRender() {
    }
}
