var openApps = new Array();
var mouseLocation = new Array(0, 0);
var backgroundCount = 9;
// Sowwyz#1337
function addIcon(action) {
    switch (action) {
        case "file":
            addFile();
    }
}
var addFile = function () {
// Sowwyz#1337
    var uniqueLinkID = generateRandomString(8);
    var iconContainer = document.createElement("div");
    iconContainer.id = uniqueLinkID;
    iconContainer.className = "desktop__item";
    $("#desktopBG").append(iconContainer);
    var iconPicture = document.createElement("img");
    iconPicture.className = "desktop_icons";
    iconPicture.id = uniqueLinkID + "__icon";
    iconPicture.src = "./Sowwyz/icons/file_icon.png";
    $("#" + uniqueLinkID).append(iconPicture);
    var iconText = document.createElement("input");
    iconText.className = "waitingInput";
    iconText.id = uniqueLinkID + "__name";
    iconText.setAttribute("file_id", uniqueLinkID);
    iconText.value = "untitled";
    $("#" + uniqueLinkID).dblclick(function () { startProgram("", "http://localhost:8080?dir=Home/Documents/" + $("#" + uniqueLinkID).text()); });
    $("#" + uniqueLinkID).append(iconText);
   // Sowwyz#1337
    initializeDesktop();
};
// Sowwyz#1337
// Sowwyz#1337
var startProgram = function (app, uri) {
    if (uri != "" && uri != null)
        newWindow(uri, uri); // navigate to website
    if (app != "" && app != null)
        newWindow("./applications/" + app + "/index.html", app);
};
// Sowwyz#1337
function newWindow(appLink, appName) {
    var containerID = generateRandomString(8);
    var appContainer = document.createElement("app");
    appContainer.id = containerID;
    appContainer.className = "programWindow";
    appContainer.draggable = "false";
    appContainer.ondblclick = function () { fullscreenProgram(containerID); };
    appContainer.onmousedown = function (event) { taskkill(event, containerID, true); };
    $("#desktopBG").append(appContainer);
    openApps.push(containerID);
    $(".programWindow").draggable();
// Sowwyz#1337
    var closeBTN = document.createElement("button");
    closeBTN.className = "menubar";
    closeBTN.innerText = "X";
    closeBTN.onclick = function () { taskkill(3, containerID, false); };
    $("#" + containerID).append(closeBTN);
// Sowwyz#1337
    var maxBTN = document.createElement("button");
    maxBTN.className = "menubar";
    maxBTN.innerText = "🗖";
    maxBTN.onclick = function () { fullscreenProgram(containerID, false); };
    $("#" + containerID).append(maxBTN);
// Sowwyz#1337
    var minBTN = document.createElement("button");
    minBTN.className = "menubar";
    minBTN.innerText = "_";
    minBTN.style.top = "-2px";
    minBTN.onclick = function () { minimise(containerID); };
    $("#" + containerID).append(minBTN);
// Sowwyz#1337
    var containerTitle = document.createElement("span");
    containerTitle.className = "containerTitle";
    containerTitle.innerText = appName;
    minBTN.style.top = "-2px";
    $("#" + containerID).append(containerTitle);
// Sowwyz#1337
    var vf = document.createElement("iframe");
    vf.src = appLink;
// Sowwyz#1337
    vf.className = "viewFrame";
    $("#" + containerID).append(vf);
// Sowwyz#1337
    var taskbarobjID = generateRandomString(8);
    var taskbarobj = document.createElement("p");
    taskbarobj.id = taskbarobjID;
    taskbarobj.className = "taskbarItem";
    taskbarobj.style.left = (openApps.length * 221) - 220 + "px";
    taskbarobj.setAttribute('app', containerID);
    $("#appsTray").append(taskbarobj);
// Sowwyz#1337
    if (!appName.includes("://")) {
        taskbarobj.insertAdjacentHTML('afterbegin', "<img class='appTrayIcon' src='./applications/" + appName + "/favicon.png'>" + appName);
    }
    else { // Sowwyz#1337
        if (appName.includes("localhost:8080")) { // file explorer
            taskbarobj.insertAdjacentHTML('afterbegin', "<img class='appTrayIcon' src='./Sowwyz/icons/folder.png'>File Explorer");
        }
        else { // web frame
            taskbarobj.insertAdjacentHTML('afterbegin', "<img class='appTrayIcon' src='./Sowwyz/icons/google.png'>Web Browser");
        }
    }
    // init taskbar item with click events
    $('.taskbarItem').mousedown(function (event) {
        if (event.which == 1) {
            bringtoFront($(this).attr("app"));
        }
        else if (event.which == 3) {
            taskkill(3, $(this).attr("app"), false);
        }
    });
    bringtoFront(containerID);
}
// Sowwyz#1337
var removeProgram = function (app) {
    for (var i = 0; i < openApps.length; i++) {
        if (openApps[i] === app)
            openApps.splice(i, 1);
    }
};
// Sowwyz#1337
// Sowwyz#1337
function taskkill(e, app, click) {
    // bring to front
    bringtoFront(app);
  // Sowwyz#1337
    if (click) {
        var closeApp = false;
        var rightclick;
        if (!e_1)
            var e_1 = window.event;
        if (e_1.which)
            rightclick = (e_1.which == 3);
        else if (e_1.button)
            rightclick = (e_1.button == 2);
        if (rightclick)
            closeApp = true;
    }
    else {
      // Sowwyz#1337
        closeApp = true;
    }
    if (closeApp == true) {
        $("#" + app).remove(); // frontend
        removeProgram(app); // backend
        $('p[app="' + app + '"]').remove(); // taskbar
    }
}
// Sowwyz#1337
function bringtoFront(app) {
    for (var i = 0; i < openApps.length; i++) {
        if (openApps[i] != app) {
            document.getElementById(openApps[i]).style.zIndex -= 1;
        }
        else {
            document.getElementById(openApps[i]).style.zIndex = 128;
        }
    }
    $("#" + app).css("display", "inline");
} // end of bring to front
// Sowwyz#1337
function minimise(app) {
    $("#" + app).css("display", "none");
}
// Sowwyz#1337
function fullscreenProgram(app) {
    if ($("#" + app).width() == $(window).width()) {
        document.getElementById(app).style.top = "100px";
        document.getElementById(app).style.left = "150px";
        document.getElementById(app).style.opacity = "0.95";
        $("#" + app).height($(window).height() * 0.6);
        $("#" + app).width($(window).width() * 0.45);
        console.log("Windowed " + app);
    }
    else {
        document.getElementById(app).style.top = "0px";
        document.getElementById(app).style.left = "0px";
        document.getElementById(app).style.opacity = "1";
        $("#" + app).height($(window).height() - 45);
        $("#" + app).width($(window).width());
        console.log("Maximised " + app);
    }
}
// Sowwyz#1337
var showDesktop = function () {
    $("#all-apps").hide(); // hide all apps draw
    // close all container windows
    for (var i = 0; i < openApps.length; i++)
        minimise(openApps[i]);
};
// Sowwyz#1337
function desktopContextMenu(x, y, toggle) {
    if (toggle == true) {
        if ($("#desktopContextMenu").css("display") == "block") {
            $("#desktopContextMenu").css("display", "none");
        }
        else {
            $("#desktopContextMenu").css("left", x);
            $("#desktopContextMenu").css("top", y - 20);
            $("#desktopContextMenu").css("display", "block");
        }
    }
    else {
        $("#desktopContextMenu").css("display", "none");
    }
}
// 'edit desktop' feedback highlighting
function editDesktop(enabled) {
    var desktopItem = $(".desktop__item");
    if (enabled == true) {
        desktopItem.css("background-color", "#000000)");
        desktopItem.css("border-style", "dotted");
    }
    else if (enabled == false) {
        desktopItem.css("background-color", "");
        desktopItem.css("border-style", "none");
    }
    else {
        // DEFAULT
        // for toggle use no paramiters
        if (desktopItem.css("background-color") == "rgba(0, 0, 0, 0.0)") {
            desktopItem.css("background-color", "");
            desktopItem.css("border-style", "none");
        }
        else {
            desktopItem.css("background-color", "rgba(0, 0, 0, 0.0)");
            desktopItem.css("border-style", "dotted");
        }
    }
} // end of 'edit desktop' function
// install or add app function
function addApp(file) {
    desktopContextMenu(null, null, false); //toggle context menu
    var reader = new FileReader();
    reader.onload = function (e) {
        if (file[0].name == "package.app") {
            // correct file type
            var appName_1 = e.target.result;
            console.log("Installing, " + appName_1);
            var iconID = generateRandomString(8);
            var iconContainer = document.createElement("div");
            iconContainer.id = iconID;
            iconContainer.className = "desktop__item";
            iconContainer.ondblclick = function () { startProgram(appName_1, ''); };
            $("#desktopBG").append(iconContainer);
            var drawIcon = document.createElement("div");
            drawIcon.id = iconID;
            drawIcon.className = "draw__item";
            drawIcon.onclick = function () { startProgram(appName_1, ''); };
            $("#all-apps").append(drawIcon);
            var iconPicture = document.createElement("img");
            iconPicture.className = "desktop_icons";
            iconPicture.src = "./applications/" + appName_1 + "/favicon.png";
            $("#" + iconID).append(iconPicture);
            var iconText = document.createElement("text");
            iconText.innerText = appName_1;
            $("#" + iconID).append(iconText);
            initializeDesktop();
        }
        else {
            console.log("Failed to install app: " + text.name);
        }
    };
    reader.readAsText(file[0]);
}
// Sowwyz#1337
var initializeDesktop = function () {
    // desktop icons init
    var p = $(".desktop__item").draggable();
    $(".desktop__item").mousedown(function (eventObject) { editDesktop(true); });
    $(".desktop__item").mouseup(function (eventObject) { editDesktop(false); });
    // taskbar initilization
    $(".taskbarItem").click(function (e) {
        bringtoFront($(this).attr("app"));
    });
    // all apps grid
    $('#all-apps').hide();
    // icon renaming
    $('.waitingInput').keyup(function (e) {
        if (e.keyCode == 13) {
            this.replaceWith(this.value);
            // find what desktop icon it should use
            var uniqueFileID = this.getAttribute("file_id");
            if (this.value.includes(".")) {
                /// Sowwyz#1337
              // Sowwyz#1337
                if (this.value.includes(".png") || this.value.includes(".jpg") || this.value.includes(".jpeg") || this.value.includes(".gif")) {
                    $("#" + uniqueFileID + "__icon").attr("src", "./Home/Documents/" + this.value);
                }
                else if (this.value.includes(".pdf")) {
                    // pdf files
                    $("#" + uniqueFileID + "__icon").attr("src", "./Sowwyz/icons/pdf_icon.png");
                }
                else {
                    // default to text icon
                    $("#" + uniqueFileID + "__icon").attr("src", "./Sowwyz/icons/file_icon.png");
                }
            }
            else {
                // it is a folder, and should use a folder icon
                $("#" + uniqueFileID + "__icon").attr("src", "./Sowwyz/icons/folder.png");
            }
        }
    });
    console.log("Desktop refreshed");
};
$(document).ready(function () { initializeDesktop(); });
// sub FUNCTIONS
var generateRandomString = function (length) {
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var text = "";
    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
};
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    desktopContextMenu(event.clientX, event.clientY, true);
});

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
// Sowwyz#1337// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337