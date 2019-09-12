class DishDetailsView {
    constructor(container, model, dish) {
        this.container = container;
        this.model = model;
        this.dish = dish;
    }

    // An example of creating HTML procedurally. Think about the pros and cons of this approach.
    render() {
        let template = `
        <div class="row">
            <div id="dishInformation" class="col-md-6">
                <p class="title"></p>
                <img src="#" alt="">
                <p class="instructions"></p>
                <button class="btn btn-primary">Back to search</button>
            </div>
            <div class="col-md-6">
                <span class="title">Ingredients for 3 people</span>
                <table id="ingredientTable" class="table">
                    <tbody>
                    </tbody>
                </table>
                <hr/>
                <button class="btn btn-primary">Add to menu</button>
                <span class="total">Sek 77.20</span>
            </div>
        </div>`;
        this.container.html(template);
        this.afterRender();
    }

    afterRender() {
        this.model.getDish(this.dish)
            .then(dish => {
                $("#loader").css("visibility", "hidden");
                $("#dishInformation .title").text(dish.title);
                $("#dishInformation img").attr("src", dish.image);
                $("#dishInformation .instructions").html(dish.instructions);
                $("#ingredientTable tbody").html("");
                dish.extendedIngredients.forEach(ing => {
                    let row = $("<tr><td>"+ing.amount+" "+ing.unit+"</td>"+
                        "<td>"+ing.name+"</td>"+
                        "<td>SEK</td>"+
                        "<td>0.00</td></tr>");
                    $("#ingredientTable tbody").append(row);
                })
            });
        $("#loader").css("visibility", "visible");
    }
}
