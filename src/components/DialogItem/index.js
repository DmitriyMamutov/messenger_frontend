import React from "react";
import classNames from "classnames";

import { Time, IconReaded } from "../";

import "./DialogItem.scss";

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

const DialogItem = ({ user, message, unreaded }) => (
  <div
    className={classNames("dialogs__item", {
      "dialogs__item--online": user.isOnline
    })}
  >
    <div className="dialogs__item-avatar">
      {/* <img src={user.avatar} alt={`${user.fullname} avatar`} /> */}
      {getAvatar(
        "https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
      )}
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>Иван Иванов</b>
        <span>
          {/* <Time date={new Date()} /> */}
          13:03
        </span>
      </div>
      <div className="dialogs__item-info-bottom">
            <p>
              Устанавливает насыщенность шрифта. Значение устанавливается
         от 100 до 900 с шагом 100. Сверхсветлое начертание, которое
          может отобразить браузер
              </p>   
        
        <IconReaded isMe={true} isReaded={false} />
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