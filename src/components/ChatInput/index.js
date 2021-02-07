import React, {useState} from 'react';
import {Button, Input} from 'antd'
import PropTypes from "prop-types";
import './ChatInput.scss'
import classNames from 'classnames'

const ChatInput = props => {
   const[value, setValue] = useState('');
  
  return(
    <div className="chat-input">
    <div className="chat-input__smile-btn">
      <Button type="link" shape="circle" icon="smile" />
    </div>
     <Input onChange={e => setValue(e.target.value)} size="large" placeholder="Введите текст сообщения"/>
   <div className="chat-input__actions">
   <Button type="link" shape="circle" icon="camera" />
     {/* <Icon type="audio"/> */}
     {value ?
      <Button type="link" shape="circle" icon="right-circle"/>
      :
      <Button type="link" shape="circle" icon="audio" />
    }

   </div>
            
   </div>
   )
  };
  
  ChatInput.propTypes = {
    className: PropTypes.string
  };

export default ChatInput;