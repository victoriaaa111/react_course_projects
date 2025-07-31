export default function Input({textArea, ...props}){
    const classes = "w-full mt-2 p-1 border rounded-xl border-[#3E2723] bg-stone-200 text-[#3E2723] focus:outline-none focus:border-dashed focus:border-2"
    return(
        <p className="flex-col gap-2 my-4">
            <label className="text-l font-montserrat text-[#3E2723] font-bold uppercase">{props.label}</label>
            {textArea ? <textarea className={classes} {...props}/> : <input className={classes} {...props}/>}
        </p>
    )
}