class HomeView {
    constructor(container) {
        this.container = container;
        this.startBtn = null;
    }

    // An example of creating HTML declaratively. Think about the pros and cons of this approach.
    render() {
        let startContainer = $("<div/>").attr("id", "startContainer");
        let startTxt = $("<div/>").attr("id", "startTxt");
        let span = $("<span/>");
        span.html("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"+
            "tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At"+
            "vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,"+
            "no sea takimata sanctus est Lorem ipsum dolor sit amet.");
        let btn = $("<button/>", {
            id: "startBtn",
            class: "btn btn-primary",
            text: "Create new dinner",
            click: () => {
                new SearchView(this.container).render();
            }
        });
        span.append(btn);
        startTxt.append(span);
        startContainer.append(startTxt);
        let container = $(this.container);
        container.html(startContainer);

        this.afterRender();
    }

    afterRender() {
    }
}
