import React from 'react'

function Settings({ name, time, changeTime }) {
    return (
        <div className='setting-time'>
            <h3 id={`${name.toLowerCase()}-label`}>{`${name} Length`}</h3>
            <div className='setting-container'>
                <button className='arrow arrow-up' id={`${name.toLowerCase()}-increment`} onClick={(e) => changeTime(name, e)}>
                    <i className="fa-solid fa-arrow-up"></i>
                </button>
                <h4 id={`${name.toLowerCase()}-length`}>{time}</h4>
                <button className='arrow arrow-down' id={`${name.toLowerCase()}-decrement`} onClick={(e) => changeTime(name, e)}>
                    <i className="fa-solid fa-arrow-down"></i>
                </button>
            </div>
        </div>
    )
}

export default Settings