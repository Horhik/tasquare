import React from 'react'
import {connect} from 'react-redux'

const Search = (props) => {
    return (
        <section>
            <h1 className="visually-hidden">Search</h1>
            <div className="timer--wrapper">
                timer
                Search
            </div>
        </section>
    )
}
export default connect()(Search)