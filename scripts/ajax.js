// $(function() {


$('#btnLoadData').click(function() {
    console.log("clicked");

    // url = file
    let jsonURL = "demo.json";

    $.ajax({
        url: jsonURL,
        dataType: "json",
        success: function(data) {
            //can log either the entire data or invoke specific properties data.zipCode...
            console.log(data.firstName);

            //loads first name into my fname box
            $("#noSpaces").val(data.firstName);
            console.log(data.language);

            $('input[type=checkbox]').each(function() {
                if (data.language === $(this).val()) {
                    $(this).prop('checked', true)
                    console.log($(this));
                }

            });
            //console.log (sList);

            $.each(data, function(key, val) {
                //step through results
                console.log(key, val);
                //get each data item
                //put it in the right place
                $(`#${key}`).val(val);

            });
        }
    });
});


