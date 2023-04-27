let navigate = function (e: any): void {
  if (e.keyCode == 13) {
    if ($("#search__input").val().includes("://")) {
      startProgram('', $("#search__input").val())
    } else {
      startProgram('', 'https://www.bing.com?q=' + $("#search__input").val())
    }
    toggleStart(0)
  }
}

function esc(e: any): void {
  let key: number = e.keyCode || e.which
  if (key == 27) toggleStart(0)
  desktopContextMenu(event.clientX, event.clientY, false)
}
// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */
function user(status: string): void {
  switch (status) {
    case "logout":
      window.location.href = "./login.html?usr=" + $.urlParam('usr')
      break
    case "lock":
      document.location.replace("./login.html")
      break
    case "sleep":
      window.location.href = "./Sowwyz/screensaver.html?usr=" + $.urlParam('usr')
      break
    default:
      console.log("status update failed...")
  }
}
// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */
// /* Sowwyz#1337 */
$(window).load(function () {
  let $container: object = $('.start-screen')

  $container.masonry({
    itemSelector: '.masonry-item',
    columnWidth: 128
  })


  $('.start-menu').hide().css('opacity', 1)
})

$(function () {
  //$('.start-screen-scroll').jScrollPane()
})

function resizeStart(): void {
  let startWidth: number = $('.start-screen').outerWidth()
  let startRound: number = Math.ceil(startWidth / 128.0) * 128

  console.log('original: ' + startWidth)
  console.log('rounded: ' + startRound)

  $('.start-screen').css({
    'width': startRound
  })
}



// Unfocus windows when desktop is clicked
$('.desktop').click(function (e: any) {
  if ($('.desktop').has(e.target).length === 0) desktopContextMenu(event.clientX, event.clientY, false)
})




function toggleStart(e: any): void {
  $('.start-menu-fade').fadeToggle(500)
  $('.start-menu').fadeToggle(250).toggleClass('start-menu--open')
  $('.taskbar__item--start').toggleClass('start--open')
  $('#search__input').val("")
  $('#search__input').focus()
}

$('.taskbar__item--start').click(toggleStart)
$('.start-menu__recent li a').click(toggleStart)
$('.start-screen__tile').click(toggleStart)

// Prevent "open" class on start
$(function () {
  $('.taskbar__item--start').click(function () {
    $(this).removeClass('taskbar__item--open taskbar__item--active')
  })
})


// Current time
let getTime = (): void => {
  let a_p: string = ""
  let dateOBJ = new Date()

  let curr_hour: number = dateOBJ.getHours()
  if (curr_hour < 12) { a_p = "AM" } else { a_p = "PM" }

  // adjust PM times by -12 hours
  if (curr_hour > 12) curr_hour = curr_hour - 12

  // add "zero" to start of minutes if <10
  let curr_min: number = dateOBJ.getMinutes()
  if (curr_min < 10) curr_min = '0' + curr_min.toString()

  // display time on taskbar
  $('#timeDisplay').html(curr_hour.toString() + ':' + curr_min.toString() + ' ' + a_p)
}

$.urlParam = function (name: string) {
  let results: RegExpExecArray = new RegExp('[?&]' + name + '=([^&#]*)').exec(window.location.href)
  return results[1] || 0
}

$('.menu-toggle').each(function () {
  let menuName = $(this).data('menu')
  let menu = $('.menu[data-menu="' + menuName + '"]')
  let pos = $(this).position()
  let height = $(this).outerHeight()

  if (!$(menu).hasClass('menu--bottom')) {
    $(menu).position({
      my: 'left top',
      at: 'left bottom',
      of: this,
      collision: 'none'
    })
  }

  $(menu).hide()

  $(this).click(function (e) {
    e.preventDefault()
    $('.menu').not(menu).hide()
    $(menu).toggle()
  })
})

// ALL APPS DRAW
document.getElementById('all-appsBTN').onclick = function () {
  $("#all-apps").show()
}
document.getElementById('allAppsCloseBTN').onclick = function () {
  $("#all-apps").hide()
}

// load background
let loadBackground = (): void => {
  $('#currentUser').text($.urlParam('usr'))
  document.getElementById('desktopBG').style.backgroundImage = "url('./Sowwyz/backgrounds/" + Math.ceil(Math.random() * backgroundCount) + ".png')"
}
loadBackground()

// hide menu when clicking off the menu
$(document).mouseup(function (e: any) {
  if ($('.menu').has(e.target).length == 0 && !$('.menu-toggle').is(e.target) && $('.menu-toggle').has(e.target).length == 0)
    $('.menu').hide()
})

// if holding down super key (esc), log off
var lastKeyUpAt: number = 0;
$(document).on('keydown', function (event: any) {
  let key: number = event.keyCode || event.which
  if (key != 27)
    return
  var keyDownAt = new Date();

  setTimeout(function () {
    // Compare key down time with key up time
    if (+keyDownAt > +lastKeyUpAt) {
      // Key has been held down for x seconds
      user("lock");
    }
  }, 2000);
});

$(document).on('keyup', function () {
  lastKeyUpAt = new Date();
});


/* LOOP */
// countdown timer till screensaver will be activated
let screensaverTimeout: number = 480 // seconds (8) miniutes default
function loop(): void {
  getTime()
  setTimeout(loop, 1000)
  screensaverTimeout -= 1
  if (screensaverTimeout < 1) window.location.href = "./Sowwyz/screensaver.html?usr=" + $.urlParam('usr')
}
loop()
// /* Sowwyz#1337 */
// /* Sowwyz#1337 */
// /* Sowwyz#1337 */
// /* Sowwyz#1337 */
// /* Sowwyz#1337 */
// /* Sowwyz#1337 */
// /* Sowwyz#1337 */
// /* Sowwyz#1337 */
// /* Sowwyz#1337 */
// /* Sowwyz#1337 */
// /* Sowwyz#1337 */
// /* Sowwyz#1337 */
// /* Sowwyz#1337 */
// /* Sowwyz#1337 */
// /* Sowwyz#1337 */
// /* Sowwyz#1337 */
// /* Sowwyz#1337 */
// /* Sowwyz#1337 */

// /* Sowwyz#1337 */
// /* Sowwyz#1337 */
// /* Sowwyz#1337 */
// /* Sowwyz#1337 */
// /* Sowwyz#1337 */
// /* Sowwyz#1337 */
// /* Sowwyz#1337 */
// /* Sowwyz#1337 */
// /* Sowwyz#1337 */
// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */// /* Sowwyz#1337 */
// /* Sowwyz#1337 */// /* Sowwyz#1337 */
// /* Sowwyz#1337 */
// /* Sowwyz#1337 */

// /* Sowwyz#1337 */