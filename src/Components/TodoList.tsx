import {useState} from 'react'
import React from 'react'
import List from './List'
import DoneList from './DoneList'

type TaskData = {
  id: number;
  name: string;
}

const TodoList = () => {

  const [curTask, setCurTask] = useState<string>('');
  const [tasks, setTasks] = useState<TaskData[]>([]);
  const [doneTasks, setDoneTasks] = useState<TaskData[]>([]);

  const onChangeCallback = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setCurTask(ev.target.value);
  }
  const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === "enter") addTask(curTask);
  }

  const addTask = (taskName: string) => {
    if (taskName === "")
    {
      alert("You cannot do nothing!!");
      return;
    }
    const newId = (new Date()).getTime();

    const newTasks = [{id: newId, name: taskName}, ...tasks];

    setTasks(newTasks);
  }

  const deleteTask = (id: number) => {
    const newTasks = tasks.filter(x => x.id !== id);
    setTasks(newTasks);
  }
  const doneTask = (id : number) => {
    let doneTaskElement : TaskData = tasks[0];
    for (const element of tasks) {if (element.id === id) {doneTaskElement = element; break;} else if (element === tasks[tasks.length-1]) return;}
    const newTasks = tasks.filter(x => x.id !== id);
    const newDoneTasks = [{id:doneTaskElement.id, name: doneTaskElement.name}, ...doneTasks];
    setTasks(newTasks);
    setDoneTasks(newDoneTasks);
  }

  return (
    <div className='mx-auto max-w-4xl'>
        <div className='flex space-x-1'>
            <input className='border border-gray-400 w-full text-2xl'onKeyDown={onKeyDownCallback} onChange={onChangeCallback}></input>
            <button className='border border-gray-400 w-8 font-bold' onClick={() => addTask(curTask)} >+</button>
        </div>
        <div>{tasks.map( x => <List id={x.id} name={x.name} doneFunction={doneTask} deleteFunction={deleteTask}/>)}</div>
        <div>{doneTasks.map( x => <DoneList name={x.name}/>)}</div>
    </div>
    
  )
}

export default TodoList