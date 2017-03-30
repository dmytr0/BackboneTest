import Cube from './Cube/Cube.Module';

export default Backbone.Collection.extend({
    url: 'http://81.162.233.67/oil/',
    model: Cube.Model,

    parse: function (data) {
        return data.content;
    }

});