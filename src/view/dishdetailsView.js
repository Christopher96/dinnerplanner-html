class DishDetailsView {
    constructor(container, model) {
        this.el = (selector) => $app.el(selector, container);
        this.container = container;
        this.model = model;
    }

    // An example of creating HTML procedurally. Think about the pros and cons of this approach.
    render(dish) {
        this.dish = dish;

        this.container.innerHTML = `
        <div class="row">
            <div id="dishInformation" class="col-md-6">
                <p class="title"></p>
                <img src="#" alt="">
                <p class="title">Instructions</p>
                <p class="instructions"></p>
                <button id="goBack" class="btn btn-primary">Back to search</button>
            </div>
            <div class="col-md-6">
                <span class="title">Ingredients for <span class="people"></span> people</span>
                <table id="ingredientTable" class="table">
                    <tbody>
                    </tbody>
                </table>
                <hr/>
                <button id="menuAdd" class="btn btn-primary">Add to menu</button>
                <span class="added"> Added &#10004;</span>
                <span class="total">Sek 77.20</span>
            </div>
        </div>`;

        this.model.getDish(dish)
            .then(dish => {
                $app.loader(false);
                this.el("#dishInformation .title").innerHTML = dish.title;
                this.el("#dishInformation img").setAttribute("src", dish.image);
                this.el("#dishInformation .instructions").innerHTML = dish.instructions;
                this.el("#ingredientTable tbody").innerHTML = "";
                dish.extendedIngredients.forEach(ing => {
                    let row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${ing.amount} ${ing.unit}</td>
                        <td>${ing.name}</td>
                        <td>SEK</td>
                        <td>0.00</td>
                    `;
                    this.el("#ingredientTable tbody").appendChild(row);
                })
            });
        $app.loader(true);
        
        this.el(".people").innerHTML = this.model.getNumberOfGuests();

        this.afterRender();
    }

    afterRender() {
        console.log(this.dish);
        new DishDetailsCtrl(this.model, this, this.dish);
        this.model.addObserver(this);
    }

    update(details) {
        switch(details.event) {
            case "guests": this.el(".people").innerHTML = details.data;
        }
    }
}
