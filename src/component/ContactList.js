import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const { contactList, searchName } = useSelector((state) => state);
  let [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    if (searchName !== "") {
      let list = contactList.filter((item) => item.name.includes(searchName));

      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [searchName, contactList]);
  return (
    <div className="contact-list-container">
      <SearchBox />
      <div className="contact-list">
        {/* 저장된 연락처 : {`${filteredList.length}개`} */}
        {filteredList.map((item, index) => (
          <ContactItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
