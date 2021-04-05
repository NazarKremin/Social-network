import React,{useState} from 'react';
import './post-style.css';

const Post = (props) => {

    const [counter, setCounter] = useState(0)

    const clickLike = () =>{
        setCounter(counter +1)
    }

    return (
        <div>
            <div className={'item'}>
                <img src='https://i.pinimg.com/originals/04/a8/73/04a87347b071ec062a586e02c23f6221.png' className='posts_img'/>
                {props.message}
            </div>
            <div>
                <div>{counter}</div>
                <button onClick={clickLike}>Like</button>
            </div>

        </div>
    );
};

export default Post;