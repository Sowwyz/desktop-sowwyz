let curDate = (new Date()).getDate()
let curMonth = (new Date()).getMonth()
let curYear = (new Date()).getFullYear()
let startDay = (new Date(curYear, curMonth, 1)).getDay()
const months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const noofdays: number[] = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
let prevMonth:number = noofdays[curMonth - 1]
if (curMonth == 11) {
  prevMonth = noofdays[0]
} else if (curMonth == 0) {
  prevMonth = noofdays[11]
};
let totalDays: number = noofdays[curMonth]
let counter: number = 0
let precounter: number = prevMonth - (startDay - 1)
let rightbox: number = 6
let flag: boolean = true

jQuery('.curr-month b').text(months[curMonth])
for (let i = 0; i < 42; i++) {
  if (i >= startDay) {
    counter++
    if (counter > totalDays) {
      counter = 1
      flag = false
    }
    if (flag == true) {
      jQuery('.all-date ul').append('<li class="monthdate">' + counter + '</li>')
    } else {
      jQuery('.all-date ul').append('<li style="opacity:.8">' + counter + '</li>')
    }
  } else {
    jQuery('.all-date ul').append('<li style="opacity:.8">' + precounter + '</li>')
    precounter++
  }

  if (i == rightbox) {
    jQuery(jQuery('.all-date ul li')[rightbox]).addClass("b-right")
    rightbox = rightbox + 7
  }

  if (i > 34) {
    jQuery(jQuery('.all-date ul li')[i]).addClass("b-bottom")
  }

  if ((jQuery(jQuery('.all-date ul li')[i]).text() == curDate) && (jQuery(jQuery('.all-date ul li')[i]).css('opacity') == 1)) {
    jQuery(jQuery('.all-date ul li')[i]).css({
      "background-color": "#02548b",
      "color": "#fff"
    });
  }
}
