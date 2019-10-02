import React from 'react';
import Priority from "./priority";

class DayDate extends React.Component {
    render() {
        return(
            <header className={'header'}>
                <h1 className={'h1 header__h1'}>Today</h1>
                <nav className={'priority--wrapper'}>
                    <ul className={'priority--inner'}>
                        <li>
                            <Priority label={"iU"}/>
                        </li>
                        <li>
                            <Priority label={"iN"}/>
                        </li>
                        <li>
                            <Priority label={"nU"}/>
                        </li>
                        <li>
                            <Priority label={"nN"}/>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default DayDate