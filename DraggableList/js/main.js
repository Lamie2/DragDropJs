let rightList = document.getElementById('list2');
let leftList=document.getElementById('list1');
let RightListItems = document.querySelectorAll('#list2 li');
let leftListItems = document.querySelectorAll('#list1 li');
let box= document.querySelector('.box')

leftListItems.forEach(elem=>{
    elem.addEventListener('dragstart',function(e){
        e.dataTransfer.setData('dataId',elem.getAttribute('data-id'));
    })
})

rightList.addEventListener('dragover',function(e){
    e.preventDefault();
})

rightList.addEventListener('drop',function(e){
    let dataId = e.dataTransfer.getData('dataId');
    let li = document.querySelector('[data-id="'+dataId+'"]');
    this.appendChild(li)
})


RightListItems.forEach(el=>{
    el.addEventListener('dragstart',function(e){
        e.dataTransfer.setData('dataId',el.getAttribute('data-id'));
    })
})

leftList.addEventListener('dragover',function(e){
    e.preventDefault();
})

leftList.addEventListener('drop',function(e){
    let dataId = e.dataTransfer.getData('dataId');
    let li = document.querySelector('[data-id="'+dataId+'"]');
    this.appendChild(li)
})


box.addEventListener('dragover',function(e){
    e.preventDefault();
})

box.addEventListener('drop',function(e){
    let dataId = e.dataTransfer.getData('dataId');
    let li = document.querySelector('[data-id="'+dataId+'"]');
    let p = document.querySelector('[data-id="'+dataId+'"]');
    this.appendChild(p)
})