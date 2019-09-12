class PrintoutView {
    constructor(container, model) {
        this.container = $(container);
        this.model = model;
        this.startBtn = null;
    }

    // An example of creating HTML declaratively. Think about the pros and cons of this approach.
    render() {
        let template = `
        <div id="overviewHeader">
            <span class="title">My Dinner: 3 People</span>
            <button id="goBack" class="btn btn-primary">Go back and edit dinner</button>
        </div>
        <hr/>
        <div id="printoutDishes">
        </div>
        `;
        this.container.html(template);
        this.afterRender();
    }

    afterRender() {
        this.model.getFullMenu().forEach(dish => {
            console.log(dish);
            let dishTemplate = `
            <div class="row">
                <div class="col-md-2">
                    <img src="https://spoonacular.com/recipeImages/${dish.image}" alt="">
                </div>
                <div class="col-md-4">
                    <p class="title">${dish.name}</p>
                    <span class="information">${dish.instructions}</span>
                </div>
                <div class="col-md-6">
                    <p class="title">Preparation</p>
                    <span>${dish.description}</span>
                </div>
            </div>
            `;
            $("#printoutDishes").append(dishTemplate);
        });
        $("#goBack").click(() => {
            new SearchView(this.container, this.model).render();
        });
    }
}
