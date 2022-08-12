class Contador {
  static cuentaGlobal = 0;
  constructor(nombre) {
    this.nombre = nombre;
    this.cuentaIndividual = 0;
  }
  obtenerResponsable() {
    return this.nombre;
  }
  obtenerCuentaIndividual() {
    return this.ctaIndividual;
  }
  obtenerCuentaGlobal() {
    return Contador.cuentaGlobal;
  }
  contar() {
    this.ctaIndividual++;
    Contador.cuentaGlobal++;
  }
}
