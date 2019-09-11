class DishSearchView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
    }

    // An example of creating HTML procedurally. Think about the pros and cons of this approach.
    render() {
        let content = fetch("src/view/dishsearch.html")
            .then(res => res.text())
            .then(function(template) {
                this.container.html(template);
                this.afterRender();
            }.bind(this));
    }

    afterRender() {
        $("#searchBtn").click(() => {
            const query = $("#dishQuery").val();
            const type = $("#dishType option:selected").val();


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
        }).appendTo("#searchResults");

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
