class SideBarCtrl {
    constructor(model, view) {

        view.el(".input-num-guests").oninput = () => {
            let val = view.el(".input-num-guests").value;
            model.setNumberOfGuests(val);
        };

        view.el("#confirmDinner").onclick = () => {
            $app.navigate("overview");
        };
    }
}
