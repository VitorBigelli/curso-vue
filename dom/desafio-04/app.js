new Vue({
	el: '#desafio',
	data: {
		efeito: false,
		classeUsuario: '',
		aplicarClasseUsuario: 'false',
		backgroundColor: '',
		size: 0,
		progress: 0
	},
	computed: {
		classe1() {
			return 'classe1'
		},
		classe2() {
			return 'classe2'
		},
		meuEstilo() {
			return {
				backgroundColor: this.backgroundColor,
				width: this.size, 
				height: this.size
			}
		}
	},
	methods: {
		iniciarEfeito() {
			setInterval( () => {
				this.efeito = !this.efeito
			}, 1000)
		},
		iniciarProgresso() { 
			setInterval( () => {
				if (this.progress < 100) {
					this.progress++
				} else {
					this.progress = 0
					clearInterval()
				} 
			}, 1000)
		}
	}
})
