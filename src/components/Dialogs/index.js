import React from "react";
import { DialogItem } from '../'
import orderBy from 'lodash/orderBy'
import "./Dialogs.scss";

const Dialogs = ({ items, userId }) => (
  <div className="dialogs">
    {orderBy (items, ["created_at"], ["desc"]).map(item => (
      <DialogItem
      key={item._id}
      isMe={item.user._id === userId}
      {...item}
      />
      
    ))}
  </div>

);

export default Dialogs;