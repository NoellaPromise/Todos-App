
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const Todo = (props) => {
  return (
    <div className="w-1/2 flex items-center justify-between py-2 my-4 border-b-2 border-gray-200 m-auto">
      <div className="flex space-x-2 items-center">
        <input onChange={() => props.endTask(props.index)} type="checkbox" />
        <p className={props.hasEnded ? "line-through" : ""}>{props.todo}</p>
      </div>
      <FontAwesomeIcon
        className="cursor-pointer"
        icon={faTrash}
        color="red"
        onClick={() => props.deleteTask(props.id)}
      />
    </div>
  );
};
export default Todo;