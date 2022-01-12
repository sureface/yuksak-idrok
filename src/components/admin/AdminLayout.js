import React from 'react';
import {AiOutlineUser} from "react-icons/ai";
import {Link, useParams} from "react-router-dom";
import "../../styles/admin.scss";

const AdminLayout = (props) => {
    let path = props.history.location.pathname
    console.log(path, "path")
    // const {names} = useParams();

    return (
        <div className="admin-layout w-full h-screen flex ">
            <div className="admin-layout-left h-full overflow-y-auto bg-white py-3">
                <div className="w-full flex items-center justify-around px-5 mb-10">
                    <div className="text-blue-500 bg-gray-200 rounded-full h-14 w-14 flex items-center justify-center">
                        <AiOutlineUser  className="text-5xl"/>
                    </div>
                    <div className="text-center font-semibold">
                        <div className="text-lg">Jasur Jo'rayev</div>
                        <p className="mb-0">Admistrator</p>
                    </div>
                </div>
                <div className="menu">
                    <ul className="flex flex-col">
                        <li className="nav-item"><Link to={`${path}/courses`} className={`nav-link ${path === "/admin/menus/courses" ? 'active' : ''}`}>Kurslar</Link></li>
                        <li className="nav-item"><Link to={`${path}/news`} className={`nav-link ${path === "/admin/menus/news" ? 'active' : ''}`}>Yangliklar</Link></li>
                        <li className="nav-item"><Link to={`${path}/teachers`} className={`nav-link ${path === "/admin/menus/teachers" ? 'active' : ''}`}>Ustozlar</Link></li>
                        <li className="nav-item"><Link to={`${path}/about`} className={`nav-link ${path === "/admin/menus/about" ? 'active' : ''}`}>Biz haqmzda</Link></li>
                        <li className="nav-item"><Link to={`${path}/certification`} className={`nav-link ${path === "/admin/menus/certification" ? 'active' : ''}`}>setifikatlar</Link></li>
                        <li className="nav-item"><Link to={`${path}/contact`} className={`nav-link ${path === "/admin/menus/contact" ? 'active' : ''}`}>kantak</Link></li>
                    </ul>
                </div>
            </div>
            <div className="admin-layout-right h-full overflow-y-auto p-5">
                {props.children}
            </div>
        </div>
    );
};

export default AdminLayout;