class SearchView {
    constructor(container, model) {
        this.el = (selector) => $app.el(selector, container);
        this.container = container;
        this.model = model;
    }

    // An example of creating HTML declaratively. Think about the pros and cons of this approach.
    render() {
        this.container.innerHTML = "";

        const row = $app.mk("div", {
            class: "row"
        });

        const sideBarView = $app.mk("div", {
            id: "sideBarView",
            class: "col-md-4"
        });

        new SidebarView(sideBarView, this.model).render();

        const dishSearchView = $app.mk("div", {
            id: "dishSearchView",
            class: "col-md-8"
        });

        new DishSearchView(dishSearchView, this.model).render();

        row.append(sideBarView, dishSearchView);
        this.container.append(row);

        this.afterRender();
    }

    afterRender() {
        new SearchCtrl(this.model, this);
    }
}
