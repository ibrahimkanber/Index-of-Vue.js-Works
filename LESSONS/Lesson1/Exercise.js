new Vue({
    el:"#first",
    data:{
        name:"ibrahim",
        age:28,
        imageUrl:"https://picsum.photos/200/300",
        inputVal:"",
        inputVal2:""
    },
    methods:{
        generateNumber:()=>{
            return Math.random()
        },
        changeName:function(event){
           this.name=event.target.value
        },
        showMeAlert:function(){
            alert()
        },
        showInputValue:function(event){
          this.inputVal=event.target.value 
        },
        showInputValue2:function(event){
          this.inputVal2=event.target.value 
        }
    }
})