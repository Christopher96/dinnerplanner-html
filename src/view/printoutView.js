class PrintoutView {
    constructor(container) {
        this.container = $(container);
        this.startBtn = null;
    }

    // An example of creating HTML declaratively. Think about the pros and cons of this approach.
    render() {
        let template = `
        <div id="overviewHeader">
            <span class="title">My Dinner: 3 People</span>
            <button class="btn btn-primary">Go back and edit dinner</button>
        </div>
        <hr/>
        <div id="printoutDishes" class="row">
            <div class="col-md-2">
                <img src="#" alt="">
            </div>
            <div class="col-md-4">
                <p class="title">Lasange</p>
                <span class="information">
                    Adipisicing sed repellat vel atque inventore! Id ipsum debitis omnis ipsa et Magni doloribus omnis totam ducimus natus. Optio repudiandae dolores corporis eveniet et. Deleniti nisi esse culpa libero sapiente?
                </span>
            </div>
            <div class="col-md-6">
                <p class="title">Preparation</p>
                <span>
                        Ipsum soluta praesentium magni animi quae Obcaecati repudiandae voluptatem consequuntur perspiciatis necessitatibus omnis Unde aspernatur dignissimos quibusdam exercitationem repellat Repudiandae quaerat repudiandae quibusdam laudantium adipisci. Nesciunt aut quo sed quo
                            Sit natus placeat animi deserunt sunt voluptatibus Praesentium corrupti adipisci exercitationem recusandae quo. Consectetur expedita quaerat dolore voluptate ullam? Veniam omnis hic non beatae dolore Nobis libero perferendis perferendis cum?
                </span>
            </div>
        </div>
        `;
    }

    afterRender() {
    }
}
