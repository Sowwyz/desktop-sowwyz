let usernames: string[] = new  Array("sowwyz")
let passwords: string[] = new  Array("sowwyz")

// credentials checking function
let login = (usrname: string, pswd: string): void => {
  let loggedIn: boolean = false
  for (let i = 0; i < usernames.length; i++) {
    if (usrname == usernames[i] && pswd == passwords[i]) {
      console.log("Logging in:  " + usrname + "...")
      window.location.href = "desktop.html?usr=" + usrname
      loggedIn = true
    }
  }

  // alert the user if login attempt failed
  if (!loggedIn) alert("Incorrect Username & Password...")
}


// push new account to login arrays
let addAccount = (): void => {
  if ($("#regpass").val() == $("#reregpass").val()) {
    usernames.push($("#regname").val())
    passwords.push($("#regpass").val())
    return
  }

  alert("Please Check Both Passwords Match...")
}

// enter keydown to login temp event
function keydown(e: any): void {
  let key=e.keyCode || e.which
  if (key==13) {
    addAccount()
    login(document.getElementById('name').value, document.getElementById('pass').value)
  }
}

// sub functions
$.urlParam = function (name: string) {
   let results: RegExpExecArray = new RegExp('[?&]' + name + '=([^&#]*)').exec(window.location.href)
   return results[1] || 0
 }

$(function() {
   
   // if the user logged out instead of locked, it should display a prompt for the login username
   // if locked, it will not have any navigation or prompts avalible
   $( document ).ready(function() {
      $("#name").trigger('focus')
      $("#name").val($.urlParam('usr'))
      $("#pass").trigger('focus')
   });

   $(".input input").focus(function() {

      $(this).parent(".input").each(function() {
         $("label", this).css({
            "line-height": "18px",
            "font-size": "18px",
            "font-weight": "100",
            "top": "0px"
         })
         $(".spin", this).css({
            "width": "100%"
         })
      })
   }).blur(function() {
      $(".spin").css({
         "width": "0px"
      })
      if ($(this).val() == "") {
         $(this).parent(".input").each(function() {
            $("label", this).css({
               "line-height": "60px",
               "font-size": "24px",
               "font-weight": "300",
               "top": "10px"
            })
         })

      }
   })

   $(".button").click(function(e) {
      let pX = e.pageX,
         pY = e.pageY,
         oX = parseInt($(this).offset().left),
         oY = parseInt($(this).offset().top)

      $(this).append('<span class="click-efect x-' + oX + ' y-' + oY + '" style="margin-left:' + (pX - oX) + 'px;margin-top:' + (pY - oY) + 'px;"></span>')
      $('.x-' + oX + '.y-' + oY + '').animate({
         "width": "500px",
         "height": "500px",
         "top": "-250px",
         "left": "-250px",

      }, 600)
      $("button", this).addClass('active')
   })

   $(".alt-2").click(function() {
      if (!$(this).hasClass('material-button')) {
         $(".shape").css({
            "width": "100%",
            "height": "100%",
            "transform": "rotate(0deg)"
         })

         setTimeout(function() {
            $(".overbox").css({
               "overflow": "initial"
            })
         }, 600)

         $(this).animate({
            "width": "140px",
            "height": "140px"
         }, 500, function() {
            $(".box").removeClass("back")

            $(this).removeClass('active')
         })

         $(".overbox .title").fadeOut(300)
         $(".overbox .input").fadeOut(300)
         $(".overbox .button").fadeOut(300)

         $(".alt-2").addClass('material-buton')
      }

   })

   $(".material-button").click(function() {

      if ($(this).hasClass('material-button')) {
         setTimeout(function() {
            $(".overbox").css({
               "overflow": "hidden"
            })
            $(".box").addClass("back")
         }, 200)
         $(this).addClass('active').animate({
            "width": "700px",
            "height": "700px"
         })

         setTimeout(function() {
            $(".shape").css({
               "width": "50%",
               "height": "50%",
               "transform": "rotate(45deg)"
            })

            $(".overbox .title").fadeIn(300)
            $(".overbox .input").fadeIn(300)
            $(".overbox .button").fadeIn(300)
         }, 700)

         $(this).removeClass('material-button')

      }

      if ($(".alt-2").hasClass('material-buton')) {
         $(".alt-2").removeClass('material-buton')
         $(".alt-2").addClass('material-button')
      }

   })

})

               // Sowwyz#1337