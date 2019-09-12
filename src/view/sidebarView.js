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
        <button class="btn btn-primary">
            Confirm Dinner
        </button>
        `;
        this.container.html(template);
        this.afterRender();
    }

    afterRender() {
        $("#numberPeople").val(this.model.getNumberOfGuests())
            .on("change")(() => {

            });
        this.model.getFullMenu().forEach(dish => {
            let template = `
            <tr>
                <td>${dish.title}</td>
                <td>${dish.price}</td>
            </tr>
            `;
            $("#dishTable tbody").append(template);
        });


    }
}
