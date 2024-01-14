type MenuOption = {
    id: number,
    name: string,
    icon: string
}

const menuItems: MenuOption[] = [
    {
        "id": 1,
        "name": "Dashboard",
        "icon": "DiGhostSmall"
    },
    {
        "id": 2,
        "name": "Future Orders",
        "icon": "DiStreamline"
    },
    {
        "id": 3,
        "name": "Place Order",
        "icon": "TiShoppingCart"
    },
    {
        "id": 4,
        "name": "History",
        "icon": "TiFolderOpen"
    },
    {
        "id": 5,
        "name": "Settings",
        "icon": "DiAptana"
    },
    {
        "id": 6,
        "name": "Logout",
        "icon": "IoLogOutOutline"
    }
];

export default menuItems;
  