import React from 'react';
import PropTypes from 'prop-types'

const Input = ({secretWord}) => {
    // It is not destructured so that we can test it!
    const [currentGuess, setCurrentGuess] = React.useState("");

    return <div data-test="component-input"> 
    <form className="form-inline">
        <input data-test="input-box" className="mb-2 mx-sm-2"
        type="text"
        placeholder="enter guess"
        value={currentGuess}
        onChange={(event)=> {
            setCurrentGuess(event.target.value)
        }}
        />

        <button onClick={event => {
            event.preventDefault()
            setCurrentGuess('')
        }} data-test="submit-button" className="btn btn-primary mb-2">
            Submit
        </button>
    </form>

    </div>
}

Input.propTypes = {
    secretWord: PropTypes.string.isRequired
}

export default Input