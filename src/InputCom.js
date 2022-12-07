import React, { useState } from "react";
import ItemCom from "./ItemCom";

const InputCom = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldValue) => {
      return [...oldValue, inputList];
    });
    // setItems('')
    setInputList('')
  }

  const deleteItem = (id) => {
    console.log("delete item");
    setItems((oldValue)=>{
      return oldValue.filter((arrEle, index)=>{
return index !==id
      })
    })

  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> TO DO LIST</h1>
          <br />
          <input
            type="text"
            placeholder="Add a item"
            onChange={itemEvent}
            value={inputList}
          />

          <button onClick={listOfItems}> + </button>

          <ol>
            {items.map((itemValue , index) => {
               return (
                 <ItemCom
                   text={itemValue}
                   key={index}
                   id={index}
                   onSelect={deleteItem}
                 />
               );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default InputCom;
