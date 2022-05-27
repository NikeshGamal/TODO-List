import React ,{useState}from 'react'
import EditTask from '../Modals/EditTask'

const Card = ({taskObj,index,deleteTask,updateListArray}) => {
     //we need to change the modal so we make use of useState hook 
    const [modal, setModal] = useState(false);

    
  const toggle=()=>{
    //toggling the modal status
    setModal(!modal);
}


    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const handleDelete = ()=>{
       deleteTask(taskObj.name);
       console.log("clicked taskObj name");
       console.log(taskObj.name);
    }

    const updateTask = (obj)=>{
        //updating the updateListArray() that takes obj and index of the todolist
        updateListArray(obj,index);
        //index is passed in order to know to which indexed obj is to be updated
    }

  return (
        <div className= "card-wrapper mr-5">
                    <div className= "card-top" style={{"backgroundColor": colors[index%5].primaryColor}}></div>
                    <div className= "task-holder">
                        <span className= "card-header" style={{"backgroundColor": colors[index%5].secondaryColor, "borderRadius": "10px"}}>{taskObj.name}</span>
                        <p className= "mt-3 px-1">{taskObj.description}</p>
        
                        <div style={{position:"absolute",right:"20px",bottom:"20px"}}>
                            <i className= "far fa-edit mx-3" style={{"color" : colors[index%5].primaryColor,cursor:"pointer"}} onClick={()=>setModal(true)}></i>
                            <i className="fas fa-trash-alt" style = {{"color" : colors[index%5].primaryColor,cursor:"pointer"}} onClick={handleDelete}></i>
                        </div>
                </div>
                {/* So to popup the update modal we put EditTask component over here*/}
                <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj}/>
            </div>
  )
}

export default Card