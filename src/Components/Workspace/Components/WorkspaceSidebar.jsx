import React from 'react';
import logo from '../Icons/logo.png';
import TrainingImg from '../Icons/WorkspaceIcons/training.png';
import StatisticsImg from '../Icons/WorkspaceIcons/statistics.png';
import CompetitorImg from '../Icons/WorkspaceIcons/competitors.png';
import AbTestingImg from '../Icons/WorkspaceIcons/abtesting.png';
import ReportImg from '../Icons/WorkspaceIcons/report.png';
import SmileImg from '../Icons/WorkspaceIcons/smile.png';
import SettingsImg from '../Icons/WorkspaceIcons/settings.png';
import '../Components/ComponentsCss/WorkspaceSidebar.css';
import '../Workspace.css';
import { Link } from 'react-router-dom';

function NavItem({ label, icon, className }) {
    return (
        <div className='Nav-item'>
            <img
                src={icon}
                alt={`${label} icon`}
                className={`Nav-icon ${className || ''}`}
            />
            <p>{label}</p>
        </div>
    );
}

const WorkspaceSidebar = () => (
    <div className='Workspace-sidebar'>
        <aside className='Sidebar'>
            <div className='Sidebar-top'>
                <img src={logo} alt='Logo' className='logo' />
                <nav className='Nav-items'>
                    <Link to="/my-workspace/training"><NavItem label='Training' icon={TrainingImg} className='Training-icon' /></Link>
                    <Link to="/my-workspace/statistics"><NavItem label='Statistics' icon={StatisticsImg} className='Statistics-icon' /></Link>
                    <Link to="/my-workspace/competitors"><NavItem label='Competitors' icon={CompetitorImg} className='Competitors-icon' /></Link>
                    {/* <NavItem label='Reports' icon={ReportImg} className='Reports-icon' /> */}
                    {/* <NavItem label='A/B Testing' icon={AbTestingImg} className='Abtesting-icon' /> */}
                    <Link to="/my-workspace/brandtone"><NavItem label='Brand Tone' icon={SmileImg} className='Sentiment-icon' /></Link>
                </nav>
            </div>
            {/* <img src={SettingsImg} alt='Settings' className='Settings-icon' /> */}
        </aside>
        <header className='My-workspace-header'></header>
    </div>
);

export default WorkspaceSidebar;
