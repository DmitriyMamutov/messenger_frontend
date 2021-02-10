import React from 'react';
import PropTypes from "prop-types"
import { Spin} from 'antd';
import classNames from 'classnames'
import {Message} from '../'

import './Messages.scss'

const Messages = ({blockRef, isLoading, items}) =>{
      return (
      
         <div ref={blockRef} className={classNames("messages", {'messages--loading': isLoading})}>
      {
        isLoading ? (
          <Spin tip="Загрузка сообщений" size="large">
  </Spin>
        ) : items && !isLoading ?  (
          items.length > 0 ? (
             items.map(items => <Message key={items._id} {...items}/>
          )
       ):(
       <div className="chat__dialog-messages-empty">Нет сообщений</div>

       )):(
       <div className="chat__dialog-messages-empty">Откройте диалог</div>

       )
       }
       </div>
          );
}

Messages.propTypes = {
    items:PropTypes.array
}

export default Messages;