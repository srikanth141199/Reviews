import { useState } from 'react';
import reviews from './data'
import { AiOutlineCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { FcAdvertising } from "react-icons/fc";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


const App = () => {

  const [review, setreview] = useState(reviews)
  const [pos, setpos] = useState(0)

  const prevHandler = () => {
    var newpos = pos;
    if (pos > 0) {
      newpos = newpos - 1;
    }
    else {
      newpos = review.length - 1;
    }
    setpos(newpos);
  }

  const nxtHandler = () => {
    var newpos = pos;
    if (pos < 3) {
      newpos++
    }
    else {
      newpos = 0;
    }
    setpos(newpos)
  }

  const supriseHandler = () => {
    var rannum = Math.floor(Math.random() * 4)
    console.log('random number : ',rannum , 'pos value : ',pos);
    if(rannum == pos && pos == review.length-1){
      console.log('for 4',rannum);
      rannum--
    }
    else if (rannum == pos && pos == 0){
      console.log('for 0',rannum);
      rannum++
    }
    else if(rannum == pos){
      console.log('for rest',rannum);
      rannum++
    }
    setpos(rannum);
  }

  return (
    <main>
      <article className='review'>
        <div className='img-con'>
        <img className='img1'src={review[pos].image} alt={review[pos].name} />
        <span className='icon'>
        <FaQuoteRight />
        </span>
        </div>
        <h4 className='author'>{review[pos].name}</h4>
        <p className='job'>{review[pos].job}</p>
        <p className='text'>{review[pos].text}</p>
        <AiOutlineCaretLeft className='prevbut' onClick={() => prevHandler()} /> <AiFillCaretRight className='nxtbut' onClick={() => nxtHandler()} /><br />

        <button className='btn'  style={{backgroundColor : 'orange'}}  onClick={() => supriseHandler()}>Suprise Me!</button>
      </article>
    </main>
  )
};
export default App;
