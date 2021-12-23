import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}


// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addUser()
        }
    }
    const inputClass = error.length > 0 ? s.inputError  : s.input;

    return (
        <div>
            <div className={s.form}>
                <input className={inputClass} value={name} onChange={setNameCallback} onKeyPress={onKeyPressHandler}/>
                <label className={s.label}>Name</label>
                <button className={s.button} onClick={addUser}>add</button>
                <div className={s.error}>{error}</div>
            </div>
            <div className={s.totalUsers}>{totalUsers}</div>

        </div>
    )
}

export default Greeting
