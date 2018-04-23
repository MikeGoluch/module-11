$(function() {

    function randomString() {
        var chars = "0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ";
        var string = "";

        for (var i = 0; i < 10; i++) {
            string += chars[Math.floor(Math.random() * chars.length)];
            console.log("random chars", string);
        }
        return string;
    }
console.log(randomString());

});
