$(document).ready(function(){
    console.log("this is valiudate");
    $("#submit-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            emailAddress:{
                required:true,
                email:true
            },
            pname:{
                required:true,
                minlength:4
            },
            mobile:{
                required:true,
                number:true
            }
         
        }
    })
})

