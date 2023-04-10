let petNames = [
    ["Dog", ["German Shepherd", "Bulldog", "DOGE DOG", "Husky"]],
    ["Cat", ["Siamese", "Persian", "Shorthair", "Calico"]],
    ["Horse", ["Friesian", "Mustang", "American Quarter Horse"]],
    ["Snake", ["Python", "Anaconda", "Rattlesnake"]],
    ["Rabbit", ["Flemish", "Dwarf Hotot"]],
    ["Fish", ["Bass", "Catfish", "Betta"]],
    ["Turtle", ["Western Painted", "Tortoise"]],
    ["Bird", ["Parakeet", "Crow"]],
    ["Camel", ["Dromedary", "Bactrian"]],
];

//when user selects type of pet...load in breeds of pets from array
$("#petKind").on("change", function(e) {
    //enables the pet dropdown
    $("#petName").prop("disabled", false);

    let inputVal = this.value;

    //loop though array of pet types
    $.each(petNames, function(key, value) {
        //match pet kind to user selected
        if (inputVal === value[0]) {
            $.each(value, function(nestKey, nestValue) {

                switch (nestKey) {
                    case 0:
                        $("label[for=petName]").text(nestValue);
                        $("#petName").empty();
                        $("#petName").append(
                            $("<option>").text(`Select a ${nestValue} breed`)
                        );
                        break;
                    case 1:
                        $.each(nestValue, function(nameKey, nameValue) {
                            console.log(nameKey, nameValue);

                            $("#petName").append(
                                $("<option>").val(nameValue).text(nameValue)
                            );
                        });
                        break;
                }
            });
        }
    });
});





