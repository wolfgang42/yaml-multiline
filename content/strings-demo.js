(function() {
	function radioValue(elements) {
		for (var i = 0; i < elements.length; i++) {
			if (elements[i].checked) return elements[i].value
		}
	}
	var form = document.getElementById('control-form')
	var indentIndication = document.getElementById('indent-indication')
	function updateDisplay() {
		['literal', 'folded', 'clip', 'strip', 'keep', 'indicate-indent'].forEach(function(cls) {
			document.body.classList.remove('yaml-'+cls)
		})
		document.body.classList.add('yaml-'+radioValue(form.elements.chomping))
		document.body.classList.add('yaml-'+radioValue(form.elements.blockstyle))
		if (form.elements.indicateIndent.checked) {
			document.body.classList.add('yaml-indicate-indent')
		}
		indentIndication.innerHTML = form.elements.indent.value
		var indents = document.getElementsByClassName('indent')
		var indentCount = form.elements.indent.value
		if (indentCount > 9 || indentCount <= 0) {
			indentCount = 2
		}
		var indentation = '·'.repeat(indentCount)
		for (var i = 0; i < indents.length; i++) {
			indents[i].innerHTML = indentation
		}
	}
	window.updateYamlDisplay = updateDisplay
	form.addEventListener('change', updateDisplay)
	updateDisplay()
})()
