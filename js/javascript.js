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

    function Column(name) {
        var self = this;

        this.id = randomString();
        this.name = name;
        this.$element = createColumn();

        function createColumn() {
            var $column = $("<div>").addClass("column");
            var $columnTitle = $("<h2>").addClass("column-title").text(self.name);
            var $columnCardList = $("<ul>").addClass("column-card-list");
            var $columnDelete = $("<button>").addClass("btn-delete").text("x");
            var $columnAddCard = $("<button>").addClass("add-card").text("Add a card");

            $columnDelete.click(function() {
                self.removeColumn();
            });
            $columnAddCard.click(function() {
                self.addCard(new Card(prompt("Enter the name of the card")));
            });

            $column.append($columnTitle);
            $column.append($columnDelete);
            $column.append($columnAddCard);
            $column.append($columnCardList);

            return $column;
        }
    }

    Column.prototype = {
        addCard: function(card) {
            this.$element.children("ul").append(card.$element);
        },
        removeColumn: function() {
            this.$element.remove();
        }
    }

    function Card(description) {
        var self = this;
    
        this.id = randomString();
        this.description = description;
        this.$element = createCard();
    
        function createCard() {
            var $card = $("<li>").addClass("card");
            var $cardDescription = $("<p>").addClass("card-description").text(self.description);
            var $cardDelete = $("<button>").addClass("btn-delete").text("x");

            $cardDelete.click(function(){
                self.removeCard();
            });

            $card.append($cardDelete);
            $card.append($cardDescription);
            return $card;
        }
    }

    Card.prototype = {
        removeCard: function() {
            this.$element.remove();
        }
    }
    
    var board = {
        name: "Kanban Board",
        addColumn: function(column) {
            this.$element.append(column.$element);
            initSortable();
        },
        $element: $("#board .column-container")
    };

    $(".create-column").click(function(){
        var name = prompt("Enter a column name");
        var column = new Column(name);
        board.addColumn(column);
    });

    function initSortable() {
        $(".column-card-list").sortable({
            connectWith: ".column-card-list",
            placeholder: "card-placeholder"
        }).disableSelection();
    }

});
