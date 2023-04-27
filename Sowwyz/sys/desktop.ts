let openApps: string[] = new Array()
let mouseLocation: number[] = new Array(0, 0)
const backgroundCount: number = 9

// Sowwyz#1337
function addIcon(action: string): void {
  switch (action) {
    case "file":
      addFile()
  }
}

let addFile = (): void => {

  // brand new file
  let uniqueLinkID: string = generateRandomString(8)
  let iconContainer = document.createElement("div")
  iconContainer.id = uniqueLinkID
  iconContainer.className = "desktop__item"
  $("#desktopBG").append(iconContainer)

  let iconPicture = document.createElement("img")
  iconPicture.className = "desktop_icons"
  iconPicture.id = uniqueLinkID + "__icon"
  iconPicture.src = "./Sowwyz/icons/file_icon.png"
  $("#" + uniqueLinkID).append(iconPicture)

  let iconText = document.createElement("input")
  iconText.className = "waitingInput"
  iconText.id = uniqueLinkID + "__name"
  iconText.setAttribute("file_id", uniqueLinkID)
  iconText.value = "untitled"
  $("#" + uniqueLinkID).dblclick(function () { startProgram("", "http://localhost:8080?dir=Home/Documents/" + $("#" + uniqueLinkID).text()) })
  $("#" + uniqueLinkID).append(iconText)

  // refresh desktop to add folder visualization
  initializeDesktop()
}

/* APPS */
// 'start program' app type parsing
let startProgram = (app: string, uri: string): void => {
  if (uri != "" && uri != null) newWindow(uri, uri) // navigate to website
  if (app != "" && app != null) newWindow("./applications/" + app + "/index.html", app)
}


// CREATE CONTAINER
function newWindow(appLink: string, appName: string): void {
  let containerID: string = generateRandomString(8)

  let appContainer = document.createElement("app")
  appContainer.id = containerID
  appContainer.className = "programWindow"
  appContainer.draggable = "false"
  appContainer.ondblclick = function () { fullscreenProgram(containerID) }
  appContainer.onmousedown = function (event) { taskkill(event, containerID, true) }
  $("#desktopBG").append(appContainer)
  openApps.push(containerID)
  $(".programWindow").draggable()

  /* GLOBAL MENU BUTTONS */
  let closeBTN = document.createElement("button")
  closeBTN.className = "menubar"
  closeBTN.innerText = "X"
  closeBTN.onclick = function () { taskkill(3, containerID, false) }
  $("#" + containerID).append(closeBTN)

  // maximise button
  let maxBTN = document.createElement("button")
  maxBTN.className = "menubar"
  maxBTN.innerText = "🗖"
  maxBTN.onclick = function () { fullscreenProgram(containerID, false) }
  $("#" + containerID).append(maxBTN)

  // minimise button
  let minBTN = document.createElement("button")
  minBTN.className = "menubar"
  minBTN.innerText = "_"
  minBTN.style.top = "-2px"
  minBTN.onclick = function () { minimise(containerID) }
  $("#" + containerID).append(minBTN)

  // container header
  let containerTitle = document.createElement("span")
  containerTitle.className = "containerTitle"
  containerTitle.innerText = appName
  minBTN.style.top = "-2px"
  $("#" + containerID).append(containerTitle)

  //vf = viewerframe
  let vf = document.createElement("iframe")
  vf.src = appLink
  //vf.scrolling = "no"
  vf.className = "viewFrame"
  $("#" + containerID).append(vf)

  // add taskbar object
  let taskbarobjID: string = generateRandomString(8)
  let taskbarobj = document.createElement("p")
  taskbarobj.id = taskbarobjID
  taskbarobj.className = "taskbarItem"
  taskbarobj.style.left = (openApps.length * 221) - 220 + "px"
  taskbarobj.setAttribute('app', containerID)
  $("#appsTray").append(taskbarobj)

  // traskbar object and icon
  if (!appName.includes("://")) {
    taskbarobj.insertAdjacentHTML('afterbegin', "<img class='appTrayIcon' src='./applications/" + appName + "/favicon.png'>" + appName)
  } else { // web app frame

    if (appName.includes("localhost:8080")) { // file explorer
      taskbarobj.insertAdjacentHTML('afterbegin', "<img class='appTrayIcon' src='./Sowwyz/icons/folder.png'>File Explorer")
    } else { // web frame
      taskbarobj.insertAdjacentHTML('afterbegin', "<img class='appTrayIcon' src='./Sowwyz/icons/google.png'>Web Browser")
    }

  }

  // init taskbar item with click events
  $('.taskbarItem').mousedown(function (event) {
    if (event.which == 1) {
      bringtoFront($(this).attr("app"))
    } else if (event.which == 3) {
      taskkill(3, $(this).attr("app"), false)
    }
  })
  bringtoFront(containerID)
}


