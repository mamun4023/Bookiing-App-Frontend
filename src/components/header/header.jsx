import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBed, faPlane, faCar, faTaxi, faCalendarDays} from '@fortawesome/free-solid-svg-icons';
import "./header.css";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';

import {DateRange} from 'react-date-range';
import { useState } from 'react';
import {format} from 'date-fns';


const Header = ()=>{
    const [openDate, setOpenDate] = useState(false);

    const [date, setDate] = useState([
        {
           startDate : new Date(),
           endDate : new Date(),
           key : 'selection' 
        }
    ])

    const [openOptions, setOptionsDate] = useState(false);
    const [options, setOptions] =  useState({
        adult : 1,
        children : 0,
        room : 1
    })

    return(
        <>
            <div className="header">
                <div className="headerContainer">
                    <div className="headerList">
                        <div className="headerListItem active">
                            <FontAwesomeIcon icon={faBed}  />
                            <span>Stays</span>
                        </div>
                        <div className="headerListItem">
                            <FontAwesomeIcon icon={faPlane}  />
                            <span>Flights</span>
                        </div>
                        
                        <div className="headerListItem">
                            <FontAwesomeIcon icon={faCar}  />
                            <span>Car Rentals</span>
                        </div>
                        
                        <div className="headerListItem">
                            <FontAwesomeIcon icon={faBed}  />
                            <span>Atractions</span>
                        </div>
                        <div className="headerListItem">
                            <FontAwesomeIcon icon={faTaxi}  />
                            <span>Airport Taxis</span>
                        </div>
                    </div>
                    <h1 className="headerTitle">A lifetime of discont</h1>
                    <p className="headerDesc">
                        Get Rewarded for you travels unlock instant savings of 10% or with a free account
                    </p>
                    <button className='headerBtn' > Sign In / Register </button>
                
                    <div className="headerSearch">
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faBed} className = 'headerIcon' />
                            <input 
                                type = "text"
                                placeholder='Where are you going?' 
                                className='headerSearchInput' 
                            />
                        </div>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faCalendarDays} className = 'headerIcon' />
                            <span onClick={()=> setOpenDate(!openDate)} className='headerSearchText'> {`${format(
                                date[0].startDate,
                                "MM/dd/yyyy"
                            )} to ${format(date[0].endDate, "MM/dd/yyyy")}` } </span>
                            {openDate && 
                                <DateRange 
                                    editableDateInputs = {true}
                                    onChange = {(item)=> setDate([item.selection])}
                                    moveRangeOnFirstSelection = {false}
                                    ranges = {date}
                                    className = "date"
                                />
                            }
                        </div>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faBed} className = 'headerIcon' />
                            <span className='headerSearchText' > {`${options.adult} adult ${options.children} children ${options.room} room`} </span>
                            <div className='options'>
                                <div className='optionItem'>
                                    <span className='optionText' > Adult </span>
                                    <div className="optionCounter">
                                        <button className='optionCounterButton'>-</button>
                                        <span className='optionCounterNumber'>1</span>
                                        <button className='optionCounterButton'>+</button>
                                    </div>
                                </div>
                                <div className='optionItem'>
                                    <span className='optionText' > Children </span>
                                    <div className="optionCounter"> 
                                        <button className='optionCounterButton'>-</button>
                                        <span className='optionCounterNumber'>0</span>
                                        <button className='optionCounterButton'>+</button>
                                    </div>
                                </div>
                                <div className='optionItem'>
                                    <span className='optionText' > Room </span>
                                    <div className="optionCounter"> 
                                        <button className='optionCounterButton'>-</button>
                                        <span className='optionCounterNumber'>1</span>
                                        <button className='optionCounterButton'>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="headerSearchItem">
                            <button className='headerBtn'> search </button>
                        </div>
                    </div>
                </div>
            </div>   
            
        </>
    )
}

export default Header;