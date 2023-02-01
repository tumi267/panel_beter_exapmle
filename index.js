const btn1=document.getElementsByClassName('main_option')
const btn2=document.getElementsByClassName('main_btn')
const contact=document.getElementsByClassName('btncontact')
const module1=document.getElementsByClassName('module')
const module2=document.getElementsByClassName('module1')
const module3=document.getElementsByClassName('module2')
const module4=document.getElementsByClassName('module3')
const module5=document.getElementsByClassName('module4')
const module6=document.getElementsByClassName('module5')
const closer=document.getElementsByClassName('close')
var r = document.querySelector(':root');
for (let i = 0; i < btn1.length; i++) {
btn1[i].addEventListener('click',(e)=>{
        document.documentElement.style.setProperty(`--module${e.target.id}`, 'block');   
    })
}
for (let i = 0; i < btn2.length; i++) {
btn2[i].addEventListener('click',(e)=>{
            document.documentElement.style.setProperty(`--module${e.target.id}`, 'block');
        })
    }
    module1[0].addEventListener('click',(e)=>{
        document.documentElement.style.setProperty(`--module${e.target.id}`, 'none');
    })   
    module2[0].addEventListener('click',(e)=>{
        document.documentElement.style.setProperty(`--module${e.target.id}`, 'none');
    })   
    module3[0].addEventListener('click',(e)=>{
        document.documentElement.style.setProperty(`--module${e.target.id}`, 'none');
    })   
    module4[0].addEventListener('click',(e)=>{
        document.documentElement.style.setProperty(`--module${e.target.id}`, 'none');
    })   
    module5[0].addEventListener('click',(e)=>{
        document.documentElement.style.setProperty(`--module${e.target.id}`, 'none');
    })   
    module6[0].addEventListener('click',(e)=>{
        document.documentElement.style.setProperty(`--module${e.target.id}`, 'none');
    })  
    for (let i = 0; i < closer.length; i++) {    
    closer[i].addEventListener('click',()=>{
        document.documentElement.style.setProperty(`--module${i}`, 'none');
    })  
}
for(let i=0;i<contact.length;i++){
contact[i].addEventListener('click',()=>{
    
    for(let i=0;i<4;i++){
        document.documentElement.style.setProperty(`--module${i}`, 'none') 
    }
    document.documentElement.style.setProperty(`--module${5}`, 'block')
})
}
