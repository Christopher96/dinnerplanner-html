class PrintoutView {
    constructor(container, model) {
        this.el = (selector) => $app.el(selector, container);
        this.container = container;
        this.model = model;
    }

    // An example of creating HTML declaratively. Think about the pros and cons of this approach.
    render() {
        this.container.innerHTML = `
        <div id="overviewHeader">
            <span class="title">My Dinner: 3 People</span>
            <button id="goBack" class="btn btn-primary">Go back and edit dinner</button>
        </div>
        <hr/>
        <div id="printoutDishes">
        </div>
        `;

        this.model.getFullMenu().forEach(dish => {
            let dishTemplate = `
            <div class="row">
                <div class="col-md-2">
                    <img src="${dish.image}" alt="">
                </div>
                <div class="col-md-4">
                    <p class="title">${dish.title}</p>
                    <span class="information">${dish.instructions}</span>
                </div>
                <div class="col-md-6">
                    <p class="title">Preparation</p>
                    <span>Lorem laborum cupiditate odio deserunt natus. Ipsam ipsum numquam repudiandae dolorum maiores nam Fugiat beatae obcaecati voluptates recusandae harum? Unde quod nisi reiciendis veniam saepe. Temporibus repellendus quod porro deleniti</span>
                </div>
            </div>
            `;
            this.el("#printoutDishes").insertAdjacentHTML("beforeend", dishTemplate);
        });

        this.afterRender();
    }

    afterRender() {
        new PrintOutCtrl(this.model, this);
    }
}
