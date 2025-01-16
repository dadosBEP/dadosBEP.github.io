document.getElementById('sales-form').addEventListener('submit', function (event) {
        event.preventDefault();

        // Quantidade de vendas, tratado como 0 se estiver vazio
        const sales = parseInt(document.getElementById('sales').value) || 0;

        // Valores dos campos de TPV, tratados como 0 se estiverem vazios
        const campo1 = parseInt(document.getElementById('campo1').value) || 0;
        const campo2 = parseInt(document.getElementById('campo2').value) || 0;
        const campo3 = parseInt(document.getElementById('campo3').value) || 0;
        const campo4 = parseInt(document.getElementById('campo4').value) || 0;
        const campo5 = parseInt(document.getElementById('campo5').value) || 0;
        const campo6 = parseInt(document.getElementById('campo6').value) || 0;

        // Cálculo do valor de vendas com base na quantidade de vendas
        let valorVendas = 0;
        if (sales >= 10 && sales < 13) {
            valorVendas = 120;
        } else if (sales >= 13 && sales < 16) {
            valorVendas = 320;
        } else if (sales >= 16 && sales < 21) {
            valorVendas = 450;
        } else if (sales >= 21) {
            valorVendas = 450 + (sales - 20) * 25;
        }

        // Cálculo do valor de TPV
        const valorTPV = (campo1 * 0) + (campo2 * 50) + (campo3 * 85) + (campo4 * 135) + (campo5 * 160) + (campo6 * 200);

        // Valores do TPV Trimestral
        const tpvTotal = parseFloat(document.getElementById('tpv-total').value) || 0;
        const tpvMedio = parseFloat(document.getElementById('tpv-medio').value) || 0;
        const qualidade = parseFloat(document.getElementById('qualidade-cadastro').value) || 0;
        const migracao = parseFloat(document.getElementById('migracao').value) || 0;
        const ativacao = parseFloat(document.getElementById('ativacao').value) || 0;

        // Determinação das faixas do TPV Médio
        let percentualTPV = 0;
	if (tpvMedio < 4000) {
	    percentualTPV = 0;
        } else if (tpvMedio >= 4000 && tpvMedio < 6000) {
            percentualTPV = 0.00025;
        } else if (tpvMedio >= 6000 && tpvMedio < 11000) {
            percentualTPV = 0.0005;
        } else if (tpvMedio >= 11000 && tpvMedio < 15000) {
            percentualTPV = 0.00075;
        } else if (tpvMedio >= 15000) {
            percentualTPV = 0.0015;
        }

        // Determinação das faixas de qualidade, migração e ativação
        function calcularFaixa(percentual) {
	    if (percentual < 40) {
		return 0;
            } else if (percentual >= 40 && percentual < 60) {
                return 0.1;
            } else if (percentual >= 60 && percentual < 80) {
                return 0.25;
            } else if (percentual >= 80) {
                return 0.5;
            }
            return 0;
        }

        const faixaQualidade = calcularFaixa(qualidade);
        const faixaMigracao = calcularFaixa(migracao);
        const faixaAtivacao = calcularFaixa(ativacao);

        // Cálculo do valor X
        const valorX = tpvTotal * percentualTPV;

        // Cálculo do valor final trimestral
        const valorTrimestral = valorX * (1 + (faixaQualidade + faixaMigracao + faixaAtivacao));

        // Salário fixo e ajuda de custo
        const salarioFixo = 1602.79;
        const ajudaCusto = 850.00;

        // Cálculo do valor total
        const valorTotal = salarioFixo + ajudaCusto + valorVendas + valorTPV + valorTrimestral;

        // Exibição do resultado
        document.getElementById('result').innerHTML = `
            <h3>Resultado:</h3>
            <p><strong>Salário Fixo:</strong> R$ ${salarioFixo.toFixed(2)}</p>
            <p><strong>Ajuda de Custo:</strong> R$ ${ajudaCusto.toFixed(2)}</p>
            <p><strong>Valor de Vendas:</strong> R$ ${valorVendas.toFixed(2)}</p>
            <p><strong>Valor de TPV:</strong> R$ ${valorTPV.toFixed(2)}</p>
            <p><strong>Valor Trimestral:</strong> R$ ${valorTrimestral.toFixed(2)}</p>
            <p><strong>Valor Total:</strong> R$ ${valorTotal.toFixed(2)}</p>
        `;
    });