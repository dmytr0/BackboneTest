let template = require('html!./Cube.template.html');

export default Backbone.View.extend({
    template: _.template(template),
    events: {
        'click li': 'divHandler'
    },
    initialize() {
        this.listenTo(this.model, 'change', this.render);
    },
    className: 'cube',
    render(){
        let html = this.template(this.model.toJSON());
        this.$el.html(html);
        return this;
    },
    divHandler(e) {
        this.$el.slideToggle();
    }
});