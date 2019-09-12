class OverviewView {
    constructor(container, model) {
        this.container = $(container);
        this.model = model;
    }

    // An example of creating HTML procedurally. Think about the pros and cons of this approach.
    render() {
        let template = `
        <div id="overviewHeader">
            <span class="title">My Dinner: <span class="value-num-guests"></span>People</span>
            <button class="btn btn-primary">Go back and edit dinner</button>
        </div>
        <hr/>
        <div id="overviewDishes"></div>
        <hr/>
        <div id="toPrintBtn">
            <button class="btn btn-primary">
                Print Full Recipe
            </button>
        </div>
        `;
        this.container.html(template);
        this.afterRender();
    }

    afterRender() {
        $(".value-num-guests").text(this.model.getNumberOfGuests());
        this.model.getFullMenu().forEach(dish => {
            this.addDish(dish);
        })
    }

    addDish(dish) {
        const link = $("<a/>").on("click", () => {
            new DishDetailsView(this.container, this.model, dish.id).render();
        }).appendTo("#overviewDishes");

        const dishEl = $("<div/>", {
            class: "dish"
        }).appendTo(link);

        $("<img/>", {
            src: "https://spoonacular.com/recipeImages/" + dish.image
        }).appendTo(dishEl);

        $("<p/>", {
            text: dish.name
        }).appendTo(dishEl);
    }
}
