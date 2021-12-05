import './index.scss';

import React, {useState} from "react";

import Chevron from '../../assets/images/Chevron.svg'

const CustomSelect = () => {
    const [options, setOptions] = useState(false);
    const [selected, setSelected] = useState(0);
  
    const languages = ["Английский", "Русский", "Китайский", "Испанский"];

    const selectClasses = options ? 'select select-active' : 'select';
  
    const handleSelectMenu = () => {
        setOptions(!options);
      }

    const handleSelectOptionItem = (index) => {
        setSelected(index);
        setOptions(false);
    }

    const showOptionsList = () => {
        return(
          <ul className='select-options-list'>
            {languages.map((item, index) => {
              return(
                <li 
                  key={item}
                  className={selected === index ? "select-options-item selected" : "select-options-item"} 
                  onClick={() => handleSelectOptionItem(index)}>
                    {item}
                </li>
              )
            })}
          </ul>
        )
      }

    return(
        <>
            <div 
                className={selectClasses}
                onClick={handleSelectMenu}
            >
                <span>{languages[selected]}</span>
                <img src={Chevron} alt='select option'/>
            </div>
            {options && showOptionsList()}
        </>
    )
}

export default CustomSelect;
