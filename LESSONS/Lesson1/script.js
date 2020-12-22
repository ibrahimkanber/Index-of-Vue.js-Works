new Vue({
    el:"#app",
    
    data:{
    title:"hello world",
    link:"https://clarusway.com/",
    bloglink:"<a href='http://vuejsegitim.com'>Link</a>",
    counter:0,
    x:0,
    y:0
    },
    
    methods:{
        changeTitle:function(event){
      this.title=event.target.value;
      /* console.log(event) */
      },
      hello:function(){
        this.title="new title"
        return this.title
      },
      showAlert:function(name){
        alert(name)
      },
      reset:function(){
        this.counter=0
      },
      showCoordinates:function(step,event){
        this.counter+=step
          this.x=event.clientX
          this.y=event.clientY
      }
    
    }
    
    })