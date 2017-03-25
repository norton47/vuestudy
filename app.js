new Vue({
    el: '#app',
    data: {
        counter: 0,
        x: 0,
        y: 0,
        name: 'Oleg',

        counterNew: 0
    },
    methods: {
        increase: function (cou) {

            return this.counter += cou  ;
        },
        updateCoordinates: function (event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        dummy: function (event) {
            //Останавливает работу ивента
            event.stopPropagation();
        },
        alertMe: function (event) {
            alert(event.value);
        }

    },
    // Тригер для модели
    watch: {
        counterNew: function(value) {
            var vm = this;
            setTimeout(function () {
                vm.counterNew = 0;
            }, 2000)
        }
    },
    // Триггер как переменная, которую можно разместить в шаблоне
    computed: {
        output: function (){
            return this.counterNew > 5? "More then 5" : "Smoler then 5";
        }
    }
});