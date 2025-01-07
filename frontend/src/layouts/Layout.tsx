import React from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
    return (
        <>
            <div id="main">
                <Outlet />
            </div>
        </>
    );
};

export default Layout;
