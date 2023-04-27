function download() {
    var link = document.createElement('a');
    var str = document.getElementById("mainInput").value;
    str = str.split("\u000A").join("\u000D\u000A");
    bl = new Blob([str]);
    link.href = URL.createObjectURL(bl);
    if (document.getElementById("mainInput").name != "") {
        link.download = document.getElementById("mainInput").name;
    }
    else {
        link.download = "text.txt";
    }
    var e = new MouseEvent("click");
    link.dispatchEvent(e);
}
function readfile(filelist) {
    var text = filelist[0];
    document.getElementById("mainInput").name = text.name;
    console.dir(text);
    var reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById("mainInput").value = e.target.result;
    };
    reader.readAsText(text);
}
function toggleSpelling() {
    document.getElementById('mainInput').spellcheck = document.getElementById('spellcheck').checked;
}
