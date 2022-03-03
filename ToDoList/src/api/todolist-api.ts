import axios from "axios";

let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '1d92dfb6-9966-4df5-8204-d62d7f7e2396'
    }
})

export const todolistApi = {
    getTodos() {
        return instance.get<TodoType[]>('todo-lists')
    },
    createTodo() {
        const title = 'newTodoList'
        return instance.post<BaseResponseType<{item: TodoType}>>('todo-lists', title)
    },
    deleteTodo() {
        const todolistId = '9bfd57eb-1051-417d-b071-e8f76696c13e';
        return instance.delete<BaseResponseType>(`todo-lists/${todolistId}`)
    },
    updateTodo() {
        const title = 'React!!!'
        const todolistId = '51c243aa-0390-47cb-b94b-60726b3044f1'
        return instance.delete<BaseResponseType>(`todo-lists/${todolistId}${title}`)
    }
}

type TodoType = {
    id: string
    title: string
    addedDate: string
    order: string
}
type BaseResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    fieldsError: string[]
    data: T
}