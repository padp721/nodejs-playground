import { HomeOutlined, EditOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import type { MenuProps } from "antd";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: 'Home',
        key: '/',
        icon: <HomeOutlined />,
    },
    {
        label: 'Register',
        key: '/register',
        icon: <EditOutlined />,
    },
    {
        label: 'Login',
        key: '/login',
        icon: <CheckCircleOutlined />,
    },
];

export default function Header() {
    const navigate = useNavigate()
    const [current, setCurrent] = useState('/');

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
        navigate(e.key)
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
}