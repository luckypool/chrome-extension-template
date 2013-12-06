function Option(){
    this.initialize.apply(this, arguments);
}
Option.prototype = {
    initialize: function() {
        console.log('option initialized');
    }
};

var popup = new Option();
