import AppSubMenu from './AppSubMenu';

const AppMenu = () => {
    const model = [

        {
            label: 'MAIN PAGES',
            icon: 'pi pi-fw pi-briefcase',
            items: [
                {
                    label: 'Landing',
                    icon: 'pi pi-fw pi-globe',
                    to: '/landing'
                },
                {
                    label: 'Auth',
                    icon: 'pi pi-fw pi-user',
                    items: [
                        {
                            label: 'Login',
                            icon: 'pi pi-fw pi-sign-in',
                            to: '/auth/login'
                        },
                        {
                            label: 'Error',
                            icon: 'pi pi-fw pi-times-circle',
                            to: '/auth/error'
                        },
                        {
                            label: 'Access Denied',
                            icon: 'pi pi-fw pi-lock',
                            to: '/auth/access'
                        },
                        {
                            label: 'Register',
                            icon: 'pi pi-fw pi-user-plus',
                            to: '/auth/register'
                        },
                        {
                            label: 'Forgot Password',
                            icon: 'pi pi-fw pi-question',
                            to: '/auth/forgotpassword'
                        },
                        {
                            label: 'New Password',
                            icon: 'pi pi-fw pi-cog',
                            to: '/auth/newpassword'
                        },
                        {
                            label: 'Verification',
                            icon: 'pi pi-fw pi-envelope',
                            to: '/auth/verification'
                        },
                        {
                            label: 'Lock Screen',
                            icon: 'pi pi-fw pi-eye-slash',
                            to: '/auth/lockscreen'
                        }
                    ]
                },

                {
                    label: 'About Us',
                    icon: 'pi pi-fw pi-user',
                    to: '/pages/aboutus'
                },
                {
                    label: 'Not Found',
                    icon: 'pi pi-fw pi-exclamation-circle',
                    to: '/pages/notfound'
                },
 
                {
                    label: 'Contact Us',
                    icon: 'pi pi-fw pi-phone',
                    to: '/pages/contact'
                }
            ]
        },



        {
            label: 'Dashboards',
            icon: 'pi pi-home',
            items: [
                {
                    label: 'Dashboard',
                    icon: 'pi pi-fw pi-image',
                    to: '/uikit/charts'
                }
            ]
        },

        {
            label: 'MSATER SHEET',
            icon: 'pi pi-home',
            items: [
                {
                    label: 'FORMS',
                    icon: 'pi pi-fw pi-home',
                    to: '/uikit/formlayout'
                },
                {
                    label: 'TABLES',
                    icon: 'pi pi-fw pi-image',
                    to: '/uikit/table'
                }
            ]
        },


        {
            label: 'Conustruction',
            icon: 'pi pi-home',
            items: [
                {
                    label: 'CONTRACT',
                    icon: 'pi pi-fw pi-home',
                    to: '/pages/contract'
                },

                {
                    label: 'CIVIL',
                    icon: 'pi pi-fw pi-image',
                    to: '/pages/civil'
                },

                {
                    label: 'Crud',
                    icon: 'pi pi-fw pi-pencil',
                    to: '/pages/crud'
                },
            ]
        },

        {
            label: 'Apps',
            icon: 'pi pi-th-large',
            items: [
               
                {
                    label: 'Calendar',
                    icon: 'pi pi-fw pi-calendar',
                    to: '/apps/calendar'
                },
                            ]
        },
       
        {
            label: 'User Management',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'Users',
                    icon: 'pi pi-fw pi-list',
                    to: '/profile/list'
                },

                {
                    label: 'Roles',
                    icon: 'pi pi-fw pi-list',
                    to: '/profile/list'
                },

                {
                    label: 'Create',
                    icon: 'pi pi-fw pi-plus',
                    to: '/profile/create'
                }
            ]
        },
      
    ];

    return <AppSubMenu model={model} />;
};

export default AppMenu;
