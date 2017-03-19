import React from 'react';

const Control = (props) => {
	const { status, life, btntext, startGame, inprogress, duration } = props;

	return (<div>
	    	<p>Life Left: {life}</p>
	    	<p>Time left {duration} seconds</p>
	    	<button disabled={inprogress} onClick={ () => startGame()}>{btntext}</button>
	    </div>
	   );
};

export default Control;