// remove program from backend list of open apps
let removeProgram = (app: string): void => {
  for (let i = 0; i < openApps.length; i++) {
    if (openApps[i] === app) openApps.splice(i, 1)
  }
}


// TASKKILL (event, app, false)
// taskkill function
function taskkill(e, app: string, click: boolean): void {
  // bring to front
  bringtoFront(app)

  // if the user right clicked on either the taskbar item or container
  if (click) {
    let closeApp: boolean = false
    var rightclick
    if (!e) let e = window.event
    if (e.which) rightclick = (e.which == 3)
    else if (e.button) rightclick = (e.button == 2)
    if (rightclick) closeApp = true
  } else {
    // false paramiter skips to kill sequence
    closeApp = true
  }

  if (closeApp == true) {
    $("#" + app).remove()               // frontend
    removeProgram(app)                  // backend
    $('p[app="' + app + '"]').remove()  // taskbar
  }
}


// brings app to front of desktop
function bringtoFront(app: string): void {
  for (var i = 0; i < openApps.length; i++) {
    if (openApps[i] != app) {
      document.getElementById(openApps[i]).style.zIndex -= 1
    } else {
      document.getElementById(openApps[i]).style.zIndex = 128
    }
  }
  $("#" + app).css("display", "inline")
} // end of bring to front


// minimises app to hidden on desktop
function minimise(app): void {
  $("#" + app).css("display", "none")
}


// fullscreens container window
function fullscreenProgram(app: string): void {
  if ($("#" + app).width() == $(window).width()) {
    document.getElementById(app).style.top = "100px"
    document.getElementById(app).style.left = "150px"
    document.getElementById(app).style.opacity = "0.95"
    $("#" + app).height($(window).height() * 0.6)
    $("#" + app).width($(window).width() * 0.45)
    console.log("Windowed " + app)
  } else {
    document.getElementById(app).style.top = "0px"
    document.getElementById(app).style.left = "0px"
    document.getElementById(app).style.opacity = "1"
    $("#" + app).height($(window).height() - 45)
    $("#" + app).width($(window).width())
    console.log("Maximised " + app)
  }
}


// minimise all windows and 'show desktop'
let showDesktop = (): void => {
  $("#all-apps").hide() // hide all apps draw

  // close all container windows
  for (let i = 0; i < openApps.length; i++) minimise(openApps[i])
}


// desktop context menu toggling
function desktopContextMenu(x, y, toggle: boolean): void {
  if (toggle == true) {
    if ($("#desktopContextMenu").css("display") == "block") {
      $("#desktopContextMenu").css("display", "none")
    } else {
      $("#desktopContextMenu").css("left", x)
      $("#desktopContextMenu").css("top", y - 20)
      $("#desktopContextMenu").css("display", "block")
    }
  } else { $("#desktopContextMenu").css("display", "none") }
}


