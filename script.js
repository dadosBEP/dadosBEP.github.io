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

    // Salário fixo e ajuda de custo
    const salarioFixo = 1602.79;
    const ajudaCusto = 850.00;

    // Cálculo do valor total
    const valorTotal = salarioFixo + ajudaCusto + valorVendas + valorTPV;

    // Exibição do resultado
    document.getElementById('result').innerHTML = `
        <h3>Resultado:</h3>
        <p><strong>Salário Fixo:</strong> R$ ${salarioFixo.toFixed(2)}</p>
        <p><strong>Ajuda de Custo:</strong> R$ ${ajudaCusto.toFixed(2)}</p>
        <p><strong>Valor de Vendas:</strong> R$ ${valorVendas.toFixed(2)}</p>
        <p><strong>Valor de TPV:</strong> R$ ${valorTPV.toFixed(2)}</p>
        <p><strong>Valor Total:</strong> R$ ${valorTotal.toFixed(2)}</p>
    `;
});
