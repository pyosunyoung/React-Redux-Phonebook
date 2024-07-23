import React from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'

const ContactList = () => {
  const contactList = useSelector(state=>state.contactList)
  return (
    <div>
      <SearchBox/>
      {contactList.map(item => <ContactItem item={item}/>)} 
    </div> // 이럴떈 props쓰는게 좋다 리덕스 store가서 가져오는게 더 불편
  )
}

export default ContactList
