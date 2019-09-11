class DishDetailsView {
    constructor(container, model, dish) {
        this.container = container;
        this.model = model;
        this.dish = dish;
    }

    // An example of creating HTML procedurally. Think about the pros and cons of this approach.
    render() {
        let content = fetch("src/view/dishdetails.html")
            .then(res => res.text())
            .then(function(template) {
                this.container.html(template);
                this.afterRender();
            }.bind(this));
    }

    afterRender() {
        this.model.getDish(this.dish)
            .then(dish => {
                $("#loader").css("visibility", "hidden");
                $("#dishInformation .title").text(dish.title);
                $("#dishInformation img").attr("src", dish.image);
                $("#dishInformation .instructions").text(dish.instructions);
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
