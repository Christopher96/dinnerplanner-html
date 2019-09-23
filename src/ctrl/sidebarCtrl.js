class SideBarCtrl {
    constructor(model, view) {
        const nrPeople = view.el(".input-num-guests");
        nrPeople.oninput = () => {
            let val = nrPeople.value;
            model.setNumberOfGuests(val);
        };
        nrPeople.value = model.getNumberOfGuests();

        view.el(".value-total-price").innerHTML = model.getTotalMenuPrice();

        view.el("#confirmDinner").onclick = () => {
            $app.navigate("overview");
        };
    }
}
