import React from 'react'
class AddTaskButton extends React.Component{
    render() {
        return(
            <button className={'nav-bar__item add-task-btn'}>
                <svg width="97" height="97" viewBox="0 0 97 97" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path  className={'add-task-btn--svg'} d="M91.5 48.5C91.5 72.2482 72.2482 91.5 48.5 91.5C24.7518 91.5 5.5 72.2482 5.5 48.5C5.5 24.7518 24.7518 5.5 48.5 5.5C72.2482 5.5 91.5 24.7518 91.5 48.5Z" stroke="#2F69FF" stroke-width="11"/>
                    <rect x="45.5" y="23.5" width="7" height="47" rx="3.5" fill="#2F69FF" stroke="#2F69FF"/>
                    <rect x="72.5" y="44.5" width="7" height="47" rx="3.5" transform="rotate(90 72.5 44.5)" fill="#2F69FF" stroke="#2F69FF"/>
                </svg>


            </button>
        )
    }
}
export default AddTaskButton