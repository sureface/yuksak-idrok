import React from 'react';
import AdminLayout from "../components/admin/AdminLayout";

const AdminMenus = (props) => {
    return (
        <div>
            <AdminLayout history={props.history}>
                <h1>please choose Item that you want !</h1>
            </AdminLayout>
        </div>
    );
};

export default AdminMenus;