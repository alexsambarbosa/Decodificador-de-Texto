function ocultarConteudo() {
	document.getElementById("right-text").style.display = "none";
	document.getElementById("right-button").style.display = "none";
	document.getElementById("right-button-btn").style.display = "none";

	document.getElementById("btn-1").disabled = true;
	document.getElementById("btn-2").disabled = true;
}

function ocultarConteudoImagem() {
	document.getElementById("right-img").style.display = "none";
	document.getElementById("right-title").style.display = "none";
	document.getElementById("right-p").style.display = "none";


	document.getElementById("right-text").style.display = 'block';
	document.getElementById("right-button").style.display = 'block';
	document.getElementById("right-button-btn").style.display = "block";
}

function ativarBotoes() {
	document.getElementById("btn-1").disabled = false;
	document.getElementById("btn-2").disabled = false;
}

function criptografarTexto() {
	ocultarConteudoImagem();
	let texto = document.getElementById('left-text').value;
	let right_text = document.getElementById('right-text');
	let newText = texto
		.replace(/e/g, 'enter')
		.replace(/i/g, 'imes')
		.replace(/a/g, 'ai')
		.replace(/o/g, 'ober')
		.replace(/u/g, 'ufat');

	right_text.innerText = newText;
	// console.log(`Texto criptogrado: ${newText}`);
	document.getElementById('left-text').value = '';
}

function descriptografarTexto() {
	ocultarConteudoImagem();
	texto = document.getElementById('left-text').value;
	right_text = document.getElementById('right-text');
	newText = texto
		.replace(/enter/g, 'e')
		.replace(/imes/g, 'i')
		.replace(/ai/g, 'a')
		.replace(/ober/g, 'o')
		.replace(/ufat/g, 'u');

	right_text.innerText = newText;
	// console.log(`Texto descriptogrado: ${newText}`);
	document.getElementById('left-text').value = '';
}

function copiarTexto() {
	right_text = document.getElementById('right-text');
	right_text.select();
	right_text.setSelectionRange(0, 99999);

	navigator.clipboard.writeText(right_text.value);
	right_text.innerText = 'Texto copiado!';
}
