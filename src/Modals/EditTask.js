import React,{useState,useEffect} from 'react'
import {Modal,ModalHeader,ModalBody,ModalFooter,Button} from 'reactstrap';

const EditTask = ({modal,toggle,updateTask,taskObj}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e)=>{
        const {name,value} = e.target;
        if(name==="title"){
            setTaskName(value);
        }else{
            setDescription(value);
        }
    }

    useEffect(() => {
      setTaskName(taskObj.name);
      setDescription(taskObj.description);
    }, [])
    

    const handleUpdate = (e)=>{
        e.preventDefault();
        //creating empty array then making the object fill with updated values 
        //update the indexed object with updated obj
        //for that we pass the updated object created in this function and pass it to updateTask() to the card.js    
        let tempObj = {};
        tempObj["name"]=taskName;
        tempObj["description"]=description;
        updateTask(tempObj);
    }

  return (
    <div>
         <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>
             Update Task
            </ModalHeader>

            <ModalBody>
                <form action="">
                    <div className="form-group mb-3">
                        <label htmlFor="title">Task Name</label>
                        <input type="text"  className='form-control mt-2' name="title" value={taskName} onChange={handleChange}/>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="description">Description</label>
                        <textarea rows={5} className='form-control mt-2' name="description" value={description} onChange={handleChange}/>
                    </div>
                </form>
            </ModalBody>

            <ModalFooter>
              <Button
                color="primary"
                onClick={handleUpdate}
              >
                Update
              </Button>
              {' '}
              <Button onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter> 
   </Modal>
    </div>
  )
}

export default EditTask