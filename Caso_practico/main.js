function calcular() {
    const precios = { 
        chasis: 10, 
        motor: 20, 
        ruedas: 1, 
        adornos: 2 
    };

    const cantidades = {
        chasis: parseInt(document.getElementById('chasis').value) || 0,
        motores: parseInt(document.getElementById('motores').value) || 0,
        ruedas: parseInt(document.getElementById('ruedas').value) || 0,
        adornos: parseInt(document.getElementById('adornos').value) || 0
    };

    const subtotales = {
        chasis: cantidades.chasis * precios.chasis,
        motor: cantidades.motores * precios.motor,
        ruedas: cantidades.ruedas * precios.ruedas,
        adornos: cantidades.adornos * precios.adornos
    };

    function calcularDescuento(cantidad, rango1, rango2) {
        if (cantidad > rango2) {
            return 0.10; 
        } else if (cantidad >= rango1) {
            return 0.05; 
        } else {
            return 0; 
        }
    }

    const descuentos = {
        chasis: calcularDescuento(cantidades.chasis, 100, 200) * subtotales.chasis,
        motor: calcularDescuento(cantidades.motores, 100, 200) * subtotales.motor,
        ruedas: calcularDescuento(cantidades.ruedas, 300, 500) * subtotales.ruedas,
        adornos: calcularDescuento(cantidades.adornos, 300, 500) * subtotales.adornos
    };

    const totales = {
        chasis: subtotales.chasis - descuentos.chasis,
        motor: subtotales.motor - descuentos.motor,
        ruedas: subtotales.ruedas - descuentos.ruedas,
        adornos: subtotales.adornos - descuentos.adornos
    };

    const totalCompra = Object.values(totales).reduce((a, b) => a + b, 0);

    const autosCompletos = Math.min(
        cantidades.chasis, 
        cantidades.motores, 
        Math.floor(cantidades.ruedas / 4), 
        Math.floor(cantidades.adornos / 2)
    );

    document.getElementById('subtotalChasis').textContent = `Subtotal Chasis: $${subtotales.chasis.toFixed(2)}`;
    document.getElementById('descuentoChasis').textContent = `Descuento Chasis: $${descuentos.chasis.toFixed(2)}`;
    document.getElementById('totalChasis').textContent = `Total Chasis: $${totales.chasis.toFixed(2)}`;

    document.getElementById('subtotalMotor').textContent = `Subtotal Motor: $${subtotales.motor.toFixed(2)}`;
    document.getElementById('descuentoMotor').textContent = `Descuento Motor: $${descuentos.motor.toFixed(2)}`;
    document.getElementById('totalMotor').textContent = `Total Motor: $${totales.motor.toFixed(2)}`;

    document.getElementById('subtotalRuedas').textContent = `Subtotal Ruedas: $${subtotales.ruedas.toFixed(2)}`;
    document.getElementById('descuentoRuedas').textContent = `Descuento Ruedas: $${descuentos.ruedas.toFixed(2)}`;
    document.getElementById('totalRuedas').textContent = `Total Ruedas: $${totales.ruedas.toFixed(2)}`;

    document.getElementById('subtotalAdornos').textContent = `Subtotal Adornos: $${subtotales.adornos.toFixed(2)}`;
    document.getElementById('descuentoAdornos').textContent = `Descuento Adornos: $${descuentos.adornos.toFixed(2)}`;
    document.getElementById('totalAdornos').textContent = `Total Adornos: $${totales.adornos.toFixed(2)}`;

    document.getElementById('totalCompra').textContent = `Total de la Compra: $${totalCompra.toFixed(2)}`;
    document.getElementById('autosCompletos').textContent = `Autos completos que se pueden armar: ${autosCompletos}`;

    document.getElementById('result').style.display = 'block';
}