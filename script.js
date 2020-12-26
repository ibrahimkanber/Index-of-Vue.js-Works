new Vue({
    el:"#app",
    
    data:{
    name:"",
    title:"Hello  VUE World 😀 ",
    link:"https://clarusway.com/",
    bloglink:"<a href='https://vuejs.org/'>Link</a>",
    counter1:0,
    counter:0,
    counternew:0,
    x:0,
    y:0,
    exercise3Value:0,
    resetDuration:0,
    attchedClass:false,
    attchedClassMiddleBox:false,
    color:"",
    newColor:"",
    height:100,
    width:100,
    selectedClass:"",
    flag:true,
    className:"",
    className4Width:"",
    className4Height:"",
    backgrounColor:"",
    barLength:0,
    interval:"",

    },
    
    methods:{
        changeTitle:function(event){
      this.title=event.target.value;
      console.log(event.target.value)
      },
      hello:function(){
        this.title="updated title"
        return this.title
      },
      showAlert:function(e){
        alert(e.target.value)
      },
      reset:function(){
        this.counter1=0
      },
      showCoordinates:function(step,event){
        this.counter+=step
          this.x=event.clientX
          this.y=event.clientY
      },
      result:function(){
        return this.counternew >10 ? "bigger then 10":"smaller than 10"
      },

      changeFlag:function(){
       console.log("hello")
        setInterval(()=>{
          this.flag = !this.flag
        },1000)
      },
      startProgress:function(){
        this.interval=setInterval(()=>{
          this.barLength+=10
        },1000)
      
      },
      

    
    },

    computed:{
      output:function(){
        return this.counternew>10 ? "bigger than 10":"smaller than 10"
      },
      exerciseResult:function(){
        return this.exercise3Value>33? "completed":"Not  completed"
      },
      divClass:function(){
        return{
          yellow:this.attchedClassMiddleBox,
          green:!this.attchedClassMiddleBox
        }
      },
      customStyle:function(){
        return {
          backgroundColor:this.newColor,
          height:this.height+"px"
        }
      },
      customStyle1:function(){
          return{
            backgroundColor:this.backgrounColor
          }
        },

    },

    watch:{
        counter:function(value){
          vm=this
          setTimeout(function(){
            vm.counter=0
          },1500)
        },
        exercise3Value:function(value){
          vm=this
         if(this.resetDuration===0)return
          setTimeout(function(){
            vm.exercise3Value=0
          },this.resetDuration*1000)
        },

        flag:function(val){
          if(val){
            this.selectedClass="shrink"
          }else{
            this.selectedClass="hightlight"
          }

        },

        barLength:function(val){

          if(val>290){
            clearInterval(this.interval)
          }

        }
        
    },
 
  })