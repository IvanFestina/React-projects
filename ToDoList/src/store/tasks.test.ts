import {
    ActionType,
    addSalary,
    AddSalaryActionType, DivideSalary,
    divideSalary, MultiplySalary,
    multiplySalary,
    reduceSalary, ReduceSalaryActionType,
    salaryReducer
} from "./tasks";


test('add salary', () => {
 //1. data tests - тестовые данные
    const salary: number = 700
    const bonus: number = 250
//2. test code resolution - выполнение тестируемого кода
    const result = addSalary(salary, bonus)
//3. Result checking
    expect(result).toBe(950)
})

test('reduce salary', () => {
 //1. data tests - тестовые данные
    const salary: number = 950
    const minus: number = 50
//2. test code resolution - выполнение тестируемого кода
    const result = reduceSalary(salary, minus)
//3. Result checking
    expect(result).toBe(900)
})

test('multiply salary', () => {
 //1. data tests - тестовые данные
    const salary: number = 1000
    const coefficient: number = 1.2
//2. test code resolution - выполнение тестируемого кода
    const result = multiplySalary(salary, coefficient)
//3. Result checking
    expect(result).toBe(1200)
})

test('divide salary', () => {
 //1. data tests - тестовые данные
    const salary: number = 1000
    const coefficient: number = 0.9
//2. test code resolution - выполнение тестируемого кода
    const result = divideSalary(salary, coefficient)
//3. Result checking
    expect(result).toBe(900)
})

test('case ADD-SALARY of salary reducer' , () => {
    const salary: number = 700
    const action: AddSalaryActionType = {
        type: 'ADD-SALARY',
        bonus: 300
    }

    expect(salaryReducer(salary, action)).toBe(1000)
})

test('case REDUCE-SALARY of salary reducer' , () => {
    const salary: number = 1000
    const action: ReduceSalaryActionType = {
        type: 'REDUCE-SALARY',
        minus: 300
    }

    expect(salaryReducer(salary, action)).toBe(700)
})
test('case MULTIPLY-SALARY of salary reducer' , () => {
    const salary: number = 500
    const action: MultiplySalary = {
        type: 'MULTIPLY-SALARY',
        coefficient: 2
    }

    expect(salaryReducer(salary, action)).toBe(1000)
})
test('case DIVIDE-SALARY of salary reducer' , () => {
    const salary: number = 1000
    const action: DivideSalary = {
        type: 'DIVIDE-SALARY',
        coefficient: 0.7
    }

    expect(salaryReducer(salary, action)).toBe(700)
})

