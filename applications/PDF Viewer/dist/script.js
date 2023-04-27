function readfile(filelist) {
    var pdfFile = filelist[0];
    document.getElementById('pdfContainer').src = "../../Home/Documents/" + pdfFile.name;
}
