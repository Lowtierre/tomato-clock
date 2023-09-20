import React from 'react'

function Commands({ play, resetTimer, timer }) {
    return (
        <div className='commands'>
            <button className='play-pause'  id="start_stop" onClick={timer}>
            {play ? 
                <i className="fa-solid fa-pause"></i>
            :
                <i className="fa-solid fa-play"></i>
            }
            </button>
            <button className='reset' id="reset" onClick={resetTimer}>
                <i className="fa-solid fa-arrows-rotate"></i>            </button>
        </div>
    )
}

export default Commands