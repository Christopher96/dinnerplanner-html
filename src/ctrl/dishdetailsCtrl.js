class DishDetailsCtrl {
    constructor(model, view, dish) {
        view.el("#goBack").onclick = () => {
            $app.navigate("search");
        };
    }
}
