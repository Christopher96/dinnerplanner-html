class PrintOutCtrl {
    constructor(model, view) {
        view.el("#goBack").onclick = () => {
            $app.navigate("search");
        };
    }
}
