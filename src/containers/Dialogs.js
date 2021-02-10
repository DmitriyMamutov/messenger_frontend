import React, {useState, useEffect} from 'react'
import {Dialogs as BaseDialogs} from '../components'
import {dialogsActions} from "../redux/actions"
import {connect} from 'react-redux';



const Dialogs = ({fetchDialogs,currentDialogId, setCurrentDialogId, items, userId}) => {
  const [inputValue, setValue] = useState('');
  const [filtered, setFilteredItems] = useState(Array.from(items));
 

  const onChangeInput = value =>{
    setValue(value);
    setFilteredItems(
       items.filter(
      dialog => 
      dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >=0));
  }

  

  useEffect(() => {
    if(!items.length){
      fetchDialogs();
    }else{
      setFilteredItems(items)
    }
    
  }, [items])

return( <BaseDialogs 
          userId={userId}
          items={filtered}
          onSearch={onChangeInput}
          inputValue={inputValue} 
          onSelectDialog={setCurrentDialogId}     
          currentDialogId={currentDialogId}
          />
)
        }

export default connect(({dialogs})=> dialogs, dialogsActions)(Dialogs);