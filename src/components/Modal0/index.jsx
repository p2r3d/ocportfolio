import './modal.css';
import { useState } from 'react';
import Slideshow from '../Slideshow';

function Modal({selHousing}) {
const [toggle, setToggle] = useState(false)

  return (
    <div className="modalContainer">
        {toggle ? 
          <div className='modalContent'>
              <Slideshow selHousing={selHousing}/>            
            <button onClick={() => setToggle(false)}>X</button> 
          </div>    
            :
          <button onClick={() => setToggle(true)}>+</button> 
        } 
    </div>
  )
}
export default Modal;