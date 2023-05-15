
$(document).ready(function(){
    $("#Myform").validate({
      
      rules: {
         fname: {
            required: true,
            minlength: 2
         },
         lname: {
            required: true,
            minlength: 2
         },
         phone: {
           required: true,
           number: true,
           minlength: 10,
           maxlength: 10
         },
         mail: {
            required: true,
            email: true
         },
         message: {
            required: true,
            maxlength: 100
         },
      },
      
      messages: {
        fname: {
        required: "First Name is Required ",
        minlength: "Name at Least 2 Characters"
        },
        lname: {
          required: "Last Name is Required ",
          minlength: "Name at Least 2 Characters"
        },
        phone: {
          required: "Phone Num. is Required "
        },
        mail: {
          required: "Email is Required"
        },
        message: {
          required: "Your Message is Required",
          maxlength: "Your Message Can NOT Exceed 100 Characters"
        }

      },

      submitHandler: function() {

        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var phone =  $("#phone").val();
        var mail =  $("#mail").val();
        var message =  $("#message").val();
    

        $("#submit").click(function() {
            const form = $(this).closest('form');
          
            $.confirm({
                title: '<h1 style="color: green;>تأكيد</h1>' ,
                content: 
                '<h3>الاسم الأول: ' + fname + '</h3>' +
                '<h3>الاسم الثاني: ' + lname + '</h3>' +
                '<h3>رقم الجوال:  ' + phone + '</h3>' +
                '<h3>البريد الإلكتروني: ' + mail + '</h3>' +
                '<h3>الرسالة: ' + message + '</h3>',
                 type: 'green',
                 closeIcon: true,
                 backgroundDismiss: false,
                 backgroundDismissAnimation: 'glow',
                 draggable: true,
                 dragWindowGap: 0,

                buttons: {

                    confirm:  {
                        text: 'Confirm',
                        keys: ['enter'],
                        btnClass: 'btn-green',
                        action: function(){
                            $(form).submit();
                        }
                    },

                    cancel: function()  { 
                    },

                }
            })   
        });
      }
   }) 
      
});

