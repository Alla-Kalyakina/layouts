export default function IconSwitch({icon, onSwitch}){

    return (
        <>
            {(icon === 'view_list') ? <div onClick={onSwitch} className="material-icons view_module">view_module</div> : 
                <div onClick={onSwitch} className="material-icons view_list">view_list</div>}
        </>
    )
}