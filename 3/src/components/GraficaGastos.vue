<template>
    <div>
        <h2>Seguimiento de Gastos</h2>
        <canvas id="GraficaGastos"></canvas>
    </div>
</template>

<script>
import { Chart } from 'chart.js';

export default {
    props: ['transacciones'],
    mounted() {
        this.renderChart();
    },
    watch: {
        transacciones() {
            this.renderChart();
        }
    },
    methods: {
        renderChart() {
            const ctx = document.getElementById('GraficaGastos').getContext('2d');
            const ingresos = this.transacciones.filter(t => t.tipo === 'ingreso').reduce((sum, t) => sum + t.monto, 0);
            const gastos = this.transacciones.filter(t => t.tipo === 'gasto').reduce((sum, t) => sum + t.monto, 0);

            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Ingresos', 'Gastos'],
                    datasets: [{
                        label: 'Monto',
                        data: [ingresos, gastos],
                        backgroundColor: ['#4CAF50', '#F44336']
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            });
        }
    }
};
</script>

<style>
#GraficaGastos {
    width: 100%;
    height: 400px;
}
</style>