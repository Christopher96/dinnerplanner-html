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
            this.model.addObserver(page.view);
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

    mkDish(dish) {
        const img = this.mk("img", {
            src: "https://spoonacular.com/recipeImages/" + dish.image
        });

        const p = this.mk("p");

        p.innerHTML = dish.title.replace("#WeekdaySupper", "").replace("#ChooseDreams", "");

        const dishEl = this.mk("div", {
            class: "dish"
        });

        dishEl.append(img, p);

        const a = this.mk("a");
            
        a.append(dishEl);
        a.onclick = () => {
            this.navigate("details", dish.id);
        }

        return a;
    }

    navigate(path, params) {
        this.pages.find(view => view.path === path).view.render(params);
    }

}


let $app = new App();

window.onload = function () {
    $app.el("header").onclick = () => {
        $app.navigate('search');
    };
    $app.navigate("search");
};
