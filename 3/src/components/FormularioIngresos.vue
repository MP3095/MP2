<template>
    <div>
        <h2>Registrar Ingreso/Gasto</h2>
        <form @submit.prevent="submitForm">
            <div>
                <label for="tipo">Tipo:</label>
                <select v-model="tipo" id="tipo">
                    <option value="ingreso">Ingreso</option>
                    <option value="gasto">Gasto</option>
                </select>
            </div>
            <div>
                <label for="descripcion">Descripción:</label>
                <input type="text" v-model="descripcion" id="descripcion" required />
            </div>
            <div>
                <label for="monto">Monto:</label>
                <input type="number" v-model="monto" id="monto" required />
            </div>
            <button type="submit">Agregar</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'RegistroTransaccion',
    data() {
        return {
            tipo: 'ingreso',
            descripcion: '',
            monto: null
        };
    },
    methods: {
        submitForm() {
            const transaccion = {
                tipo: this.tipo,
                descripcion: this.descripcion,
                monto: parseFloat(this.monto)
            };
            this.$emit('agregar-transaccion', transaccion);
            this.tipo = 'ingreso';
            this.descripcion = '';
            this.monto = null;
        }
    }
};
</script>

<style>
form {
    display: flex;
    flex-direction: column;
}

form div {
    margin-bottom: 1rem;
}

button {
    align-self: flex-start;
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>