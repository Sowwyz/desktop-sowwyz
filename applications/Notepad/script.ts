function download(): void {
	let link = document.createElement('a')
	let str: string = document.getElementById("mainInput").value
	str = str.split("\u000A").join("\u000D\u000A")
	bl = new Blob([str])
	link.href = URL.createObjectURL(bl)

	if (document.getElementById("mainInput").name!=""){
		link.download = document.getElementById("mainInput").name
	} else {
		link.download = "text.txt"
	}

	let e = new MouseEvent("click")
	link.dispatchEvent(e)
}

function readfile(filelist: [string]): string {
	let text: any = filelist[0]
	document.getElementById("mainInput").name=text.name
	console.dir(text)
	let reader = new FileReader()
	reader.onload = function(e) {
    document.getElementById("mainInput").value = e.target.result
  }

  reader.readAsText(text)
}

function toggleSpelling(): void {
	document.getElementById('mainInput').spellcheck = document.getElementById('spellcheck').checked
}
