export default function Feedback({onOpen}){
    return(
        <a href="" onClick={e => {e.preventDefault();onOpen();}} className='my-10 flex gap-8 items-center '>
            <div>
              <h2 className='font-bold'>
                What do you like about FrancisDev?
              </h2>
              <p className='text-gray-600 text-sm '>
              lorem ipsum dolor sit amet, consectetur adipiscing elit.
          lorem ipsum dolor sit amet, consectetur adipiscing elit.
          lorem ipsum dolor sit amet, consectetur adipiscing elit.              </p>
            </div>
            <div>
              <button className='shadow-sm shadow-gray-400 border
              rounded-md py-1 px-4  gap-1 flex items-center text-gray-600'>
                <span className='triangle-vote-up '
                ></span>

                  80
                </button>
            </div>
          </a>
    );
}