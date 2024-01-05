import Avatar from "./Avatar";
import Button from "./Button";
import { useState } from "react";
export default function FeedbackItemPopupComments(){
    const [commentText, setCommentText] = useState('');
    return (
        <div className="p-8">
            <form>
                <textarea placeholder="Dejanos saber que piensas..."  value={commentText} 
                className=" border rounded-md  p-2 w-full border p-2 rounded-md" 
                onChange={e => setCommentText(e.target.value)}/>
                <div className="flex justify-end gap-1">
                    <Button>Adjuntar archivos</Button>
                    <Button primary disabled={commentText === ''}>Comentar</Button>
                </div>
            </form>
            <div className="flex gap-4 mb-8 mt-8">
                <Avatar/>
                <div>
                    <p className="text-gray-600"> 
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="font-semibold mt-2 text-sm text-gray-500" >
                        Anonymus &middot; <span className="text-slate-500 text-nowrap">a few seconds ago</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}