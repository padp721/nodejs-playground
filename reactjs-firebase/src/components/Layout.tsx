import React from "react"
import Header from "./Header"
import { Outlet } from "react-router-dom"

export function Component() {
    return (
        <React.Fragment>
            <Header />
            <Outlet />
        </React.Fragment>
    );
}