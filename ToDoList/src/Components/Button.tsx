
type propsType={
    callBack:()=>void
    name:string
}

export const Button=(props:propsType)=>{
    const onClickHandler=()=>{
        props.callBack()
    }
    return(
       <button onClick={onClickHandler}>{props.name}</button>
    )
}