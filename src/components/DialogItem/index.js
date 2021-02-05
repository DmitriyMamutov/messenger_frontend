import React from "react";
import classNames from "classnames";
import {IconReaded } from "../";

import "./DialogItem.scss";
import { format, isToday } from "date-fns";

const getMessageTime = created_at => {
  if(isToday(created_at)){
    return format(
      created_at,
      'HH:mm'
    )    
  }else{
    return format(created_at, "DD.MM.YYYY")
  }
}

const getAvatar = avatar => {
  if (avatar) {
    return (
      <img
        src="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
        alt=""
      />
    );
  } else {
    // make avatar
  }
};

const DialogItem = ({ user, text, created_at, unreaded, isMe }) => (
  <div
    className={classNames("dialogs__item", {
      "dialogs__item--online": user.isOnline
    })}
  >
    <div className="dialogs__item-avatar">
     
      {getAvatar(user.avatar)}
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>{user.fullname}</b>
        <span>
          {getMessageTime(created_at)}
          
        </span>
      </div>
      <div className="dialogs__item-info-bottom">
            <p>
              {text}
              </p>   
        
        {isMe && <IconReaded isMe={true} isReaded={false} />}
        {unreaded > 0 && (
          <div className="dialogs__item-info-bottom-count">
            {unreaded > 9 ? "+9" : unreaded}
          </div>
        )}
      </div>
    </div>
  </div>
);

export default DialogItem;