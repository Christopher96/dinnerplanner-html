class OverviewView {
    constructor(container, model) {
        this.el = (selector) => $app.el(selector, container);
        this.container = container;
        this.model = model;
    }

    // An example of creating HTML procedurally. Think about the pros and cons of this approach.
    render() {
        this.container.innerHTML = `
        <div id="overviewHeader">
            <span class="title">My Dinner: <span class="value-num-guests"></span> People</span>
            <button id="goBack" class="btn btn-primary">Go back and edit dinner</button>
        </div>
        <hr/>
        <div id="overviewDishes">
            <div class="total">
                <span>
                    <b>Total: </b>SEK <span class="value-total-price"></span>
                </span>
            </div>
        </div>
        <hr/>
        <div id="overviewPrint">
            <button id="toPrintBtn" class="btn btn-primary">
                Print Full Recipe
            </button>
        </div>
        `;
        this.afterRender();
    }

    afterRender() {
        new OverviewCtrl(this.model, this);
    }
}
