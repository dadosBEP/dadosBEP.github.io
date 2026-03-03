function calcularRV() {
	let semana1 = parseInt(document.getElementById("semana1").value) || 0;
	let semana2 = parseInt(document.getElementById("semana2").value) || 0;
	let semana3 = parseInt(document.getElementById("semana3").value) || 0;
	let semana4 = parseInt(document.getElementById("semana4").value) || 0;
	let semana5 = parseInt(document.getElementById("semana5").value) || 0;
	let m1Medio = parseFloat(document.getElementById("m1Medio").value) || 0;
	let qtdVendas = parseInt(document.getElementById("qtdVendas").value) || 0;
	let migracao = parseFloat(document.getElementById("migracao").value) || 0;
	let desempenho = parseFloat(document.getElementById("desempenho").value) || 0;
	let qtd15k = parseInt(document.getElementById("qtd15k").value) || 0;
	let qtd20k = parseInt(document.getElementById("qtd20k").value) || 0;
	let qtd25k = parseInt(document.getElementById("qtd25k").value) || 0;
    
	let valorsemana1 = 0;
	let valorsemana2 = 0;
	let valorsemana3 = 0;
	let valorsemana4 = 0;
	let valorsemana5 = 0;
	let mult15k = 0;
	let mult20k = 0;
	let mult25k = 0;
	let desem = 0;
	
	// Definição do valor Semana1
	if (semana1 < 2) {
		valorsemana1 = 0;
	} else if (semana1 >= 2 & semana1 < 3) {
		valorsemana1 = 100;
	} else if (semana1 >= 3 & semana1 < 5) {
		valorsemana1 = 450;
	} else if (semana1 >= 5 & semana1 < 7) {
		valorsemana1 = 550;
	} else if (semana1 >= 7) {
		valorsemana1 = 700;
	}
	
	// Definição do valor semana2
	if (semana2 < 2) {
		valorsemana2 = 0;
	} else if (semana2 >= 2 & semana2 < 3) {
		valorsemana2 = 100;
	} else if (semana2 >= 3 & semana2 < 5) {
		valorsemana2 = 450;
	} else if (semana2 >= 5 & semana2 < 7) {
		valorsemana2 = 550;
	} else if (semana2 >= 7) {
		valorsemana2 = 700;
	}

	// Definição do valor semana3
	if (semana3 < 2) {
		valorsemana3 = 0;
	} else if (semana3 >= 2 & semana3 < 3) {
		valorsemana3 = 100;
	} else if (semana3 >= 3 & semana3 < 5) {
		valorsemana3 = 450;
	} else if (semana3 >= 5 & semana3 < 7) {
		valorsemana3 = 550;
	} else if (semana3 >= 7) {
		valorsemana3 = 700;
	}
	
	// Definição do valor semana4
	if (semana4 < 2) {
		valorsemana4 = 0;
	} else if (semana4 >= 2 & semana4 < 3) {
		valorsemana4 = 100;
	} else if (semana4 >= 3 & semana4 < 5) {
		valorsemana4 = 450;
	} else if (semana4 >= 5 & semana4 < 7) {
		valorsemana4 = 550;
	} else if (semana4 >= 7) {
		valorsemana4 = 700;
	}

	// Definição do valor semana5
	if (semana5 < 2) {
		valorsemana5 = 0;
	} else if (semana5 >= 2 & semana5 < 3) {
		valorsemana5 = 100;
	} else if (semana5 >= 3 & semana5 < 5) {
		valorsemana5 = 450;
	} else if (semana5 >= 5 & semana5 < 7) {
		valorsemana5 = 550;
	} else if (semana5 >= 7) {
		valorsemana5 = 700;
	}

	// Definição do valor de Premiação
	let valorPremiacao = valorsemana1 + valorsemana2 + valorsemana3 + valorsemana4 + valorsemana5;
	
    // Salário fixo e ajuda de custo
    const salarioFixo = 1851.77;
    const ajudaCusto = 900.00;

	//Escolher a base de cálculo
	if (m1Medio < 10000) {
		0
	} else
		if (migracao < 25) {
			if (qtdVendas >= 8 & qtdVendas <10){
				mult15k = 10;
				mult20k = 20;
				mult25k = 40;
			} else if (qtdVendas >= 10 & qtdVendas <12){
				mult15k = 30;
				mult20k = 60;
				mult25k = 120;
			} else if (qtdVendas >= 12){
				mult15k = 50;
				mult20k = 100;
				mult25k = 160;
			}	
		} else 
			if (qtdVendas >= 8 & qtdVendas <10){
				mult15k = 30;
				mult20k = 50;
				mult25k = 80;
			} else if (qtdVendas >= 10 & qtdVendas <12){
				mult15k = 60;
				mult20k = 120;
				mult25k = 250;
			} else if (qtdVendas >= 12){
				mult15k = 80;
				mult20k = 160;
				mult25k = 300;
			}
		}

	// Valor desempenho
	if (desempenho < 85) {
		desem = 0;
	} else if (desempenho >= 85 & desempenho < 90) {
		desem = 0.05;
	} else if (desempenho >= 90 & desempenho < 100) {
		desem = 0.075;
	} else if (desempenho >= 100 & desempenho < 120) {
		desem = 0.1;
	} else if (desempenho >= 120 & desempenho < 150) {
		desem = 0.2;
	} else if (desempenho >= 150) {
		desem = 0.5;
	}

	// Valor de comissão
	let valorComissao = qtd15k*mult15k + qtd20k*mult20k + qtd25k*mult25k;
	let valorFinal = valorComissao * (1+desem);
	
    // Soma final
    let totalRV = salarioFixo + ajudaCusto + valorPremiacao + valorFinal;

    // Exibição dos resultados separados
    document.getElementById("resultado").innerHTML = `
        <h3>Resultado:</h3>
        <p><strong>Salário Fixo:</strong> <span>R$ ${salarioFixo.toFixed(2)}</span></p>
        <p><strong>Ajuda de Custo:</strong> <span>R$ ${ajudaCusto.toFixed(2)}</span></p>
		<p><strong>Semana 1:</strong> <span>R$ ${valorsemana1.toFixed(2)}</span></p>
		<p><strong>Semana 2:</strong> <span>R$ ${valorsemana2.toFixed(2)}</span></p>
		<p><strong>Semana 3:</strong> <span>R$ ${valorsemana3.toFixed(2)}</span></p>
		<p><strong>Semana 4:</strong> <span>R$ ${valorsemana4.toFixed(2)}</span></p>
		<p><strong>Semana 5:</strong> <span>R$ ${valorsemana5.toFixed(2)}</span></p>
        <p><strong>Valor Premiação:</strong> <span>R$ ${valorPremiacao.toFixed(2)}</span></p>
		<p><strong>Valor Comissão:</strong> <span>R$ ${valorFinal.toFixed(2)}</span></p>
        <p><strong>Total Final:</strong> <span>R$ ${totalRV.toFixed(2)}</span></p>
    `;
}

