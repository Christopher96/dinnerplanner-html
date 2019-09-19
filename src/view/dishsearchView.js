class DishSearchView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
    }

    // An example of creating HTML procedurally. Think about the pros and cons of this approach.
    render() {
        let template = `
        <p class="title">FIND A DISH</p>
        <div class="input-group">
            <input id="dishQuery" class="form-control" type="text">
            <select id="dishType" class="form-control custom-select">
                <option value="" selected>Choose...</option>
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
        this.container.html(template);
        this.afterRender();
    }

    afterRender() {
        $("#searchBtn").click(() => {
            const query = $("#dishQuery").val();
            const type = $("#dishType option:selected").val();

            $("#dishItems").empty();
            this.model.getAllDishes(type, query)
                .then(res => {
                    $("#loader").css("visibility", "hidden");
                    $("#searchResults").html("");
                    res.forEach(dish => this.addDish(dish));
                });
            $("#loader").css("visibility", "visible");

        });
    }

    addDish(dish) {
        const link = $("<a/>").on("click", () => {
            new DishDetailsView(this.container, this.model, dish.id).render();
        }).appendTo("#dishItems");

        const dishEl = $("<div/>", {
            class: "dish"
        }).appendTo(link);

        $("<img/>", {
            src: "https://spoonacular.com/recipeImages/" + dish.image
        }).appendTo(dishEl);

        $("<p/>", {
            text: dish.title.replace("#WeekdaySupper", "").replace("#ChooseDreams", "")
        }).appendTo(dishEl);
    }
}
