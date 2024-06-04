<template>
  <div id="app">
    <header>
      <h1>Gestor de Finanzas Personales</h1>
    </header>
    <main>
      <FormularioIngresos @agregar-transaccion="agregarTransaccion" />
      <HistorialFinanciero :transacciones="transacciones" />
      <GraficaGastos :transacciones="transacciones" />
    </main>
  </div>
</template>

<script>
import FormularioIngresos from './components/FormularioIngresos.vue';
import HistorialFinanciero from './components/HistorialFinanciero.vue';
import GraficaGastos from './components/GraficaGastos.vue';

export default {
  name: 'App',
  components: {
    FormularioIngresos,
    HistorialFinanciero,
    GraficaGastos
  },
  data() {
    return {
      transacciones: []
    };
  },
  methods: {
    agregarTransaccion(transaccion) {
      this.transacciones.push(transaccion);
    }
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f9fa;
}

header {
  background-color: #343a40;
  color: white;
  text-align: center;
  padding: 1rem;
}

main {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>