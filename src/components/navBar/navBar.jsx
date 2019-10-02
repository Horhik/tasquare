import React from 'react'
import Pomodoro from "./pomodoro";
import AddTaskButton from "./addTaskButton";
import MainSearch from "./search";

class NavBar extends React.Component{
    render() {
        return (
            <section className={'nav-bar'}>
                <Pomodoro/>
                <AddTaskButton/>
                <MainSearch/>
            </section>
        );
    }
}
export default NavBar;