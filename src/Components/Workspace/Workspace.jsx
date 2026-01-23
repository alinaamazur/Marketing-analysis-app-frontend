import React from 'react';
import WorkspaceHeader from './Components/WorkspaceHeader';
import WorkspaceSidebar from './Components/WorkspaceSidebar';
import PersonalDashboard from './Components/PersonalDashboard';
import TrainingPage from './Components/TrainingPage';
import StatisticsPage from './Components/StatisticsPage';
import CompetitorsPage from './Components/CompetitorsPage';
import './Workspace.css';
import { Routes, Route } from 'react-router-dom';

const MyWorkspacePage = () => {
    return (
        <div className='Workspace-layout'>
            <WorkspaceSidebar />
            <div className='Workspace-main'>
                <WorkspaceHeader />
                <Routes>
                    <Route path="/" element={<PersonalDashboard />} />
                    <Route path="training" element={<TrainingPage />} />
                    <Route path="statistics" element={<StatisticsPage />} />
                    <Route path="competitors" element={<CompetitorsPage />} />
                </Routes>
            </div>
        </div>
    );
};

export default MyWorkspacePage;
