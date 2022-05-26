import React ,{useState,useEffect}from 'react'
import CreateTask from '../Modals/CreateTask';
import Card from './Card';

const HomeToDo = () => {
    //we need to change the modal so we make use of useState hook 
 const [modal, setModal] = useState(false);
 
  //Inorder to fetch the data and show up when loaded we use useEffect hook that will load only once at the beginning of the program load
  useEffect(() => {
      let arr= localStorage.getItem('taskLists');

      if(arr){
         //it will change the object string into array string
         let obj = JSON.parse(arr);
         console.log(obj);
         setTaskList(obj);
      }
  }, [])
  
  

  const toggle=()=>{
      //toggling the modal status
      setModal(!modal);
  }
  //we are making an array of task i.e. taskList so that when we create any task we can display it on the screen
  //for that we are using useState hook so that our states will be updated 
  const [taskLists, setTaskList] = useState([]);

  //whenever the create button is clicked of the modal we need to save the task in the form of object and bush that task in the array so the array will be of array of objects
  const saveTask=(taskobj)=>{
      let tempList=taskLists;
      tempList.push(taskobj);
      //when refreshed our data will be erased so inorder to save data we need to store it over some database so for this project we are using ---localStorage------
      //In localStorage we use ******.setItem***** that has two parameters i.e. key and value
      //and value can't be passes directly as an array so we need to convet it into the string by using --------------JSON.stringify(arrayList)------------->>>> It will convert the array into the string
      localStorage.setItem("taskLists",JSON.stringify(tempList));

      //then we need to close the modal for that we need to do setModal(false) 
      setModal(false);
      //also we need to update the taskList so that the state taskList be updated
      setTaskList(tempList);
  }

  //to handle the deleteTask we use deleteTask
  const deleteTask = (index)=>{
       //we need to access the list
        let tempList = taskLists;
       //we need remove the index obj from list 
        tempList.splice(index,1);
       //update the list
      console.log(tempList);
      localStorage.setItem("taskLists",JSON.stringify(tempList));
      setTaskList(tempList);
       //display
       window.location.reload(true);
   }

  return (
    <>
       <div className="headSection d-flex flex-column justify-content-center align-items-center">
        <h3 className='text-center'>TODO-List</h3> 
        {/* whenever we need to pass argument in the function then we use syntax ---()=>{functionName(argument)}---*/}
        <button className="button btn btn-primary" onClick={()=>setModal(true)}>Create task</button>
       </div>
       <div className="container d-flex">
           {taskLists.map((obj,index)=><Card taskObj={obj} index={index} key={index} deleteTask={deleteTask}/>)}
       </div>
       <CreateTask modal={modal} toggle={toggle} save={saveTask}/>
    </>
  )
}

export default HomeToDo