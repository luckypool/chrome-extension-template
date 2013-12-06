function Background(){
    this.initialize.apply(this, arguments);
}
Background.prototype = {
    initialize: function() {
        console.log('background initialized');
        var a = $.get('http://www.google.com');
        console.log(a);
    }
};

var bg = new Background();
