new Vue({
    el: '#desafio', 
    data: {
        nome: 'Vitor',
        idade: 25,
        imageUrl: 'https://vignette.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png/revision/latest/top-crop/width/360/height/360?cb=20160923150728'
    },
    methods: {
        randomNumber() {
            return Math.random()
        }
    }
})