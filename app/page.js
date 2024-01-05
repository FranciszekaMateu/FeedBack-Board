'use client'
import FeedbackItem from './components/Feedbackitem'
import { useState } from 'react'
import FeedbackFormModal from './components/FeedbBackFormModal';
import Button from './components/Button';
import FeedbackItemPopup from './components/FeedbackItemPopup';
import Popup from './components/PopUp';

export default function Home() {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [showFeedbackPopupItem, setshowFeedbackPopupItem] = useState(null);

  function openFeedbackModal() {
    console.log(showFeedbackModal);
    setShowFeedbackModal(true);
  } 

  function OpenFeedBackPopupItem(feedback) {
    setshowFeedbackPopupItem(feedback);
  }

  const feedbacks = [
    {
      title: 'please posr more videos',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      votesCount: 80
    },
    {
      title: 'please posr more videos2 ',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      votesCount: 84
    },
    {
      title: 'please posr more videos 3',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      votesCount: 85
    }
  ];

  return (
    <main className='bg-white md:max-w-3xl mx-auto md:shadow-lg md:rounded-lg my-8 overflow-hidden'>
      <div className='border bg-gradient-to-r from-cyan-400 to-blue-400 p-8'>
        <div>
          <h1 className='text-slate-800 font-bold text-2xl'>
            FrancisDev
          </h1>
          <p className='text-opacity-90 text-slate-700'>
          Aprecio tus comentarios y los tendré en cuenta para mi mejorar personal.
          </p>
        </div>
        <div className='bg-gray-100 md:shadow-lg px-4 py-2 border-b text-right m-1 mb-3 rounded-lg flex'>
          <div className='grow'></div>
          <div>
            <Button primary onClick={openFeedbackModal}>Haz una sugerencia</Button>
          </div>
        </div>
        <div className='px-8 py-1 bg-white rounded-lg md:shadow-lg'>
          {feedbacks.map((feedback) => (
            <FeedbackItem onOpen={() => OpenFeedBackPopupItem(feedback)} {...feedback} />
          ))}
        </div>
      </div>
      {showFeedbackModal && (
        
          <FeedbackFormModal setshow={setShowFeedbackModal} />
        
      )}
      {showFeedbackPopupItem && (
        
          <FeedbackItemPopup setshow={setshowFeedbackPopupItem} {...showFeedbackPopupItem} />
        
      )}
    </main>
  );
}
