class SingleDishView {
    constructor(container, model, dish) {
        this.el = (selector) => $app.el(selector, container);
        this.container = container;
        this.model = model;
        this.dish = dish;
    }

    // An example of creating HTML procedurally. Think about the pros and cons of this approach.
    render(expanded) {
        let title = this.dish.title.replace("#WeekdaySupper", "").replace("#ChooseDreams", "");
        let image = (expanded) ? this.dish.image : "https://spoonacular.com/recipeImages/" + this.dish.image;

        let template = `
            <img src="${image}" alt="">
            <p class="value-main-course-name">${title}</p>
        `;

        if(expanded) {
            template += `
            <span class="price">${this.model.getDishPrice(this.dish)} SEK</span>
            `;
        }

        this.container.innerHTML = template;

        this.afterRender();
    }

    afterRender() {
        new SingleDishCtrl(this.model, this, this.dish);
    }
}
