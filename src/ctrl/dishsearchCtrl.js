class DishSearchCtrl {
    constructor(model, view) {
        view.el("#searchBtn").onclick = () => {
            const query = view.el("#dishQuery").value;
            const type = this.getSelectedValue(view.el("#dishType"));

            view.el("#dishItems").innerHTML = "";
            model.getAllDishes(type, query)
                .then(res => {
                    $app.loader(false);
                    const items = view.el("#dishItems");
                    console.log(items);
                    console.log(res);
                    items.innerHTML ="";
                    res.forEach(dish => {
                        const el = $app.mkDish(dish);
                        console.log(el);
                        items.appendChild(el);
                    });
                });
            $app.loader(true);
        };
    }

    getSelectedValue(sel) {
        var opt;
        for ( var i = 0, len = sel.options.length; i < len; i++ ) {
            opt = sel.options[i];
            if ( opt.selected === true ) {
                break;
            }
        }
        return opt.value;
    }
}
