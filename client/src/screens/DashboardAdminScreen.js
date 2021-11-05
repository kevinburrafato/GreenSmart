import React from 'react';
import { Link } from 'react-router-dom';

export default function DashboardAdminScreen() {
    return (
        <div className="row center">
            <div className="card card-body dashboard-card">
                <Link to="/productlist">Products</Link>
            </div>
            <div className="card card-body dashboard-card">
                <Link to="/orderlist">Orders</Link>
            </div>
            <div className="card card-body dashboard-card">
                <Link to="/userlist">Users</Link>
            </div>
        </div>
    );
}