// 'edit desktop' feedback highlighting
function editDesktop(enabled: boolean): void {
  let desktopItem = $(".desktop__item")

  if (enabled == true) {
    desktopItem.css("background-color", "rgba(120, 144, 156, 0.8)")
    desktopItem.css("border-style", "dotted")
  } else if (enabled == false) {
    desktopItem.css("background-color", "")
    desktopItem.css("border-style", "none")
  } else {

    // DEFAULT
    // for toggle use no paramiters
    if (desktopItem.css("background-color") == "rgba(120, 144, 156, 0.8)") {
      desktopItem.css("background-color", "")
      desktopItem.css("border-style", "none")
    } else {
      desktopItem.css("background-color", "rgba(120, 144, 156, 0.8)")
      desktopItem.css("border-style", "dotted")
    }

  }
} // end of 'edit desktop' function


// install or add app function
function addApp(file: any) {
  desktopContextMenu(null, null, false) //toggle context menu

  let reader = new FileReader()
  reader.onload = function (e) {
    if (file[0].name == "package.app") {
      // correct file type
      let appName = e.target.result
      console.log("Installing, " + appName)

      let iconID = generateRandomString(8)
      let iconContainer = document.createElement("div")
      iconContainer.id = iconID
      iconContainer.className = "desktop__item"
      iconContainer.ondblclick = function () { startProgram(appName, '') }
      $("#desktopBG").append(iconContainer)

      let drawIcon = document.createElement("div")
      drawIcon.id = iconID
      drawIcon.className = "draw__item"
      drawIcon.onclick = function () { startProgram(appName, '') }
      $("#all-apps").append(drawIcon)

      let iconPicture = document.createElement("img")
      iconPicture.className = "desktop_icons"
      iconPicture.src = "./applications/" + appName + "/favicon.png"
      $("#" + iconID).append(iconPicture)

      let iconText = document.createElement("text")
      iconText.innerText = appName
      $("#" + iconID).append(iconText)

      initializeDesktop()
    } else {

      console.log("Failed to install app: " + text.name)
    }

  }
  reader.readAsText(file[0])
}


// used for initilization of desktop and refreshes
let initializeDesktop = (): void => {
  // desktop icons init
  let p = $(".desktop__item").draggable()
  $(".desktop__item").mousedown(function (eventObject) { editDesktop(true) })
  $(".desktop__item").mouseup(function (eventObject) { editDesktop(false) })

  // taskbar initilization
  $(".taskbarItem").click(function (e) {
    bringtoFront($(this).attr("app"))
  })

  // all apps grid
  $('#all-apps').hide()

  // icon renaming
  $('.waitingInput').keyup(function (e) {
    if (e.keyCode == 13) {
      this.replaceWith(this.value)

      // find what desktop icon it should use
      let uniqueFileID: String = this.getAttribute("file_id")
      if (this.value.includes(".")) {
        // the icon should be a file icon

        // test if the file is a picture
        if (this.value.includes(".png") || this.value.includes(".jpg") || this.value.includes(".jpeg") || this.value.includes(".gif")) {
          $("#" + uniqueFileID + "__icon").attr("src", "./Home/Documents/" + this.value)
        } else if (this.value.includes(".pdf")) {
          // pdf files
          $("#" + uniqueFileID + "__icon").attr("src", "./Sowwyz/icons/pdf_icon.png")
        } else {
          // default to text icon
          $("#" + uniqueFileID + "__icon").attr("src", "./Sowwyz/icons/file_icon.png")
        }

      } else {
        // it is a folder, and should use a folder icon
        $("#" + uniqueFileID + "__icon").attr("src", "./Sowwyz/icons/folder.png")
      }
    }
  })

  console.log("Desktop refreshed")
}

$(document).ready(function () { initializeDesktop() })

// sub FUNCTIONS
let generateRandomString = (length: number): string => {
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let text = ""

  for (let i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  return text
}

document.addEventListener('contextmenu', event => {
  event.preventDefault()
  desktopContextMenu(event.clientX, event.clientY, true)
})

// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337





// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337