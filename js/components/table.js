import { calcularTotal } from "../utils/helpers.js";

export function renderTabela(pedidos) {
    const tbody = document.getElementById("tabelaPedidos");
    tbody.innerHTML = "";

    pedidos.forEach(p => {
        const total = calcularTotal(p);

        const row = `
            <tr>
                <td>${p.pedido}</td>
                <td>${p.cliente}</td>
                <td>${p.data_embarque}</td>
                <td>${p.produto}</td>
                <td>${p.quantidade}</td>
                <td>${p.valor_unitario}</td>
                <td>${total}</td>
            </tr>
        `;

        tbody.innerHTML += row;
    });
}

export function popularFiltro(pedidos) {
    const select = document.getElementById("filtroCliente");
    const clientes = [...new Set(pedidos.map(p => p.cliente))];

    clientes.forEach(cliente => {
        const option = document.createElement("option");
        option.value = cliente;
        option.textContent = cliente;
        select.appendChild(option);
    });
}
