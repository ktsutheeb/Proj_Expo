import React from "react"
import Domains from "./Domains"
import { Outlet } from "react-router-dom"

export default function Explore(){
    return(
        <div className="explore">
            <div className="explore_contents">
            </div>
            <div className=""></div>
            <Domains />
            <Outlet />
        </div>
    )
}
