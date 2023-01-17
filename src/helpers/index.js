const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP'
    });
    return formatter.format(valor)
}

const calcularPropina = (cantidad, propina) => {
    let total;
    total = cantidad * propina
    return total;
  
}

const calcularTotal = (cantidad, propina) => {
    let total;
    total = cantidad * (propina + 1)

    return total;
}

export { calcularPropina, formatearDinero, calcularTotal }