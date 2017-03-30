import emptyImg from '../../../imgbank/Image/nopicture.svg';

export default Backbone.Model.extend({
    defaults: {
        amount: 0.00,
        image: "",
        name: "Unknown oil",
        url: "#"
    },
    parse: function (resp) {
        if(resp.image === "/imgbank/Image/no_picture.gif"){
            resp.image = emptyImg;
        }
        return resp;
    }

});