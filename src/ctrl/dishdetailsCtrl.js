class DishDetailsCtrl {
    constructor(model, view, dish) {
        view.el("#goBack").onclick = () => {
            $app.navigate("search");
        };

        let added = false;
        const add = view.el("#menuAdd")
        add.onclick = () => {
            if(added) return;
            added = true;
            model.addDishToMenu(dish);
            view.el(".added").style.visibility = "visible";
            add.setAttribute("disabled", true);
        }
    }
}
