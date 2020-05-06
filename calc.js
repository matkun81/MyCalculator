
var app = new Vue ({
    el: '#app' ,
    data:{
        fuel:'',
        distance:'',
        consumption:'13.1',
        result:'',
        balance:''
    },
    methods:{
        calculate :function () {
            let result = this.distance * this.consumption/100;
            this.result = +result.toFixed(2);
            let balance = this.fuel-this.result;
            this.balance = +balance.toFixed(2);
        }
    }
})
