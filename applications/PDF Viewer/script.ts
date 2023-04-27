function readfile(filelist: [string]): void {
	let pdfFile: any = filelist[0]
	document.getElementById('pdfContainer').src = "../../Home/Documents/" + pdfFile.name
}
