var a = {
    abc:'dddddd'
}
new Vue({
    el:'#app',
    data:a
})



var app2 = new Vue({
    el:'#app2',
    data:{
        message:"显示提示语" + new Date()
    }
})

var app3 = new Vue({
    el:"#app3",
    data:{
        yellow:true
    }
})

var app4 = new Vue({
    el:'#app4',
    data:{
        todos:[
            {text:'one'},
            {text:'two'},
            {text:'three'}
        ]
    }
})


var app5 = new Vue({
    el:'#app5',
    data:{
        b:[
            {text:"aaa"},
            {text:"bbb"},
            {text:"ccc"}
        ]
    }
})

var app6 = new Vue({
    el:"#app6",
    data:{
        cars:[
            {color:'red'},
            {color:'yellow'},
            {color:'blue'}
        ]
    }
})

var app7 = new Vue({
    el:"#app7",
    data:{
        message:"hello Vue!",
        text:'text'
    },
    methods:{
        clicker:function(){
            this.text.color = this.text.style.color = 'red'
        }
    }
})

var app8 = new Vue({
    el:"#app8",
    data:{
        text:"model双向数据绑定"
    }
})

Vue.component('todo-item',{
    props:['todo'],
    template:'<li>{{todo.inf}}</li>'
})
var app9 = new Vue({
    el:'#app9',
    data:{
        t:[
            {inf:"diyihang"},
            {inf:'第二行'},
            {inf:'第三行'}
        ]
    }
})




//---------------------开始--------------------------
var data = {text:"定义data"}
var vm = new Vue({
    el:"#vm",
    data:data,
    created:function(){
        console.log(this.text)
    }
})

//---------------------结束--------------------------


var app0 = new Vue({
    el:"#app0",
    data:{
        message:'hello'
    },
    computed:{
        reMessage:function(){
            return this.message.split('').reverse().join('')
        }
    }
})

var vm1 = new Vue({
    el:"#vm1",
    data:{
        firstName:"foo",
        lastName:"bar",
        fullName:"foo bar"
    },
    // watch:{
    //     firstName:function(val){
    //         this.fullName = val + ' ' + this.lastName
    //     },
    //     lastName:function(val){
    //         this.fullName = this.firstName + ' ' + val
    //     }
    // }
    computed:{
        fullName:function(){
            return this.firstName + ' ' + this.lastName
        }
    }
})

// var watch = new Vue({
//     el:"#watch",
//     data:{
//         question:"",
//         answer:"I cannot give you an answer until you ask a question!"
//     },
//     watch:{
//         //如果question发生改变，这个函数就会运行
//         question:function(){
//             this.answer = 'Waiting for you to stop typing...'
//             this.getAnswer()
//         }
//     },
//     methods:{
//         getAnswer: _.debounce(
//             function(){
//                 var vm = this
//                 if(this.question.indexOf('?') === -1){
//                     vm.answer = "Questions usually contain a question mark, ;-)"
//                     return
//                 }
//                 vm.answer = "thinking..."
//                 axios.get("...")
//                 .then(function(){
//                     vm.answer = _.capitalize(response.data.answer)
//                 })
//                 .catch(function(error){
//                     vm.answer = "Error! Could not reach the API" + error
//                 })
//             },500
//         )
//     }
// })

//*************class与style绑定 start*****************
var style = new Vue({
    el:"#style",
    data:{
        isBold:true,
        red:true,
        size:true,
        background:true
    }
})

var style1 = new Vue({
    el:"#style-test",
    data:{
        big:true,
        green:false
    }
})

var style2 = new Vue({
    el:"#style2",
    data:{
        classObject:{
            background:true
        }
    }
})

var style3 = new Vue({
    el:"#style3",
    data:{
        style:true,
        color:null
    },
    computed:{
        classObject:function(){
            return{
                style:this.border && !this.color,
            }
        }
    }
})


var style11 = new Vue({
    el:"#style11",
    data:{
        inColor:"red",
        inFontsize:30
    }
})

//*************class与style绑定 end*****************
//*************v-if指令 start*****************
var ok = new Vue({
    el:"#ok",
    data:{
        ok:false
    }
})
var ok1 = new Vue({
    el:"#ok1",
    data:{
        yes:false
    }
})
var ok2 = new Vue({
    el:"#ok2",
    data:{
        a:true,
        b:false,
        c:false,
        d:false
    }
})
//*************v-if指令 end*****************
//*************v-for指令 start*****************
var vfor = new Vue({
    el:"#v-for",
    data:{
        text:"title",
        items:[
            {message:"one little"},
            {message:"two little"}
        ]
    }
})
        // ***对象迭代
