import { carregarPedidos } from "./services/csvService.js";
import { renderTabela, popularFiltro } from "./components/table.js";
import { filtrarPorCliente, ordenarPorTotal } from "./utils/controllers.js";

const state = { 
    pedidos: [],
    pedidosFiltrados: []
};

async function init() {
    state.pedidos = await carregarPedidos();
    state.pedidosFiltrados = state.pedidos;

    popularFiltro(state.pedidos);
    renderTabela(state.pedidos);

    configurarEventos();
}

function configurarEventos() {
    document.getElementById("filtroCliente")
        .addEventListener("change", (e) => {
            state.pedidosFiltrados = filtrarPorCliente(
                state.pedidos,
                e.target.value
            );
            renderTabela(state.pedidosFiltrados);
        });

    document.getElementById("ordenarValor")
        .addEventListener("click", () => {
            state.pedidosFiltrados = ordenarPorTotal(state.pedidosFiltrados);
            renderTabela(state.pedidosFiltrados);
        });
}

init();
