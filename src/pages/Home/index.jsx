import React from 'react';
import {Message} from "../../components"
import "./Home.scss"
const Home = ()=>(
      
     <section className="home">
        
        <Message 
         avatar="https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1"
         text="nvariant Violation: App(): Nothing was returned from render. This , with Redux, I have a component(MyApp)"
         date= "Sat Jan 30 2021 18:00:53"
         attachments={[
            {
               filename: 'image.jpg',
               url: 'https://source.unsplash.com/100x100/?random=1&nature,water'
            },
            {
               filename: 'image.jpg',
               url: 'https://source.unsplash.com/100x100/?random=2&nature,water'
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
       
     </section>   
    );


export default Home;