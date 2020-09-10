new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Alerta!')
        },
        atualizar(event) {
            this.valor = event.target.value
        }
    }
})