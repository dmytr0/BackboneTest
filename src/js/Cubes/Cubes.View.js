import Cubes from './Cube/Cube.Module';

export default Backbone.View.extend({
    className: 'cubes',

    render: function() {
        this.$el.empty();
        this.collection.each(this.addOne, this);
        return this;
    },
    addOne: function(cube) {
        var cube = new Cubes.View ({ model: cube });
        let html = cube.render().el;
        this.$el.append( html );
    }
});