var forObject = new Vue({
    el:"#for-object",
    data:{
        object:{
            name:"john",
            age:"30"
        }
    }
})
        //整数迭代
var zs = new Vue({
    el:"#zs",
    data:{}
})
        //组件和v-for

Vue.component("todo-item",{
    template:'\
        <li>\
            {{title}}\
            <button v-on:click="$emit(\'remove\')">X</button>\
        </li>\
        ',
        props:['title']
})
new Vue({
    el:'#todo-list',
    data:{
        newTodoText:'',
        todos:[
            'one aaa',
            'two bbb',
            'three ccc'
        ]
    },
    methods:{
        addNewTodo:function(){
            this.todos.push(this.newTodoText)
            this.newTodoText=''
        }
    }
})


var filter = new Vue({
    el:"#filter",
    data:{
        numbers:[1,2,3,4,5]
    },
    computed:{
        evenNumbers:function(){
            return this.numbers.filter(function(number){
                return number % 2 === 0
            })
        }
    }
})
//*************v-for指令 end*****************
//*************事件处理器 start*****************
    //监听事件
var example1 = new Vue({
    el:"#example-1",
    data:{
        counter:0
    }
})
    //方法事件处理
var example2 = new Vue({
    el:"#example-2",
    data:{
        name:'world!'
    },
    methods:{
        clicker:function(){
            alert("hello " + this.name)
        }
    }
})
    //内联处理器方法
var example3 = new Vue({
    el:"#example-3",
    methods:{
        say:function(message){
            alert(message)
        }
    }
})
    //事件修饰符
var eventEnter = new Vue({
    el:"#eventEnter",
    data:{
        text:"提交"
    },
    methods:{
        submiter:function(){
            alert(this.text)
        }
    }
})
//*************事件处理器 end*****************
//*************表单控件绑定 start*****************
var form1 = new Vue({
    el:"#form1",
    data:{
        message:"a00"
    }
})

var form2 = new Vue({
    el:"#form2",
    data:{
        text:"00"
    }
})

var checkbox = new Vue({
    el:"#checkbox",
    data:{
        checked:false
    }
})

var checkbox2 = new Vue({
    el:"#checkbox2",
    data:{
        checknames:[]
    }
})

var radio1 = new Vue({
    el:"#radio1",
    data:{
        text:''
    }

})

var selected1 = new Vue({
    el:"#selected1",
    data:{
        selecter:null
    }
    
})

var selected2 = new Vue({
    el:"#selected2",
    data:{
        selecteder2:[]
    }
})

var selected3 = new Vue({
    el:"#selected3",
    data:{
        selecter3:"b",
        options:[
            {text:"one",value:"a"},
            {text:"two",value:"b"},
            {text:"three",value:"c"},
        ]
    }
})

var bindValue = new Vue({
    el:"#bindValue",
    data:{
        toggle:[]
    }
})

var lazy = new Vue({
    el:"#lazy",
    data:{
        msg:'请输入'
    }
})

var num = new Vue({
    el:"#numb",
    data:{
        num:"123"
    }
})

var trim = new Vue({
    el:"#trim",
    data:{
        trimer:'       abc     '
    }
})

Vue.component('mydiv',{
    template:'<p>a custom component</p>'
})
var zc = new Vue({
    el:"#zc"
})

//*************表单控件绑定 end*****************





Vue.component('todo-item', {
  // props: ['todo'],
  template: '<li>asasasasasas</li>'
})
// var app9 = new Vue({
//   el: '#app9',
//   data: {
//     groceryList: [
//       { text: 'Vegetables' },
//       { text: 'Cheese' },
//       { text: 'Whatever else humans are supposed to eat' }
//     ]
//   }
// })

  // // 这是我们的Model
 //    var exampleData = {
 //        message: 'Hello World!7777'
 //    }

 //    // 创建一个 Vue 实例或 "ViewModel"
 //    // 它连接 View 与 Model
 //    new Vue({
 //        el: '#app',
 //        data: {
 //            message:'asdsadsasdasdasddas'
 //        }
 //    })


