import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function AddTask() {
    const [task, setTask] = useState({
        name: '',
        dueDate: '',
        priority: '',
        description: '',
        completed: false // Initialize completed as false
      });
      

const [tasks, setTasks] = useState([]);
const [isModalOpen, setModalOpen] = useState(false); 
const [Edit, setEditIndex] = useState(null);
const [ind , setInd] = useState(null) ;
const [selectedTasks, setSelectedTasks] = useState([]);
const [action, setAction] = useState(null);
const [searchQuery, setSearchQuery] = useState('');

const handleCheckboxChange = (index) => {
  const selectedTaskIndex = selectedTasks.indexOf(index);
  if (selectedTaskIndex === -1) {
    // Task not in the list, add it
    setSelectedTasks([...selectedTasks, index]);
  } else {
    // Task already in the list, remove it
    const updatedSelectedTasks = [...selectedTasks];
    updatedSelectedTasks.splice(selectedTaskIndex, 1);
    setSelectedTasks(updatedSelectedTasks);
  }
};

const handleMarkAsComplete = () => { 

  if(!selectedTasks){
    toast.error("Please Select a Task")
    return
  }

    const updatedTasks = tasks.map((task, index) => {
      if (selectedTasks.includes(index)) {
        return { ...task, completed: true };
      }
      
        return task;
      
    });
    setTasks(updatedTasks); 
    setSelectedTasks([]);
    
  };
  

const handleDeleteSelected = () => { 
  const updatedTasks = tasks.filter((task, index) => !selectedTasks.includes(index));
  setTasks(updatedTasks); 
  setSelectedTasks([]);
  toast.success("Deleted Your Task")
};

const toggleModal = () => {
    setModalOpen(!isModalOpen);
    setEditIndex(null);  
};

 
const handleChange = (e) => {

  const { name, value } = e.target;
  if(name==="dueDate" && new Date(value) < new Date()){
    toast.error("Please Select a Date greater or equal to today's date")
    return
  }
  setTask((prevTask) => ({
    ...prevTask,
    [name]: value
  }));
};

const handleEdit = (index) =>{
    const editedTask = { ...tasks[index] };
    setTask(editedTask);
    toggleModal();
    setEditIndex(()=>{
      return index
    });
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.name || !task.priority || !task.dueDate) {
      toast.error("Please Fill All the Fields")
      return
    };
  
    if (Edit !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[Edit] = task;  
      setTasks(updatedTasks);
      setEditIndex(null);
      toast.success("Updated Your Task")

    } else {
      setTasks([...tasks, task]);
      setTask({
        name: '',
        dueDate: '',
        priority: '',
        description: '',
        status: ''
      });
      toast.success("Added Your Task")
    }
    toggleModal();
  };
  
  const filteredTasks = tasks.filter((task) =>
  task.name.toLowerCase().includes(searchQuery.toLowerCase())||
  task.description.toLowerCase().includes(searchQuery.toLowerCase())||
  task.priority.toLowerCase().includes(searchQuery.toLowerCase())||
  task.dueDate.toLowerCase().includes(searchQuery.toLowerCase())
);


  return (
    <div className='bg-gray-900 min-h-full max-h-screen  min-w-full'>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <div>
        <h1 className='text-center text-teal-500 text-4xl font-lexend font-semibold'> YOUR TASKS</h1>
      </div>
<div className='flex justify-center items-center mt-5 md:flex'>
 <div className="flex p-4 bg-white rounded-3xl w-2/3 justify-between items-center flex-col md:flex-row space-y-2 md:space-y-0">
 <button onClick={toggleModal} className="bg-white  w-[250px] hover:text-white hover:bg-indigo-500 hover:border-white hover:border-2  py-2 px-4 rounded-2xl text-indigo-500 border-indigo-500 border-2">
          Add a Task
        </button>

  <button
    onClick={() => handleMarkAsComplete()}
    className="bg-white w-[250px]  px-4 py-2 rounded-2xl text-green-500 hover:border-white hover:text-white hover:bg-green-400 bg-white border-2 border-green-500"
    disabled={selectedTasks.length === 0}
    >
    Mark Selected as Complete
  </button>
  <button
    onClick={() => handleDeleteSelected()}
    className="bg-white  w-[250px] px-4 py-2 rounded-2xl text-red-500 border-2 border-red-500 hover:bg-red-400 hover:text-white"
    disabled={selectedTasks.length === 0}
    >
    Delete Selected
  </button>

       
</div>
</div>
      <div>

        <div className="flex-auto block py-8 pt-6 px-9 bg-white my-10 mx-10 rounded-xl">
        <span className='flex'>
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="relative text-xs rounded-3xl font-medium leading-3 text-white-500 dark:text-white-400 resize-none bg-white-50 dark:bg-white-700 border border-white-200 dark:border-white-700 focus:outline-none px-4 py-3 mt-2 mb-3 bg-gray-300 placeholder:text-black"
        />
        <img className='absolute  flex mt-[13px] bg-gray-500 rounded-full ml-[135px] ' width="30" height="30" src="https://img.icons8.com/cotton/64/search--v1.png" alt="search--v1"/>
        </span>
          <div className="overflow-x-auto min-h-[400px]">
            <table className="w-full my-0 align-middle text-dark border-neutral-200 ">
              <thead className='align-bottom bg-teal-300 pt-10'>
                <tr className='text-gray-500 '>
                  <th className='pb-3 pl-5 text-start min-w-[20px] '>
                    Select
                  </th>
                  <th className='pb-3 text-start min-w-[150px]'>Tasks</th>
                  <th className='pb-3 text-start min-w-[150px]'>Priority</th>
                  <th className='pb-3 text-start min-w-[150px]'>Due Date</th>
                  <th className='pb-3 text-start min-w-[150px]'>Status</th>
                  <th className='pb-3 text-start min-w-[10px]'>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredTasks.map((task, index) => (
                  <tr key={index} className='text-black font-semibold py-10'>
                    <td className='pl-5 '>
                    <input
        className='w-10'
        type="checkbox"
        onChange={() => handleCheckboxChange(index)}
        checked={selectedTasks.includes(index)}
      />
                    </td>
                    <td className='py-3'>{task.name}e</td>
                    <td>{task.priority}</td>
                    <td>{task.dueDate}</td>
                   <td>{task.completed ? (<h1 className='text-white text-center w-[100px] bg-green-500 flex justify-center items-center rounded-full'>Completed</h1>):(<h1 className='text-white text-center w-[100px] bg-red-500 flex justify-center items-center rounded-full'>Pending</h1>)}</td>
                    <td onClick={()=>{setInd(index);
                        handleEdit(index)}}><img width="30" height="30" src="https://img.icons8.com/cotton/64/create-new--v1.png" alt="create-new--v1"/></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

     
        {isModalOpen && (
          <div className="fixed inset-0 overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-center min-h-screen">
              <div className="relative w-96 rounded shadow-lg p-6 bg-gray-300">
                <p className="text-lg font-bold leading-none text-white-800">Add the Task Details Here</p>
                <form onSubmit={handleSubmit} className="mt-5">
                        <div class="mt-4 flex flex-col">
                            <label class="text-xs font-semibold leading-3 text-white-800 dark:text-white-100"> What is to be Done </label>
                            <input name='name' value={task.name}
                            onChange={handleChange} placeholder="Enter your Task Here" class="text-xs font-medium leading-3 text-white-500 dark:text-white-400 resize-none bg-white-50 dark:bg-white-700 border rounded-lg border-white-200 dark:border-white-700 focus:outline-none px-4 py-3 mt-2" />
                        </div>

                        <div class="mt-4 flex flex-col">
                            <label class="text-xs font-semibold leading-3 text-white-800 dark:text-white-100">Due Date </label>
                            <input
                            onChange={handleChange}
                            value={task.dueDate}
                            name='dueDate'
                            type='date'
                             placeholder="Enter your Task Here" class="text-xs font-medium leading-3 text-white-500 dark:text-white-400 resize-none bg-white-50 dark:bg-white-700 border rounded-lg border-white-200 dark:border-white-700 focus:outline-none px-4 py-3 mt-2" />
                        </div>

                   
                <div>
                            <label class="text-xs font-semibold leading-3 text-white-800 dark:text-white-100"> Priority </label>
                            <div class="py-1 rounded-lg px-4 bg-white-50 dark:bg-white-700 border border-white-200 dark:border-white-700 mt-2">
                                <select
                                onChange={handleChange}
                                name='priority'
                                value={task.priority}
                                class="text-xs focus:outline-none font-medium leading-3 text-white-600  bg-transparent w-full">
                                    <option disabled selected>
                                        Select a Priority Level
                                    </option>
                                    <option value="High">High</option> 
                                    <option value="Medium">Medium</option> 
                                    <option value="Low">Low</option> 
                                </select>
                            </div>
                        </div>

                        <div class="mt-4 flex flex-col">
                            <label class="text-xs font-semibold leading-3 text-white-800 dark:text-white-100"> Description  <span className='text-gray-500'>(optional)</span></label>
                            <textarea
                            name="description"
                            value={task.description}
                            onChange={handleChange}
                             placeholder="Ask your question here..." class="text-xs font-medium leading-3 text-white-500 dark:text-white-400 resize-none h-20 bg-white-50 dark:bg-white-700 border rounded-lg border-white-200 dark:border-white-700 focus:outline-none px-4 py-3 mt-2"></textarea>
                        </div>
                        <button id="submit"   class="mt-5 focus:outline-none px-5 py-3 bg-teal-700 dark:bg-teal-500 hover:bg-opacity-80 rounded text-xs font-semibold leading-3 text-white-100">
                            Submit
                        </button>
                </form>
                <div
                  className="cursor-pointer absolute top-0 right-0 m-3 text-white-600"
                  onClick={toggleModal}
                >
                 <button>
                    close
                 </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}