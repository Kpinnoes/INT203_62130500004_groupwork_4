const app = {
    data() {
        return {    
            isHidden: true,
                seen: false,
                msg: 'Hello & Welcome, Vue3',
                search : '',
                fullView : false,
                viewImage:'',
                index: null,
                count: 0,

         photos: [
            {   src: 'images/2.jpg',
                article: 'Hello',
                 favor: false,
                like: 0,
                done: false,no:"1",
            },
            {
                src: 'images/5.jpg',
                article: 'World',
                favor: false,
                like: 0,done: false,no:"2",
            },
            {
                src: 'images/6.jpg',
                article: 'Dolphin',
                favor: false,
                like: 0,done: false,no:"3",

            },
            {
                src: 'images/9.jpg',
                article: 'Team 2020',
                favor: false,
                like: 0,done: false,no:"4",
            },
            {
                src: 'images/8.jpg',
                article: 'Welcome to ',
                favor: false,
                like: 0,done: false,no:"5",
            },
            {
                src: 'images/11.jpg',
                article: 'this Family <3',
                favor: false,
                like: 0,
                done: false,no:"6",
            }
      

        ]
    }
    },
        
      
    methods: {
        clickHeart(index){
            this.photos[index].done = !this.photos[index].done
        },
        fullScreenView(photo){
            if(!this.fullView){
                this.fullView = true;     
            } this.viewImg =  this.photos[photo.no-1].src;
        },
       
        closeFullView(){
          this.fullView = false;
        }, 
        incrementCounter() {
           this.count = this.photos.filter( t => t.done ).length;
             
        },searchBut() {
               this.seen = !this.seen;
                this.search = '';
              }
          
        
        
     
    },
    computed: {
        unclickHeart(){ 
            return this.photos.filter( t => !t.false ).length
        },
        resultQuery(){
            if(this.searchQuery){
            return this.resources.filter((item)=>{
              return this.searchQuery.toLowerCase().split(' ').every(v => item.title.toLowerCase().includes(v))
            })
            }else{
              return this.resources;
            }
        }
        ,
        filterSearch() {
            return this.photos.filter((item) => {
              return item.article.toLowerCase().includes(this.search.toLowerCase())
            })}
        },
        
    
 

}
Vue.createApp(app).mount('#app')