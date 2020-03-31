import React from 'react';
import PropTypes from 'prop-types'


const deleteItem = (props) => {
	 const handleDeleteLastItem = event => {props.onDeleteLastItem();
          };

    	
    	
		return (
        
        	<button onClick = {handleDeleteLastItem} disabled = {props.buttonDisabled}> Delete last item </button>
        
        );
    
    

};

deleteItem.propTypes = {
  	buttonDisabled: PropTypes.func.isRequired,
  	onDeleteLastItem: PropTypes.func.isRequired,
	};

export default deleteItem