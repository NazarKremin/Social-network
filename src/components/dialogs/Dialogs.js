import React from 'react';
import './dialogs.css';
import {Link} from "react-router-dom";

const DialogItem = (props) => {

    return <div className={'dialog'}>
        <Link to={`/dialogs/${props.id}`}>{props.name}</Link>
    </div>
}

const Messages = (props) => {
    return <div className="dialog">{props.message}</div>
}

const Dialogs = (props) => {

    let dialogsElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElement = props.state.messages.map(m => <Messages message={m.message} id={m.id}/>)

    return (
        <div className={'dialogs'}>
            <div className={'dialogs_items'}>
                {dialogsElement}
            </div>
            <div className="messages">
                {messagesElement}
            </div>
        </div>

    );
};

export default Dialogs;