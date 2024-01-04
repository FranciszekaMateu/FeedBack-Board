export default function Button(props) {
  return (
    <button {...props} className={' py-1 px-2 rounded-md  text-opacity-90' + (props.primary ? ' bg-blue-500 text-white' : 'text-gray-600')}></button>
  );
}