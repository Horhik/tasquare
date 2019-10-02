import React from 'react'
import {loupe} from "../../svg/navBarIcons";
class MainSearch extends React.Component{
    render() {
        return(
            <button className={'nav-bar__item main-search'}>
                {loupe}


            </button>
        )
    }
}
export default MainSearch