class SidebarView {
    constructor(container, model) {
        this.el = (selector) => $app.el(selector, container);
        this.container = container;
        this.model = model;
    }

    // An example of creating HTML procedurally. Think about the pros and cons of this approach.
    render() {
        this.container.innerHTML = `
        <p class="title">My dinner - <span class="value-num-guests"></span> Guests</p>
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text">People</span>
            </div>
            <input class="input-num-guests form-control" type="number">
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
        `;
        this.reloadMenu();
        this.el(".input-num-guests").value = this.model.getNumberOfGuests();
        this.el(".value-num-guests").innerHTML = this.model.getNumberOfGuests();
        this.el(".value-total-price").innerHTML = this.model.getTotalMenuPrice();

        this.afterRender();
    }

    afterRender() {
        new SideBarCtrl(this.model, this);
        this.model.addObserver(this);
    }

    addToMenu(dish) {
        let price = this.model.getDishPrice(dish);
        let dishEl = $app.mk("tr", {
            "data-id": dish.id
        });
        dishEl.innerHTML = `
            <td class='value-main-course-name'>${dish.title}</td>
            <td>SEK ${price}</td>
            <td><button data-id="${dish.id} "class="remove-dish btn btn-primary">&#10060;</button></td>
        `;

        let btn = dishEl.querySelector(".remove-dish");
        btn.onclick = () => {
            this.model.removeDishFromMenu(btn.dataset.id);
            this.el(`#dishTable tbody tr[data-id='${dish.id}']`).remove();
        }
        this.el("#dishTable tbody").append(dishEl);
    }

    reloadMenu() {
        this.el("#dishTable tbody").innerHTML = "";
        this.model.getFullMenu().forEach(dish => {
            this.addToMenu(dish);
        });
    }

    removeDish(dish) {
        this.model.removeDishFromMenu(dish);
    }

    update(details) {
        switch(details.event) {
            case "guests": 
                this.el(".input-num-guests").value = details.data;
                this.el(".value-num-guests").innerHTML = details.data;
                this.el(".value-total-price").innerHTML = this.model.getTotalMenuPrice();
                break;
            case "menu":
                this.reloadMenu();
                break;
        }
    }
}
