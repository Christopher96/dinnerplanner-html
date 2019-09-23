class SideBarCtrl {
    constructor(model, view) {
        const nrPeople = view.el("#numberPeople");
        nrPeople.onchange = () => {
            let val = nrPeople.val();
            model.setNumberOfGuests(val);
        };
        nrPeople.value = model.getNumberOfGuests();

        view.el(".value-num-guests").innerHTML = model.getNumberOfGuests();
        view.el(".value-total-price").innerHTML = model.getTotalMenuPrice();

        view.el("#confirmDinner").onclick = () => {
            $app.navigate("overview");
        };
    }
}
