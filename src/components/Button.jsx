const Button = ({text, fn, ...props}) => {
    return(
        <button
        type="button" 
        className="bg-[#00484C] text-white font-bold py-2 rounded-md mx-1.5 my-3
        hover:bg-[#25BFAB] hover:text-emerald-700"
        onClick={fn}  
        {...props}
        >
        {text}
          
        </button>
    )
}

export default Button;