class SidebarView {
    constructor(container, model) {
        this.el = (selector) => $app.el(selector, container);
        this.container = container;
        this.model = model;
        model.addObserver(this);
    }

    // An example of creating HTML procedurally. Think about the pros and cons of this approach.
    render() {
        this.container.innerHTML = `
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
        this.model.getFullMenu().forEach(dish => {
            let price = this.model.getDishPrice(dish);
            let template = `
            <tr>
                <td class='value-main-course-name'>${dish.name}</td>
                <td>SEK ${price}</td>
            </tr>
            `;
            this.el("#dishTable tbody").insertAdjacentHTML("beforeend", template);
        });
        this.afterRender();
    }

    afterRender() {
        new SideBarCtrl(this.model, this);
    }

    update(model, details) {

    }
}
