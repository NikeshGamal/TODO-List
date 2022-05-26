import React ,{useState}from 'react'
import CreateTask from '../Modals/CreateTask'

const HomeToDo = () => {
    //we need to change the modal so we make use of useState hook 
 const [modal, setModal] = useState(false);
 
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
      //then we need to close the modal for that we need to do setModal(false) 
      setModal(false);
      //also we need to update the taskList so that the state taskList be updated
      setTaskList(tempList);
  }

  return (
    <>
       <div className="headSection d-flex flex-column justify-content-center align-items-center">
        <h3 className='text-center'>TODO-List</h3> 
        {/* whenever we need to pass argument in the function then we use syntax ---()=>{functionName(argument)}---*/}
        <button className="button btn btn-primary" onClick={()=>setModal(true)}>Create task</button>
       </div>
       <div className="container">
           {taskLists.map((obj)=><li>{obj.name}</li>)}
       </div>
       <CreateTask modal={modal} toggle={toggle} save={saveTask}/>
    </>
  )
}

export default HomeToDo