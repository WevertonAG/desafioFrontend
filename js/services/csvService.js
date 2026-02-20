export async function carregarPedidos() {
    try {

        // 
        const response = await fetch("../data/pedidos.csv");

        // Verifica se a resposta HTTP foi bem-sucedida
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status} - ${response.statusText}`);
        }

        const texto = await response.text();

        // Valida conteúdo vazio
        if (!texto.trim()) {
            throw new Error("Arquivo CSV está vazio.");
        }

        return parseCSV(texto);

    } catch (error) {
        console.error("Erro ao carregar pedidos:", error);

        // Retorna array vazio para não quebrar a aplicação
        return [];
    }
}

function parseCSV(texto) {
    const linhas = texto.trim().split(/\r?\n/);

    // Detecta automaticamente separador
    const separador = linhas[0].includes(";") ? ";" : ",";

    const cabecalho = linhas.shift().split(separador);

    return linhas.map(linha => {
        const valores = linha.split(separador);
        let obj = {};

        cabecalho.forEach((col, i) => {
            obj[col.trim()] = valores[i]?.trim();
        });

        // Normalização segura de número
        const normalizarNumero = (valor) => {
            if (!valor) return 0;

            return Number(
                valor
                    .replace(/\s/g, "")       // remove espaços
                    .replace(/\./g, "")       // remove milhar
                    .replace(",", ".")        // decimal padrão JS
            );
        };

        obj.quantidade = normalizarNumero(obj.quantidade);
        obj.valor_unitario = normalizarNumero(obj.valor_unitario);

        obj.total = obj.quantidade * obj.valor_unitario;

        return obj;
    });
}

