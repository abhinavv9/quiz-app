import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

//css imports
import classes from "./Dropdown.module.css";

const Dropdown = () => {
  const [isListOpen, setIsListOpen] = useState(false);

  const list = [
    { id: 1, title: "1m" },
    { id: "2", title: "2m" },
    { id: "3", title: "3m" },
  ];

  const [selectedItem, setSelectedItem] = useState(list[0]);

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  const selectListItem = (item) => {
    setSelectedItem(item);
    toggleList();
  };

  return (
    <div className={classes.dropdown}>
      <button type="button" className={classes.item} onClick={toggleList}>
        {selectedItem.title}
        <span> </span>
        {isListOpen ? (
          <FontAwesomeIcon className="floatRight" icon={faArrowUp} />
        ) : (
          <FontAwesomeIcon className="floatRight" icon={faArrowDown} />
        )}
      </button>
      {isListOpen && (
        <div className={classes.dropdownList}>
          {list.map((listItem) => (
            <button className={classes.item} onClick={() => selectListItem(listItem)}>
              {listItem.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
