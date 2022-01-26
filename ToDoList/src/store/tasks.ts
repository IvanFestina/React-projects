export const addSalary = (salary: number, bonus: number) => salary + bonus
export const reduceSalary = (salary: number, minus: number) => salary - minus
export const multiplySalary = (salary: number, coefficient: number) => salary * coefficient   //1.2
export const divideSalary = (salary: number, coefficient: number) => {   //0.9
    return salary * coefficient
}

// 1. В параметрах - salary (state))
// 2. Тип действия в названии (action type)
// 3. Доп. значения for each type of action (payload)

export type AddSalaryActionType = {
    type: "ADD-SALARY"
    bonus: number
}
export type ReduceSalaryActionType = {
    type: "REDUCE-SALARY"
    minus: number
}
export type MultiplySalary = {
    type: "MULTIPLY-SALARY"
    coefficient: number
}
export type DivideSalary = {
    type: "DIVIDE-SALARY"
    coefficient: number
}

export type ActionType = AddSalaryActionType
    | ReduceSalaryActionType
    | MultiplySalary
    | DivideSalary
//jest библиотека в node_module - готовые решния для проверки нашего кода
export const salaryReducer = (salary: number, action: ActionType) => {
    switch (action.type) {
        case "ADD-SALARY":
            return salary + action.bonus
        case "REDUCE-SALARY":
            return salary - action.minus
        case "MULTIPLY-SALARY":
            return salary * action.coefficient
        case "DIVIDE-SALARY":
            return salary * action.coefficient
        default:
            return salary
    }
}

// Природа и содержание функции редьюсера состоит в том, чтобы объеденить внутри себя все варианты модификации какой-либо сущности
// К каждому конкретному стейту или ветке стейта, мы будем привязвать свой редьюсер.
// одна сущность - один редьсер
// Редьюсер - это функция, которая принимает исходное состояние, стейт, объект Action и возвращает обновленное состояние или старый стейт
// Требования: редьюсер - это чистая функция - зависит только от входящих параметров, не меняет входиящие данные, при одних и тех же параметрах возвращает один и тот же результат
