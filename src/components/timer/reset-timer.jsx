import React from 'react'
import {connect} from 'react-redux';

const ResetTimer = props => {
    return (
        <button type={'button'}
        className={'timer__button timer__stop'}
        onClick={() => resetTimer}

        />
    )
}
export default connect(null, {

})(ResetTimer)
