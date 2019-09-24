class App {

    constructor() {
        this.model = new DinnerModel();
        this.container = document.getElementsByClassName("page-content")[0];

        this.pages = [
            { cls: SearchView, path: 'search' },
            { cls: PrintoutView, path: 'printout' },
            { cls: OverviewView, path: 'overview' },
            { cls: HomeView, path: 'home' },
            { cls: DishDetailsView, path: 'details' },
        ];

        this.pages.forEach(page => {
            page.view = new page.cls(this.container, this.model);
        });

    }

    el(selector, target) {
        if(target) {
            return target.querySelector(selector);
        }
        return document.querySelector(selector);
    }

    loader(show) {
        this.el("#loader").style.visibility = show ? "visible" : "hidden";
    }

    mk(tag, attrs) {
        const el = document.createElement(tag);
        if(attrs) {
            Object.keys(attrs).forEach((name) => el.setAttribute(name, attrs[name]));
        }
        return el;
    }

    mkDish(dish, expanded) {
        const dishEl = this.mk("div", {
            class: "dish"
        });
        new SingleDishView(dishEl, this.model, dish).render(expanded);
        return dishEl;
    }

    navigate(path, params) {
        this.model.removeAllObservers();
        const view = this.pages.find(view => view.path === path).view;
        view.render(params);

        window.localStorage.setItem("page", path);
        window.localStorage.setItem("params", params);
    }
}


let $app = new App();

window.onload = function () {
    $app.el("header").onclick = () => {
        $app.navigate("search");
    };

    let page = window.localStorage.getItem("page");
    let params = window.localStorage.getItem("params");

    if(!page) {
        page = "search"
    }
    $app.navigate(page, params);
    $app.model.loadState();
};
