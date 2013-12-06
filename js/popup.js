function Popup(){
    this.initialize.apply(this, arguments);
}
Popup.prototype = {
    initialize: function() {
        console.log('popup initialized');
    }
};

var popup = new Popup();
