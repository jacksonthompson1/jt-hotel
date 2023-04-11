let boardNames = [
    ["Burton", ["Flat top", "Directional Flat Top", "Camber", "PurePop"]],
    ["Arbor", ["Flat top", "Directional Flat Top", "Camber", "PurePop"]],
    ["Capita", ["Flat top", "Directional Flat Top", "Camber", "PurePop"]],
    
];

//when user selects type of board...load in brands and types of boards from array
$("#boardKind").on("change", function(e) {
    //enables the board dropdown
    $("#boardName").prop("disabled", false);

    let inputVal = this.value;

    //loop though array of board types
    $.each(boardNames, function(key, value) {
        //match board type to user selected
        if (inputVal === value[0]) {
            $.each(value, function(nestKey, nestValue) {

                switch (nestKey) {
                    case 0:
                        $("label[for=boardName]").text(nestValue);
                        $("#boardName").empty();
                        $("#boardName").append(
                            $("<option>").text(`Select a ${nestValue} type`)
                        );
                        break;
                    case 1:
                        $.each(nestValue, function(nameKey, nameValue) {
                            console.log(nameKey, nameValue);

                            $("#boardName").append(
                                $("<option>").val(nameValue).text(nameValue)
                            );
                        });
                        break;
                }
            });
        }
    });
});





