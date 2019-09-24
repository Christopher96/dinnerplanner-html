class SingleDishCtrl {
    constructor(model, view, dish) {
        view.container.onclick = () => {
            $app.navigate("details", dish.id);
        }
    }
}
