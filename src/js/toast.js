//toast.js
$.getScript("//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js", function(){

  toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
  var toasts = [

    {
      type: 'info',
      message: '<a href="https://www.youtube.com/watch?v=8MlE2-59UfQ">Google Hangout at 9:00 pm on Nov. 8th</a>'
    }
  ]
  var i;
  i=0;
  function nextI (toasts) {
    if  (i>=toasts.length-1) {
      i = 0;
    } else {
      i += 1;
    }
    return toasts[i];
  }
  var toast = nextI(toasts);
  toastr[toast.type](toast.message);
  setInterval(function () {
    var toast = nextI(toasts);
    toastr[toast.type](toast.message);
  }, 5500);

});
