'use client'
import Image from 'next/image'
import FeedbackItem from './components/Feedbackitem'
import { useState } from 'react'
import FeedbackFormModal from './components/FeedbBackFormModal';
import Button from './components/Button';

export default function Home() {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [showFeedbackPopupItem, setShowFeedbackPopupItem] = useState(null);
  function openFeedbackModal(){
    console.log(showFeedbackModal);
    setShowFeedbackModal(true);
  } 
  function OpenFeedBackPopupItem(){
    showFeedbackPopupItem(true);
    
  }
  return (
    <main className='bg-white md:max-w-3xl mx-auto md:shadow-lg md:rounded-lg 
    my-8  overflow-hidden  ' >
      <div className='border bg-gradient-to-r from-cyan-400 to-blue-400 p-8 '>
        <div>
          <h1 className=' text-slate-800 font-bold text-2xl'>
            FrancisDev
          </h1>
          <p className='text-opacity-90 text-slate-700'>
          I appreciate your feedback, and I will take it into consideration for self-improvement.
          </p>
        </div>
        <div className='bg-gray-100 md:shadow-lg  px-4 py-2 border-b text-right m-1 mb-3 rounded-lg flex'>
          <div className='grow'>

          </div>
          <div>
            <Button primary onClick={openFeedbackModal} >Make a suggestion</Button>
          </div>
        </div>
        <div className='px-8 py-1   bg-white rounded-lg md:shadow-lg'>
          <FeedbackItem onOpen={OpenFeedBackPopupItem} />
          <FeedbackItem onOpen={OpenFeedBackPopupItem}/>
          <FeedbackItem onOpen={OpenFeedBackPopupItem}/>
          <FeedbackItem onOpen={OpenFeedBackPopupItem}/>
        </div>
        
      </div>
      {showFeedbackModal && (
      <FeedbackFormModal setshow={setShowFeedbackModal} />
    )}
<div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>    </main>
    
        )
}
