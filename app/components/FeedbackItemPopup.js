import Popup from "./PopUp";
import Button from "./Button";
import FeedbackItemPopupComments from "./FeedBackItemPopupComments";
export default function FeedbackItemPopup({title,description,setshow,votesCount}){
    return (
        <Popup title={''} setshow={setshow}>
            <div className="p-8 pb-2">
              <h2 className="text-lg font-bold mb-2"> 
                {title}
              </h2>
              <p>
                {description}
              </p>
            </div>
            <div className="flex justify-end  p-8 py-2 border-b">
              <Button primary>
              <span className='triangle-vote-up '></span>

                Upvote {votesCount}
              </Button>

            </div>
                <div>
                  <FeedbackItemPopupComments/>
                </div>
            </Popup>
    );
}   