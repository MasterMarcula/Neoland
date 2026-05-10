// IVA 21%
const fullIVA = total => total * 1.21;

// IVA reducido
const medioIVA = total => total * 1.105;

// Sin IVA
const sinIVA = total => total;

// Facturación
function facturar(total, cbCalculo) {
    console.log("Calculando total de la factura...\n");
    const resultado = cbCalculo(total);
    console.log("Monto: $" + total + " más IVA: $" + resultado + "\n");
}

facturar(100, fullIVA);
//facturar(100, medioIVA);
//facturar(100, sinIVA);