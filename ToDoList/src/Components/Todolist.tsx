import {FilterValuesType} from '../App';
import {Maptasks} from "./Maptasks";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    todolistID: string
    tasks: Array<TaskType>
    removeTask: (todolistID: string, taskId: string) => void
    changeFilter: (todolistID: string, filter: FilterValuesType) => void
    addTask: (todolistID: string, title: string) => void
    changeTaskStatus: (todolistID: string, taskId: string, isDone: boolean) => void
    filter: FilterValuesType
    removeTodoList: (todolistID: string) => void
    changeTaskTitle: (todolistID: string, taskId: string, title: string) => void
    changeTodolistTitle: (todolistID: string, title: string) => void
}

export function Todolist(props: PropsType) {

    const addTask = (newTaskTitle: string) => {
       props.addTask(props.todolistID, newTaskTitle )
    }

    const onAllClickHandler = () => props.changeFilter(props.todolistID, "all");
    const onActiveClickHandler = () => props.changeFilter(props.todolistID, "active");
    const onCompletedClickHandler = () => props.changeFilter(props.todolistID, "completed");
    const removeTodoList = () => props.removeTodoList(props.todolistID)
    const ChangeTodolistTitle = (title: string) => {
      props.changeTodolistTitle(props.todolistID, title)
    }

    return <div>
        <h3>
            <EditableSpan title={props.title} changeTitle={ChangeTodolistTitle} />
            <button onClick={removeTodoList}>x</button>
        </h3>
        <AddItemForm addItem={addTask} />
        <Maptasks
            tasks={props.tasks}
            removeTask={props.removeTask}
            todolistID={props.todolistID}
            changeTaskStatus={props.changeTaskStatus}
            changeTaskTitle={props.changeTaskTitle}
        />
        <div>
            <button className={props.filter === 'all' ? "active-filter" : ""}
                    onClick={onAllClickHandler}>All
            </button>
            <button className={props.filter === 'active' ? "active-filter" : ""}
                    onClick={onActiveClickHandler}>Active
            </button>
            <button className={props.filter === 'completed' ? "active-filter" : ""}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
}
