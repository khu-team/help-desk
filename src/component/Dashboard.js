import React from 'react';
import AssigneProductToCustomer from './Products/AssigneProductToCustomer';
import EditProduct from './Edit/EditProduct';

const Dashboard = () => (
    <div className="welcome">
        <AssigneProductToCustomer />
        <EditProduct product={{
            id: 88888,
            platform: 'Android',
            customerId: 55555,
            categoryId: 3,
            category: 'هاست و سرور',
            ram: 8
        }}/>
    </div>
);

export default Dashboard;