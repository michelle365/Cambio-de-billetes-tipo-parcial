class cl_cliente {
  constructor(n, b, cd50, cd20, cd10) {
    this.nombre = n;
    this.billete = b;
    this.cambiode50 = cd50;
    this.cambiode20 = cd20;
    this.cambiode10 = cd10;
  }

  cantidadbilletes() {
    return this.cambiode50 + this.cambiode20 + this.cambiode10;
  }
}
class cl_casamoneda {
  constructor() {
    this.acummontototalcambio = 0;
    this.cantidadinicial50 = 6;
    this.cantidadinicial20 = 10;
    this.cantidadinicial10 = 20;
    this.acumbilletes50 = 0;
    this.acumbilletes20 = 0;
    this.acumbilletes10 = 0;
    this.contbilletes100 = 0;
  }
  procesar(c) {
    this.acummontototalcambio += c.billete;

    if (c.billete == 100) this.contbilletes100++;
    this.acumbilletes50 += c.cambiode50;

    this.acumbilletes20 += c.cambiode20;

    this.acumbilletes10 += c.cambiode10;
  }

  billetesquedaron50() {
    return this.cantidadinicial50 - this.acumbilletes50;
  }
  billetesquedaron20() {
    return this.cantidadinicial20 - this.acumbilletes20;
  }
  billetesquedaron10() {
    return this.cantidadinicial10 - this.acumbilletes10;
  }
}
let cliente1 = new cl_cliente("Luis", 100, 2, 0, 0);
let cliente2 = new cl_cliente("Ana", 50, 0, 2, 1);
let cliente3 = new cl_cliente("Jose", 100, 0, 4, 2);
let cliente4 = new cl_cliente("Carmen", 20, 0, 0, 2);
let cliente5 = new cl_cliente("Eva", 50, 0, 1, 3);

let casamoneda = new cl_casamoneda();
casamoneda.procesar(cliente1);
casamoneda.procesar(cliente2);
casamoneda.procesar(cliente3);
casamoneda.procesar(cliente4);
casamoneda.procesar(cliente5);

let salida = document.getElementById("salida");

salida.innerHTML = `Resultados
<br> ${cliente1.nombre} se llevo ${cliente1.cantidadbilletes()}
<br> ${cliente2.nombre} se llevo ${cliente2.cantidadbilletes()}
<br> ${cliente3.nombre} se llevo ${cliente3.cantidadbilletes()}
<br> ${cliente4.nombre} se llevo ${cliente4.cantidadbilletes()}
<br> ${cliente5.nombre} se llevo ${cliente5.cantidadbilletes()}
<br>
<br>
<br> Se cambiaron ${casamoneda.acummontototalcambio}
<br> Quedaron ${casamoneda.contbilletes100} billetes de 100$
<br> Quedaron ${casamoneda.billetesquedaron50()}  billetes  de 50$
<br> Quedaron ${casamoneda.billetesquedaron20()} billetes  de 20$
<br> Quedaron ${casamoneda.billetesquedaron10()}  billetes  de 10$




`;
