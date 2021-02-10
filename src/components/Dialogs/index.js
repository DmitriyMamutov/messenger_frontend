import React from "react";
import { DialogItem } from '../'
import orderBy from 'lodash/orderBy'
import {Input} from "antd";
import "./Dialogs.scss";

const Dialogs = ({items, userId, onSearch, inputValue, onSelectDialog, currentDialogId }) => (
  <div className="dialogs">
     <div className="dialogs__search">
            <Input.Search 
              value={inputValue}
               placeholder="Поиск среди контактов"
               onChange={e => onSearch(e.target.value)}
               />
         </div>
    {items.length ? orderBy (items, ["created_at"], ["desc"]).map(item => (
      <DialogItem
      onSelect={onSelectDialog}
      key={item._id}
      isMe={item.user._id === userId}
      currentDialogId={currentDialogId}
      {...item}
      />
      
    )): <div className="dialogs__empty">Ничего не найдено</div>}
  </div>

);

export default Dialogs;