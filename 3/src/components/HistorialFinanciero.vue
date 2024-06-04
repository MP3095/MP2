<template>
    <div>
        <h2>Historial Financiero</h2>
        <ul>
            <li v-for="(transaccion, index) in transacciones" :key="index">
                {{ transaccion.tipo }}: {{ transaccion.descripcion }} - ${{ transaccion.monto }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['transacciones']
};
</script>

<style>
ul {
    list-style-type: none;
    padding: 0;
}

li {
    padding: 0.5rem 0;
    border-bottom: 1px solid #ccc;
}
</style>