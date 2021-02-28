import React from 'react';
import PropTypes from 'prop-types'

/**
 * Functional react component for congratulatory message.
 * @function
 * @returns {JSX.Element} - Renders component
 */
const Congrats = (props) => {

    if(props.success){
    return (<div data-test="component-congrats" className="alert alert-success">
            <span data-test="congrats-message">
                Congratulations! You guessed the word!
            </span>
        </div>)
    } else {
        return (
            <div data-test="component-congrats"/>
        )
    }
}

// Define prop types
Congrats.propTypes = {
    success: PropTypes.bool.isRequired
}

export default Congrats
