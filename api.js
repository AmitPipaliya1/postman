console.log("hello");

$(document).ready(function (){


    $("#form").click(function(){

      // console.log($("#post").val());
        $.ajax({
            type: $("#option").val(),
            dataType:"json",
            url: $("#post").val(),
             data: {
               email:$('#exampleInputEmail1').val(),
               password : $('#exampleInputPassword1').val()
            },
            success: function (data, status, xhr) {
              console.log(data);
              $("#response").append(`<P>${JSON.stringify(data,null,2)}</p>`)
            }
          });
    })
}) ;
// hello api bgfxdhdfhdj