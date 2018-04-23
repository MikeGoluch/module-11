$(document).ready(function() {
    console.log('DOM loaded - you can have fun');
    function Button(text) {
        this.text = text || "Hello";
    }
    
    Button.prototype = {
        create: function() {
            var self = this;
            this.$element = $("<button>");
            this.$element.text(this.text);
            this.$element.click(function() {
                alert(self.text);
            });
            $("body").append(this.$element);
        }
    }
    
    var btn1 = new Button("Greetings!");
    
    btn1.create();
});

