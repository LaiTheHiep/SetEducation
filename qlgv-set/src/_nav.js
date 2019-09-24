export default{
  items: [
    {
      name: 'Trang chủ',
      url: '/',
      icon: 'icon-speedometer',
    },
    {
      name: 'Thời khóa biểu',
      url: '/schedules',
      icon: 'cui-calendar',   
    },
    {
      name: 'Nhóm học tập',
      url: '/groups',
      icon: 'fa fa-users',
    },
    {
      name: 'Đăng ký học tập',
      url: '/registers',
      icon: 'icon-note',
    },
    {
      name: 'Đăng ký đồ án',
      url: '',
      icon: 'icon-graduation',    
      children: [
        {
          name: 'Project 1',
          url: '/projects/prj1',
          icon: 'icon-puzzle',
        },
        {
          name: 'Project 2',
          url: '/projects/prj2',
          icon: 'icon-puzzle',
        },
        {
          name: 'Project 3',
          url: '/projects/prj3',
          icon: 'icon-puzzle',
        },
        {
          name: 'Đồ án tốt nghiệp',
          url: '/projects/datn',
          icon: 'icon-puzzle',
        },
      ],
    },    
  ]
};