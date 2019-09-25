class HomeView {
    constructor(container, model) {
        this.el = (selector) => $app.el(selector, container);
        this.container = container;
        this.model = model;
    }

    // An example of creating HTML declaratively. Think about the pros and cons of this approach.
    render() {
        this.container.innerHTML = `
            <div id="startContainer">
                <div id="startTxt">
                    <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
Dolor officia adipisci aperiam labore et iste Fugit cupiditate voluptatem provident nesciunt placeat Unde reiciendis deserunt a magni exercitationem fugit aliquam Id quos dolorem magnam fugiat sequi. Dolorum accusantium provident</span><br/>
                    <button id="startBtn" class="btn btn-primary">Start</button>
                </div>
            </div>
        `;
        this.startBtn = this.el("#startBtn");
        this.afterRender();
    }

    afterRender() {
        new HomeCtrl(this.model, this);
    }
}
