import React from 'react';
import PropTypes from "prop-types"

import {Message} from '../'

const Messages = () =>{
    
    return (
    <div>
         <Message 
         avatar="https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1"
      
         date= "Sat Jan 30 2021 18:00:53"
         audio = "http://www.evidenceaudio.com/wp-content/uploads/2014/10/lyricslap.mp3"
           
        />  
       <Message
        avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
        text="Одной из причин быстрого роста популярности flexbox среди веб-разработчиков было то, что впервые были предоставлены адекватные возможности выравнивания."
        date="Sun Apr 21 2019 21:55:29"
        attachments={[
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=1&nature,water"
          },
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=2&nature,water"
          },
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=3&nature,water"
          }
        ]}
      />
         <Message 
         avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
         text="Hello, world!"
         date= "Sat Jan 30 2021 19:22:53"
         isMe={true}
         isReaded={false}
        />  
       {/* <Message 
         avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
         isTyping
        />  */}
       <Message 
         avatar="https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1"
         attachments={[
           
            {
               filename: 'image.jpg',
               url: 'https://source.unsplash.com/100x100/?random=2&nature,water'
            }
         ]}
        />
        <Message
        avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
        text="Одной из причин быстрого роста популярности flexbox среди веб-разработчиков было то, что впервые были предоставлены адекватные возможности выравнивания."
        date="Sun Apr 21 2019 21:55:29"
        
      />  <Message
      avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
      text="Одной из причин быстрого роста популярности flexbox среди веб-разработчиков было то, что впервые были предоставлены адекватные возможности выравнивания."
      date="Sun Apr 21 2019 21:55:29"
      
    />  <Message
    avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
    text="Одной из причин быстрого роста популярности flexbox среди веб-разработчиков было то, что впервые были предоставлены адекватные возможности выравнивания."
    date="Sun Apr 21 2019 21:55:29"
    
  />  <Message
  avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
  text="Одной из причин быстрого роста популярности flexbox среди веб-разработчиков было то, что впервые были предоставлены адекватные возможности выравнивания."
  date="Sun Apr 21 2019 21:55:29"
  
/>  <Message
        avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
        text="Одной из причин быстрого роста популярности flexbox среди веб-разработчиков было то, что впервые были предоставлены адекватные возможности выравнивания."
        date="Sun Apr 21 2019 21:55:29"
        
      />
    </div>
    )
}

Messages.propTypes = {
    items:PropTypes.array
}

export default Messages;