
let tasks =  [
// {
//    "title":"taskName",
//     "date":"date",
//     "isDone":false 
//    },
// {
//    "title":"taskName",
//     "date":"date",
//     "isDone":true
//    }

]
function tak(){

 let rsav= JSON.parse(localStorage.getItem("tasks"))
 if(rsav == null){
   tasks=[]
 }else{
  tasks=rsav
 }
 
}
tak()

function fullTask(){
  const tasksContainer = document.getElementById("tasks");
  tasksContainer.innerHTML = "";
 
  let index =0
  let indexEdet =0

  for (let task of tasks){

    let content = `
      <div  class="task  ">
        <div class="task-card  ${task.isDone? 'done':''} ">
          <div class="task-actions">
            <button onclick="edetTask(${indexEdet})" class="edit">✏️</button>
            ${task.isDone?
               ` <button onclick="completeTask(${index})" style="background-color:rgb(248, 60, 8); class="done"${task.isDone}>👎</button>`
               
              :
              `<button onclick="completeTask(${index})"  class="done"${task.isDone}>👍</button>`
              
              }
           
            <button onclick="deleteTask(${index})" class="delete">🗑️</button>
     
          </div>
          <div class="task-info">
            <h3>${task.title}</h3>
            <span>${task.date} 📅</span>
          </div>
        </div>
      </div>
    `;
    tasksContainer.innerHTML += content
    index++
    indexEdet++
     
  }
  
}

fullTask()
document.getElementById("add-but").addEventListener("click",function(){
   let now= new Date()
   let date= (now.getDay()-5) +"-"+ (now.getMonth()+1) +"-"+ now.getFullYear()
   let taskName= prompt("entar your task")
   let taskobj={
    "title":taskName,
    "date":date,
    "isDone":false
   }
   tasks.push(taskobj)
   fanctionStorge()



   fullTask()
   }) 

   function deleteTask(index){
    let task = tasks[index]
    let confirmed = confirm("هل انت متاكد من الحذف:"+task.title)
    if (confirmed){
      tasks.splice(index,1)
       fanctionStorge()
       fullTask()
    }
     
     }


     function edetTask(indexEdet){
       let task = tasks[indexEdet]
      let now=prompt("enter your new task name",task.title)
       fanctionStorge()
     
      task.title= now
      


      
     fullTask()
     }


     function completeTask(index){
      let task = tasks[index]
      if(task.isDone){
        task.isDone=false
      }else{
        task.isDone = true
      }
      fanctionStorge()
      fullTask()
      
     }
   
function fanctionStorge(){
   let taskString = JSON.stringify(tasks)
   localStorage.setItem("tasks",taskString)
}



