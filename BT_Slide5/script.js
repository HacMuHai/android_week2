const urlBacon = "https://retoolapi.dev/8M87SL/data";
function getData(){
    $.ajax({method: "GET", url: urlBacon, dataType: "json"
    })
    .done(function (data) {
        console.log(data);
    })
    .fail(function () {
        alert("no good");
    });
    }


getData()
