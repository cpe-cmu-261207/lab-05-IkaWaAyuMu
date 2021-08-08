import React from 'react'

type listProperty = {
    id: number;
    name: string;
    doneFunction: Function;
    deleteFunction: Function;
  }

function List({id, name, doneFunction, deleteFunction} : listProperty)
{
    function doneClickCallBack(ev :any){ doneFunction(id) }
    function deleteClickCallBack(ev :any){ deleteFunction(id) }
    return (
        <div className="flex justify-between h-8 items-center py-6 border-b group">
            <span className="text-2xl"> {name} </span>
            <div className="flex space-x-1 items-center opacity-0 group-hover:opacity-100">
              <button className="bg-green-400 w-24 text-2xl " onClick={doneClickCallBack}>Done</button>
              <button className="bg-red-400 w-24 text-2xl " onClick={deleteClickCallBack}>Delete</button>
            </div>
        </div>
    );
}

export default List;