
type listProperty = {
    name: string;
  }

function DoneList({name} : listProperty)
{
    return (
        <div className="flex justify-between h-8 py-6 border-b items-center">
            <span className="text-2xl line-through"> {name} </span>
        </div>
    );
}

export default DoneList;