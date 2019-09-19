class App {

    constructor() {
        const model = new DinnerModel();
        const container = document.getElementsByClassName("page-content")[0];

        this.views = [
            { cls: SearchView, path: 'search' },
            { cls: PrintoutView, path: 'printout' },
            { cls: OverviewView, path: 'overview' },
            { cls: HomeView, path: 'home' },
        ];

        this.views.forEach(view => {
            view.obj = new view.cls(container, model, this);
        });


        this.el("header").onclick = () => {
            this.navigate('search');
        };
    }

    el(selector, container) {
        if(container) {
            return container.querySelector(selector);
        }
        return document.querySelector(selector);
    }

    navigate(path) {
        this.views.find(view => view.path === path).obj.render();
    }
}


window.onload = function () {
    const app = new App();
};
