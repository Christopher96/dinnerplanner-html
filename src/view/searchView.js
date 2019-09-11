class SearchView {
    constructor(container, model) {
        this.container = $(container);
        this.model = model;
        this.startBtn = null;
    }

    // An example of creating HTML declaratively. Think about the pros and cons of this approach.
    render() {

        const loader = $("<div/>", {
            id: "loader"
        }).appendTo(this.container);

        const spinner = $("<div/>", {
            class: "spinner spinner-border",
            role: "status"
        }).appendTo(loader);

        const srtext = $("<span/>", {
            class: "sr-only",
            text: "Loading ..."
        }).appendTo(spinner);

        const row = $("<div/>", {
            class: "row"
        }).appendTo(this.container);

        const sideBarView = $("<div/>", {
            id: "sideBarView",
            class: "col-md-4"
        }).appendTo(row);
        
        new SideBarView(sideBarView, this.model).render();

        const dishSearchView = $("<div/>", {
            id: "dishSearchView",
            class: "col-md-8"
        }).appendTo(row);

        new DishSearchView(dishSearchView, this.model).render();
    }

    afterRender() {
    }
}
