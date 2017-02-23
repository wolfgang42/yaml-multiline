(function() {
	var form = document.getElementById('control-form')
	var indentIndication = document.getElementById('indent-indication')
	function updateDisplay() {
		['literal', 'folded', 'clip', 'strip', 'keep', 'indicate-indent'].forEach(function(cls) {
			document.body.classList.remove('yaml-'+cls)
		})
		document.body.classList.add('yaml-'+form.elements.chomping.value)
		document.body.classList.add('yaml-'+form.elements.blockstyle.value)
		if (form.elements.indicateIndent.checked) {
			document.body.classList.add('yaml-indicate-indent')
		}
		indentIndication.innerHTML = form.elements.indent.value
		var indents = document.getElementsByClassName('indent')
		var indentation = '·'.repeat(form.elements.indent.value)
		for (var i = 0; i < indents.length; i++) {
			indents[i].innerHTML = indentation
		}
	}
	form.addEventListener('change', updateDisplay)
	updateDisplay()
})()
