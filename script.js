const container =document.querySelector('.container');
let limit =6
let pageCount =1
let postCount =1

const getPost = async() =>{
   const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`)
   const data  = await response.json(); 
  
   let postData = data.map((curData,index) =>{
    return `<div class="post">
    <span>${pageCount++}</span>
    <h3>${curData.title}</h3>
    <p>${curData.body}</p>
    </div>`
    
   })
  container.insertAdjacentHTML('beforeend',postData);
}

getPost();

const showData = () =>{
    setTimeout(() =>{
       pageCount++
       getPost()
    },500)
}
window.addEventListener("scroll",() =>{
    const {scrollHeight,scrollTop,clientHeight} =document.documentElement
      if(scrollTop + clientHeight >= scrollHeight){
        showData();
      }
})
       

