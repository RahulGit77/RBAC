import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import UserManagement from "./components/UserManagement";
import RoleManagement from "./components/RoleManagement";
import PermissionManagement from "./components/PermissionManagement";
import styles from './app.module.css'; // Importing CSS module

const App = () => (
  <Router>
    <div className={styles.container}> {/* Main container styling */}
      <nav className={styles.nav}> {/* Navigation bar styling */}
        <ul className={styles.navList}>
          <li><Link to="/" className={styles.navItem}>Dashboard</Link></li>
          <li><Link to="/users" className={styles.navItem}>User Management</Link></li>
          <li><Link to="/roles" className={styles.navItem}>Role Management</Link></li>
          <li><Link to="/permissions" className={styles.navItem}>Permission Management</Link></li>
        </ul>
      </nav>

      <div className={styles.mainContent}> {/* Main content section */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/roles" element={<RoleManagement />} />
          <Route path="/permissions" element={<PermissionManagement />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
