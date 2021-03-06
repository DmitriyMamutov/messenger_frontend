import React, {useEffect, useRef} from 'react'
import {Messages as BaseMessages} from '../components'
import {messagesActions} from "../redux/actions"
import {connect} from 'react-redux';

const Dialogs = ({currentDialogId, items, fetchMessages, isLoading}) => {

  const messagesRef = useRef(null);
  useEffect(() => {
    if(currentDialogId){
    fetchMessages(currentDialogId);
    }
  }, [currentDialogId])

  useEffect(()=>{
  
      messagesRef.current.scrollTo(0 ,9999)
    
  }, [items])

return( <BaseMessages 
          blockRef ={messagesRef} 
          items={items} 
          isLoading={isLoading}
          /> 
)
        }

export default connect(({dialogs, messages})=> ({
  currentDialogId: dialogs.currentDialogId,
  items: messages.items,
  isLoading: messages.isLoading
  }),
   messagesActions)(Dialogs);