import { useEffect } from 'react';
import Button from "./Button";

export default function FeedbackFormModal({setshow}) {
    useEffect(() => {
        // Retira la clase de transformación después de una breve demora para que la animación sea perceptible
        setTimeout(() => {
            document.querySelector('.fixed').classList.remove('-translate-y-full');
        }, 50);
    }, []);

    return (
        <div className="fixed inset-0 bg-white md:bg-black md:bg-opacity-80 flex md:items-center transition-transform transform -translate-y-full duration-500 ease-in-out">
            <button onClick={( ) => setshow(false)} className='hidden md:block fixed top-4 right-4  text-white '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button>
            <div className="w-full">
                <div className="bg-white md:max-w-2xl md:mx-auto md:rounded-lg overflow-hidden">
                    <div className='relative'>
                        <button onClick={( ) => setshow(false)} className='md:hidden absolute top-4 left-8 text-gray-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                            </svg>

                        </button>
                        <h2 className="py-4 text-center border-b text-2xl font-bold">
                        
                        Haz una sugerencia
                        </h2>
                    </div>
                    
                    <form className="p-4">
                        <label className="mt-4 text-2md mb-1 block">Titulo</label>
                        <input className="w-full border p-2 rounded-md" type="text" placeholder="Un titulo descriptivo corto" />
                        <label className="mt-4 text-2md mb-1 block">Descripción</label>
                        <textarea className="w-full border p-2 rounded-md" placeholder="Describe tu sugerencia" />
                        <div className='flex gap-2 mt-2 justify-end'>
                            <Button>Adjuntar archivos</Button>
                            <Button primary>Crear post</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
