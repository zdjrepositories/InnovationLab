$(function () {
getUser();
})
function getUser() {
                  $.ajax({
                      url: '/innovationlab/getUser',
                      type: 'get',
                      async: true,
                      data: {},
                      success: function (data) {
                          var user=data;
                          if(user==""){
                             window.location.href = "/login.html?page=index";
                           }
                  }
                  })
              }