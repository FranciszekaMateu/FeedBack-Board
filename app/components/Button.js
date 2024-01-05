export default function Button(props) {
  return (
<button
  {...props}
  disabled={props.disabled}
  className={`py-1 gap-1 px-2 rounded-md flex items-center justify-center text-opacity-90 
    ${props.primary ? 'bg-blue-500 font-semibold text-white border ' : 'text-gray-600 border border-gray-300'}
    hover:bg-cyan-500 hover:text-white  transition-all duration-300 ease-in-out`+ (props.disabled ? ' opacity-50 cursor-not-allowed' : '')}
>
  {props.children}
</button>


  );
}