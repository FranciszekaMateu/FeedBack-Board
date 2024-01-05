import { useState } from 'react';
import Button from "./Button";
import Popup from './PopUp';

export default function FeedbackFormModal({setshow}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    return (
        <Popup title={'Haz una sugerencia'} setshow={setshow}> 
            <form className="p-4">
                <label className="mt-4 text-2md mb-1 block">Titulo</label>
                <input className="w-full border p-2 rounded-md" type="text" 
                placeholder="Un titulo descriptivo corto" value={title}
                onChange={ev => setTitle(ev.target.value)}/>
                <label className="mt-4 text-2md mb-1 block">Descripción</label>
                <textarea className="w-full border p-2 rounded-md" 
                placeholder="Describe tu sugerencia" value={description} 
                onChange={ev => setDescription(ev.target.value)}/>
                <div className='flex gap-2 mt-2 justify-end'>
                    <Button>Adjuntar archivos</Button>
                    <Button primary>Crear post</Button>
                </div>
            </form>
        </Popup>
    )
}
