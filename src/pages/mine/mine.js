import React, { useContext } from 'react';
import { myContext } from "@/reducer/reducer"
import { Link } from 'react-router-dom';
function Mine(props) {
    const { state, dispatch } = useContext(myContext)
    return (
        <div >
            <p onClick={() => dispatch({ type: 'decrement' })}>这是我的{state.count}</p>
            <Link to="/">去首页</Link>
        </div>
    )
}

export default Mine;