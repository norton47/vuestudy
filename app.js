new Vue ({
   el: '#app',
    data: {
       title: 'HW'
    },
    methods: {
        changeTitle: function (event) {
            this.title = event.target.value
        }
    }
});