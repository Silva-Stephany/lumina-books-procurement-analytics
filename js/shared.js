// ========================================
// LUMINA BOOKS - FUNÇÕES COMPARTILHADAS
// ========================================


// Formatação de moeda
function formatarMoeda(valor) {

    return Number(valor).toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );

}


// Formatação de números
function formatarNumero(valor) {

    return Number(valor).toLocaleString("pt-BR");

}


// Lê um arquivo CSV
async function carregarCSV(caminho) {

    const resposta = await fetch(caminho);

    const texto = await resposta.text();

    const linhas = texto
        .trim()
        .split("\n");

    const cabecalho = linhas[0]
        .replace("\r", "")
        .split(",");

    const dados = linhas
        .slice(1)
        .filter(linha => linha.trim() !== "")
        .map(linha => {

            const valores = linha
                .replace("\r", "")
                .split(",");

            const objeto = {};

            cabecalho.forEach((coluna, indice) => {

                objeto[coluna] = valores[indice];

            });

            return objeto;

        });

    return dados;

}


// Soma valores de uma coluna
function somar(dados, coluna) {

    return dados.reduce(
        (total, item) =>
            total + Number(item[coluna] || 0),
        0
    );

}


// Agrupa e soma valores
function agruparESomar(dados, campoGrupo, campoValor) {

    const resultado = {};

    dados.forEach(item => {

        const grupo = item[campoGrupo];

        const valor =
            Number(item[campoValor] || 0);

        if (!resultado[grupo]) {

            resultado[grupo] = 0;

        }

        resultado[grupo] += valor;

    });

    return resultado;

}
