import{
    LuLayoutDashboard,
    LuHandCoins,
    LuWalletMinimal,
    LuCreditCard,
    LuLogOut,
}from 'react-icons/lu';

export const SIDE_MENU_DATA = [
    {
        id:"1",
        label: 'Dashboard',
        icon : LuLayoutDashboard,
        path: '/dashboard',
    },
    {
        id:"2",
        label: 'Income',
        icon : LuWalletMinimal,
        path: '/income',
    },
    {
        id:"3",
        label: 'Expense',
        icon : LuHandCoins,
        path: '/expenses',
    },
    {
        id: "4",
        label: 'Subscription',
        icon: LuCreditCard,
        path: '/subscription',
    },
    {
        id:"6",
        label: 'Logout',
        icon : LuLogOut,
        path: 'logout',
    },
];
export default SIDE_MENU_DATA;
