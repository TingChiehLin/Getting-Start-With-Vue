console.log('Learning JS with Vue 3');

const date = new Date();
date.setFullYear(1998)
date.setHours(10);

console.log(date);

console.log('GetFullYear: ',date.getFullYear());


//Syntax Errors
function handleName() {
    let nameofList = ['a','b','c'];
    //nameofList.iterate();
}


handleName();

const app = Vue.createApp({
    data() {
        return {
            title: 'To Do List App 2',
            assignmentName: 'assign',
            nameOfProject: '',
            show: false
        };
    },
    methods: {
        addToItem(text) {
            
        }
    }
});

app.mount('#app');