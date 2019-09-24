import React from 'react';
const Dashboard = React.lazy(() => import('./views/Components/Pages/Dashboard'));
const Groups = React.lazy(() => import('./views/Components/Pages/Groups'));
const RegisterStudy = React.lazy(() => import('./views/Components/Pages/RegisterStudy'));
const ScheduleStudy = React.lazy(() => import('./views/Components/Pages/ScheduleStudy'));
const FirstProject = React.lazy(() => import('./views/Components/Pages/ProjectRegister/Project'));
const SecondProject = React.lazy(() => import('./views/Components/Pages/ProjectRegister/Project'));
const ThirdProject = React.lazy(() => import('./views/Components/Pages/ProjectRegister/Project'));
const GraduateProject = React.lazy(() => import('./views/Components/Pages/ProjectRegister/Project'));

const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard},
    { path: '/groups', name: 'Groups', component: Groups},
    { path: '/registers', name: 'RegisterStudy', component: RegisterStudy},
    { path: '/schedules', name: 'ScheduleStudy', component: ScheduleStudy},
    { path: '/projects/prj1', name: 'FirstProject', component: FirstProject},  
    { path: '/projects/prj2', name: 'SecondProject', component: SecondProject},
    { path: '/projects/prj3', name: 'ThirdProject', component: ThirdProject},
    { path: '/projects/datn', name: 'GraduateProject', component: GraduateProject},  
];

export default routes;