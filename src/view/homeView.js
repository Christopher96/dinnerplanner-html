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
                    <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</span>
                    <button id="startBtn" class="btn btn-primary"></button>
                </div>
            </div>
        `;
        this.afterRender();
    }

    afterRender() {
        new HomeCtrl(this.model, this);
    }
}
