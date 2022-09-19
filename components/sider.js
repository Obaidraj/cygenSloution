import React from "react";
import {
	PieChartOutlined,
	DesktopOutlined,
	FileOutlined,
	TeamOutlined,
	UserOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined,
} from "@ant-design/icons";

import { Layout, Menu } from "antd";
const { Sider } = Layout;
const SideBar = ({ collapsed }) => {
	const items = [
		{
			label: "item 1",
			key: "item-1",
			onClick: () => {
				console.log("item 1");
			},
		}, // remember to pass the key prop
		{ label: "item 2", key: "item-2" }, // which is required
		{
			label: "sub menu",
			key: "submenu",
			children: [
				{ label: "item 1", key: "submenu-item-1" },
				{ label: "item 2", key: "submenu-item-2" },
				{ label: "item 3", key: "submenu-item-3" },
			],
		},
	];
	return (
		<Sider trigger={null} collapsible collapsed={collapsed}>
			<div className="logo">
				<h3
					style={{
						color: "#fff",
						padding: "14px",
						textAlign: "center",
					}}
				>
					{collapsed ? (
						<UserOutlined />
					) : (
						<>
							<UserOutlined /> CYGEN
							SOLUTION
						</>
					)}
				</h3>
			</div>
			<hr />
			<Menu items={items} theme="dark" mode="inline" />
		</Sider>
	);
};

export default SideBar;
