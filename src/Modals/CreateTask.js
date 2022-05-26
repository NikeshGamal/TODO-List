import React,{useState} from 'react'
import {Modal,ModalHeader,ModalBody,ModalFooter,Button} from 'reactstrap';

const CreateTask = ({modal,toggle,save}) => {
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

    const handleSave=()=>{
         let tempObj={};
         tempObj["name"]=taskName;
         tempObj["description"]=description;
         //we need to save the objec and push it to the list for that we call save() function 
         save(tempObj);
         setTaskName('');
         setDescription('');
    } 

  return (
    <div>
         <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>
             Create Task
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
                onClick={handleSave}
              >
                Create
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

export default CreateTask