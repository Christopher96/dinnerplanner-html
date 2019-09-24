class OverviewCtrl {
    constructor(model, view) {
        view.el(".value-num-guests").innerHTML = model.getNumberOfGuests();
        model.getFullMenu().forEach(dish => {
            const el = $app.mkDish(dish, true);
            view.el("#overviewDishes").appendChild(el);
        });
        view.el(".value-total-price").innerHTML = model.getTotalMenuPrice();

        view.el("#goBack").onclick = () => {
            $app.navigate("search");
        };
        view.el("#toPrintBtn").onclick = () => {
            $app.navigate("printout");
        };

    }
}
