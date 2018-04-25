$(function() {
    //function that create random string for unique id
    function randomString() {
        var chars = "0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ";
        var string = "";

        for (var i = 0; i < 10; i++) {
            string += chars[Math.floor(Math.random() * chars.length)];
        }
        return string;
    }
    //class Column
    function Column(name) {
        var self = this;

        this.id = randomString();
        this.name = name;
        this.$element = createColumn();
        //method that create basic structure for a column
        function createColumn() {
            var $column = $("<div>").addClass("column");
            var $columnTitle = $("<h2>").addClass("column-title").text(self.name);
            var $columnCardList = $("<ul>").addClass("column-card-list");
            var $columnDelete = $("<button>").addClass("column-btn-delete");
            var $columnAddCard = $("<button>").addClass("add-card").text("Add a card");
            var $columnDeleteSymbol = $("<span  class='far fa-times-circle' aria-hidden='true' aria-hidden='true'></span>");
            //event listeners
            $columnDelete.click(function() {
                self.removeColumn();
            });
            $columnDelete.append($columnDeleteSymbol);
            $columnAddCard.click(function(event) {
                self.addCard(new Card(prompt("Enter the name of the card")));
            });

            $column.append($columnTitle).append($columnDelete).append($columnAddCard).append($columnCardList);

            return $column;
        }
    }
    //class prototype
    Column.prototype = {
        addCard: function(card) {
            this.$element.children("ul").append(card.$element);
        },
        removeColumn: function() {
            this.$element.remove();
        }
    }
    //class Card
    function Card(description) {
        var self = this;
    
        this.id = randomString();
        this.description = description;
        this.$element = createCard();
        //method that create basic structure for a card
        function createCard() {
            var $card = $("<li>").addClass("card");
            var $cardDescription = $("<p>").addClass("card-description").text(self.description);
            var $cardDelete = $("<button>").addClass("card-btn-delete");
            var $cardDeleteSymbol = $("<span  class='far fa-times-circle' aria-hidden='true' aria-hidden='true'></span>");
            //event listeners
            $cardDelete.click(function(){
                self.removeCard();
            });

            $cardDelete.append($cardDeleteSymbol);
            $card.append($cardDelete).append($cardDescription);
            return $card;
        }
    }
    //class prototype
    Card.prototype = {
        removeCard: function() {
            this.$element.remove();
        }
    }
    //board object
    var board = {
        name: "Kanban Board",
        addColumn: function(column) {
            this.$element.append(column.$element);
            initSortable();
        },
        $element: $("#board .column-container")
    };
    //event listener
    $(".create-column").click(function(){
        var name = prompt("Enter a column name");
        var column = new Column(name);
        board.addColumn(column);
    });
    //function responsible for drag n drop
    function initSortable() {
        $(".column-card-list").sortable({
            connectWith: ".column-card-list",
            placeholder: "card-placeholder",
            dropOnEmpty: true
        }).disableSelection();
    }


    // CREATING COLUMNS
    var todoColumn = new Column("To do");
    var doingColumn = new Column("Doing");
    var doneColumn = new Column("Done");

    // ADDING COLUMNS TO THE BOARD
    board.addColumn(todoColumn);
    board.addColumn(doingColumn);
    board.addColumn(doneColumn);

    // CREATING CARDS
    var card1 = new Card("New task");
    var card2 = new Card("Create kanban boards");

    // ADDING CARDS TO COLUMNS
    todoColumn.addCard(card1);
    doingColumn.addCard(card2);
});
