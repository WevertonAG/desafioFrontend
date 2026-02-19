export function calcularTotal(pedido) {
    return pedido.quantidade * pedido.valor_unitario;
}

export function ordenarPorTotal(pedidos) {
    return [...pedidos].sort((a, b) =>
        calcularTotal(b) - calcularTotal(a)
    );
}

export function filtrarPorCliente(pedidos, cliente) {
    if (cliente === "todos") return pedidos;
    return pedidos.filter(p => p.cliente === cliente);
}
