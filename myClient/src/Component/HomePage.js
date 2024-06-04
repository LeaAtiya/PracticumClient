import React from 'react';
import { FaUserCog } from 'react-icons/fa';


const HomePage = () => {
    return (
        <div className="container">
            <header>
                <h1 style={{ color: '#2c3e50', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FaUserCog style={{ marginRight: '0.5rem', color: '#3498db' }} />
                    Worker Management System
                </h1>
            </header>
            
            <main>
                <h2>Welcome to the Worker Management System</h2>
                <p>This system allows you to manage workers efficiently.</p>
            </main>
 
            <footer>
                <p>&copy; 2024 Worker Management System</p>
            </footer>
        </div>
    );
};

export default HomePage;
