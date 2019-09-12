class SideBarView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
    }

    // An example of creating HTML procedurally. Think about the pros and cons of this approach.
    render() {
        let template = `
        <p class="title">My dinner</p>
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text">People</span>
            </div>
            <input id="numberPeople" class="form-control" type="number">
        </div>
        <table id="dishTable" class="table">
            <thead>
                <tr>
                    <th scope="col">Dish Name</th>
                    <th scope="col">Cost</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        <div class="total">
            <b>Total: </b><span>SEK </span><span class="value-total-price"></span>
        </div>
        <button id="confirmDinner" class="btn btn-primary">
            Confirm Dinner
        </button>
        <span class="value-num-guests">
        `;
        this.container.html(template);
        this.afterRender();
    }

    afterRender() {
        let nrPeople = $("#numberPeople");
        nrPeople.val(this.model.getNumberOfGuests());
        $(".value-num-guests").html(this.model.getNumberOfGuests());
        nrPeople.on("change", () => {
            let val = nrPeople.val();
            this.model.setNumberOfGuests(val);
        });
        let total = 0;
        this.model.getFullMenu().forEach(dish => {
            let price = this.model.getDishPrice(dish);
            let template = `
            <tr>
                <td class='value-main-course-name'>${dish.name}</td>
                <td>SEK ${price}</td>
            </tr>
            `;
            $("#dishTable tbody").append(template);
        });
        $(".value-total-price").text(this.model.getTotalMenuPrice());
        $("#confirmDinner").click(() => {
        });
    }
}
