import React, {ChangeEvent} from "react";
import {useDispatch} from "react-redux";
import {changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./state/tasks-reducer";
import {Checkbox, IconButton} from "@material-ui/core";
import {EditableSpan} from "./EditableSpan";
import {Delete} from "@material-ui/icons";
import {TaskType} from "./Todolist";

type TaskPropsType = {
    task: TaskType
    todolistId: string
    taskId: string
}
export const Task = React.memo(({task, todolistId, taskId, ...props}: TaskPropsType) => {
    const dispatch = useDispatch()

    const onClickHandler = () => dispatch(removeTaskAC(taskId, todolistId))
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        dispatch(changeTaskStatusAC(taskId, newIsDoneValue, todolistId))
    }
    const onTitleChangeHandler = (newValue: string) => {
        dispatch(changeTaskTitleAC(taskId, newValue, todolistId))
    }

    return <div key={taskId} className={task.isDone ? "is-done" : ""}>
        <Checkbox
            checked={task.isDone}
            color="primary"
            onChange={onChangeHandler}
        />

        <EditableSpan value={task.title} onChange={onTitleChangeHandler}/>
        <IconButton onClick={onClickHandler}>
            <Delete/>
        </IconButton>
    </div>

})