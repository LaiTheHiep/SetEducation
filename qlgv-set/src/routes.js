import React from 'react';
const Dashboard = React.lazy(() => import('./views/Components/Pages/Dashboard'));
const Groups = React.lazy(() => import('./views/Components/Pages/Groups'));
const RegisterStudy = React.lazy(() => import('./views/Components/Pages/RegisterStudy'));
const ScheduleStudy = React.lazy(() => import('./views/Components/Pages/ScheduleStudy'));
const SignUpProject = React.lazy(() => import('./views/Components/Pages/SignUpProject'));

const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard},
    { path: '/groups', name: 'Groups', component: Groups},
    { path: '/registers', name: 'RegisterStudy', component: RegisterStudy},
    { path: '/schedules', name: 'ScheduleStudy', component: ScheduleStudy},
    { path: '/projects', name: 'SignUpProject', component: SignUpProject},
];

export default routes;