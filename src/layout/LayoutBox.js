import React, { Component, useReducer } from 'react';
import AppRouter from "@/routes/appRouter"
import { reducer, states, myContext } from "@/reducer/reducer"
const Layout = (props) => {
    // redux定义
    const [state, dispatch] = useReducer(reducer, states);
    return (
        <myContext.Provider value={{ state, dispatch }}>
            <div>
                这儿配置菜单和头部
                <AppRouter></AppRouter>
            </div>
        </myContext.Provider>
    )
}

export default Layout;