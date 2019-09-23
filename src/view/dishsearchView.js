class DishSearchView {
    constructor(container, model) {
        this.el = (selector) => $app.el(selector, container);
        this.container = container;
        this.model = model;
    }

    // An example of creating HTML procedurally. Think about the pros and cons of this approach.
    render() {
        this.container.innerHTML = `
        <p class="title">FIND A DISH</p>
        <div class="input-group">
            <input id="dishQuery" class="form-control" type="text">
            <select id="dishType" class="form-control custom-select">
                <option value="">Choose...</option>
                <option value="starter">Starter</option>
                <option value="main dish">Main dish</option>
                <option value="dessert">Dessert</option>
            </select>
            <div class="input-group-append">
                <button id="searchBtn" class="btn btn-primary">Search</button>
            </div>
        </div>
        </div>
        <div id="dishItems"></div>
        `;
        this.afterRender();
    }

    afterRender() {
        new DishSearchCtrl(this.model, this);
    }

}
