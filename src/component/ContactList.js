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
    <div>
      <SearchBox />
      <div className="contact-list">
        num:{filteredList.length}
        {filteredList.map((item, index) => (
          <ContactItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
