new Vue({
    el:"#app",
    
    data:{
    title:"hello world",
    link:"https://clarusway.com/",
    bloglink:"<a href='http://vuejsegitim.com'>Link</a>"
    
    },
    
    methods:{
        changeTitle:function(event){
      this.title=event.target.value;
      /* console.log(event) */
      },
      hello:function(){
        return this.title
      },
      showAlert:function(){
        alert()
      }
    
    }
    
    })

/* 

ATTRIBUTE BINDING
----(v-bind)---
true:<a v-bind:href="link">clarusway</a>
false:<a v-bind:href={{link}}>clarusway</a>
---(v-once)---
<p v-once>{{title}}</p>
---(v-html)---
<p v-html="bloglink"></p>
---(v-on)----
 <input v-on:input="changeName"/>
*/