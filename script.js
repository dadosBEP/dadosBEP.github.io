function calcularRV() {
    let prod = parseFloat(document.getElementById("prod").value) || 0;
    let clientes = parseInt(document.getElementById("clientes").value) || 0;
    let visitas = parseInt(document.getElementById("visitas").value) || 0;
    let m1_medio = parseFloat(document.getElementById("m1_medio").value) || 0;
    let clientes_m1 = parseInt(document.getElementById("clientes_m1").value) || 0;
    let m2_medio = parseFloat(document.getElementById("m2_medio").value) || 0;
    let clientes_m2 = parseInt(document.getElementById("clientes_m2").value) || 0;
    
    let valorComissao = 0;

    // Definição do valor comissão 
    if (prod < 0.3) {
        valorComissao = 0;
    } else if (visitas < 18) {
        valorComissao = clientes*20;
    } else {
        valorComissao = clientes*50;
    }

    // Definição do valor base para premiação
    let valorBase = 0;
    if (clientes <= 10) {
        valorBase = 12;
    } else if (clientes >= 11 && clientes <= 15) {
        valorBase = 18;
    } else if (clientes >= 16 && clientes <= 20) {
        valorBase = 21;
    } else {
	valorBase = 30;
    }

    
    // Definição do valor premiação
    let valorPremiacao = 0;
    if (m1_medio < 10000 && m2_medio < 10000) { 
	valorPremiacao = 0;
    } else if (m1_medio >= 10000 && m2_medio < 10000) {
	valorPremiacao = clientes_m1*valorBase;
    } else if (m1_medio < 10000 && m2_medio >= 10000) {
	valorPremiacao = clientes_m2*valorBase;
    } else {
	valorPremiacao = clientes_m1*valorBase + clientes_m2*valorBase;    
    }
    

    // Definição do valor premiação bônus
    let bonus = 0;
    if (prod >= 0.5 && m1_medio >= 15000) {
        bonus = 500;
    } else if (prod >= 0.3 && m1_medio >= 10000) {
        bonus = 200; 
    }

    // Salário fixo e ajuda de custo
    const salarioFixo = 1686.14;
    const ajudaCusto = 850.00;
	
    // Soma final
    let totalRV = salarioFixo + ajudaCusto + valorComissao + valorPremiacao + bonus;

    // Exibição dos resultados separados
    document.getElementById("resultado").innerHTML = `
        <h3>Resultado:</h3>
        <p><strong>Salário Fixo:</strong> <span>R$ ${salarioFixo.toFixed(2)}</span></p>
        <p><strong>Ajuda de Custo:</strong> <span>R$ ${ajudaCusto.toFixed(2)}</span></p>
        <p><strong>Valor Comissão:</strong> <span>R$ ${valorComissao.toFixed(2)}</span></p>
        <p><strong>Valor Premiação:</strong> <span>R$ ${valorPremiacao.toFixed(2)}</span></p>
        <p><strong>Valor Bônus:</strong> <span>R$ ${bonus.toFixed(2)}</span></p>
        <p><strong>Total Final:</strong> <span>R$ ${totalRV.toFixed(2)}</span></p>
    `;
}
