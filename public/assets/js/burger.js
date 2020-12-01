$(function () {

    //============= CREATE BURGER
    $(".create-form"). on("submit", function(event){
        event.preventDefault();

        let newBurger = {
            burger_name: $("#bur").val().trim()
        };

        // SEND POST REQUEST
        $.ajax("/api/burger", {
            type:"POST",
            data: newBurger
        }).then(
            function(){
                console.log("created new burger");
                //reloads the page and gets updated list
                location.reload();
            }
        );
    });

        //============= UPDATES BURGER DEVOURED
    $(".btn-burger").on("click", function(){
        var chosenID = {
           id: $(this).data("id")
        }
        $.ajax("/api/burger", {
            type:"PUT",
            data: chosenID
        }).then(
            function(){
                console.log("devoured is true")
                location.reload
            }
        );
        window.location.reload(1)
    });
});