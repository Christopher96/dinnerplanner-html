class HomeCtrl {
    constructor(model, view) {
        view.startBtn.onclick = () => {
            $app.navigate("search");
        }
    }
}
