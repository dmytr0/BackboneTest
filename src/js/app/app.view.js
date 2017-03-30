import Cubes from '../Cubes/Cubes.Module';

let collectionMain = new Cubes.Collection();
export default Backbone.View.extend({
    initialize() {
        this.listenTo(collectionMain, 'reset', this.render);

        collectionMain.fetch({reset: true});
       },

    someFunc: function () {
       console.log("some func");
       console.log(this);

    },

    render(){
        console.log("app main rendering...");

        $('#app').empty();
        let view = new Cubes.View({ collection: collectionMain });
        let html = view.render().el;
        $('#app').append(html);

        return this;
    }

});

