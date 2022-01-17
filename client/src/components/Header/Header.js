import React from 'react';
import logo from "../../assets/logo-final.svg"
function Header(props) {
    return (
        <div className="py-2 px-4 flex bg-slate-900 items-center ">
            <img src={logo} className="h-8 w-8 rounded-xl mr-1" />
            <h1 className="text-green-600 font-semibold text-3xl">
                i8 Portal
                <span className="text-sm font-bold text-pink-600" >Food</span>
            </h1>
        </div>
    );
}

export default Header;