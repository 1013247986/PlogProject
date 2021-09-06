import React, { useContext } from 'react';
import { myContext } from "@/reducer/reducer"
import { Link } from 'react-router-dom';
function Home(props) {
    const { state, dispatch } = useContext(myContext)
    return (
        <div >
            <p onClick={() => dispatch({ type: 'increment' })}>这是首页{state.count}</p>
            <Link to="/mine">去我的页面</Link>
        </div>
    )
}

export default Home;