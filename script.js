function calcularDesempenho() {
	let m1Medio = parseFloat(document.getElementById("m1Medio").value) || 0;
	let qtdVendas = parseInt(document.getElementById("qtdVendas").value) || 0;
	let migracao = parseFloat(document.getElementById("migracao").value) || 0;

	let desempenho = (qtdVendas / 12) * 0.1 + (m1Medio / 15000) * 0.4 + (migracao / 60) * 0.5;
	desempenho *= 100;
	document.getElementById("desempenho").value = desempenho.toFixed(2);
}

function valorSemana(qtd) {
	if (qtd < 2) {
		return 0;
	} else if (qtd === 2) {
		return 100;
	} else if (qtd >= 3 && qtd < 5) {
		return 450;
	} else if (qtd >= 5 && qtd < 7) {
		return 550;
	} else {
		return 700;
	}
}

function calcularRebait(tpvMedio) {
	if (tpvMedio >= 25000) {
		return 0.20;
	} else if (tpvMedio >= 20000) {
		return 0.15;
	} else if (tpvMedio >= 15000) {
		return 0.075;
	} else if (tpvMedio >= 10000) {
		return 0.05;
	} else {
		return 0;
	}
}

function calcularPremiacaoTrimestral() {
	let qtdClientesTrim = parseInt(document.getElementById("qtdClientesTrim").value) || 0;
	let somaM1 = parseFloat(document.getElementById("somaM1").value) || 0;
	let somaM2 = parseFloat(document.getElementById("somaM2").value) || 0;
	let somaM3 = parseFloat(document.getElementById("somaM3").value) || 0;

	let tpvMedio = 0;
	if (qtdClientesTrim > 0) {
		tpvMedio = (somaM1 + somaM2 + somaM3) / (3 * qtdClientesTrim);
	}

	let rebait = calcularRebait(tpvMedio);

	document.getElementById("tpvMedioTrim").value = "R$ " + tpvMedio.toFixed(2);
	document.getElementById("rebaitTrim").value = rebait.toFixed(3) + "%";
}

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
	let qtdClientesTrim = parseInt(document.getElementById("qtdClientesTrim").value) || 0;
	let somaM1 = parseFloat(document.getElementById("somaM1").value) || 0;
	let somaM2 = parseFloat(document.getElementById("somaM2").value) || 0;
	let somaM3 = parseFloat(document.getElementById("somaM3").value) || 0;

	let mult15k = 0;
	let mult20k = 0;
	let mult25k = 0;
	let ds = 0;

	// Definição do valor de cada semana
	let valorsemana1 = valorSemana(semana1);
	let valorsemana2 = valorSemana(semana2);
	let valorsemana3 = valorSemana(semana3);
	let valorsemana4 = valorSemana(semana4);
	let valorsemana5 = valorSemana(semana5);

	// Definição do valor de Premiação
	let valorPremiacao = valorsemana1 + valorsemana2 + valorsemana3 + valorsemana4 + valorsemana5;

	// Salário fixo e ajuda de custo
	const salarioFixo = 1851.77;
	const ajudaCusto = 900.00;

	// Escolher a base de cálculo
	if (m1Medio < 15000 || qtdVendas < 8 || migracao < 35) {
		mult15k = 0;
		mult20k = 0;
		mult25k = 0;
	} else {
		if (migracao >= 35 && migracao < 60) {
			if (qtdVendas >= 8 && qtdVendas < 10) {
				mult15k = 5;
				mult20k = 10;
				mult25k = 20;
			} else if (qtdVendas >= 10 && qtdVendas < 12) {
				mult15k = 15;
				mult20k = 30;
				mult25k = 60;
			} else if (qtdVendas >= 12) {
				mult15k = 25;
				mult20k = 50;
				mult25k = 80;
			}
		} else {
			if (qtdVendas >= 8 && qtdVendas < 10) {
				mult15k = 30;
				mult20k = 50;
				mult25k = 80;
			} else if (qtdVendas >= 10 && qtdVendas < 12) {
				mult15k = 60;
				mult20k = 120;
				mult25k = 250;
			} else if (qtdVendas >= 12) {
				mult15k = 80;
				mult20k = 160;
				mult25k = 300;
			}
		}
	}

	// Valor desempenho
	if (desempenho < 85) {
		ds = 0;
	} else if (desempenho >= 85 && desempenho < 90) {
		ds = 0.05;
	} else if (desempenho >= 90 && desempenho < 100) {
		ds = 0.075;
	} else if (desempenho >= 100 && desempenho < 120) {
		ds = 0.1;
	} else if (desempenho >= 120 && desempenho < 150) {
		ds = 0.2;
	} else if (desempenho >= 150) {
		ds = 0.5;
	}

	// Valor de comissão
	let valorComissao = qtd15k * mult15k + qtd20k * mult20k + qtd25k * mult25k;
	let valorFinal = valorComissao * (1 + ds);

	// Premiação Trimestral
	let somaTotalM = somaM1 + somaM2 + somaM3;
	let tpvMedio = qtdClientesTrim > 0 ? somaTotalM / (3 * qtdClientesTrim) : 0;
	let rebait = calcularRebait(tpvMedio);
	let valorPremiacaoTrimestral = somaTotalM * (rebait / 100);

	// Soma final
	let totalRV = salarioFixo + ajudaCusto + valorPremiacao + valorFinal + valorPremiacaoTrimestral;

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
		<p><strong>Valor Premiação Trimestral:</strong> <span>R$ ${valorPremiacaoTrimestral.toFixed(2)}</span></p>
        <p><strong>Total Final:</strong> <span>R$ ${totalRV.toFixed(2)}</span></p>
    `;
}