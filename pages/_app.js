import "../styles/globals.css";
import "antd/dist/antd.css";
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
import React, { useState } from "react";
import SideBar from "../components/sider";
const { Header, Sider, Content } = Layout;
function MyApp({ Component, pageProps }) {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<>
			<Layout style={{ height: "100vh" }}>
				<SideBar collapsed={collapsed} />
				<Layout className="site-layout">
					<Header
						className="site-layout-background"
						style={{
							padding: 0,
						}}
					>
						{React.createElement(
							collapsed
								? MenuUnfoldOutlined
								: MenuFoldOutlined,
							{
								className: "trigger",
								onClick: () =>
									setCollapsed(
										!collapsed
									),
							}
						)}
					</Header>
					<Content
						className="site-layout-background"
						style={{
							margin: "24px 16px",
							padding: 24,
							minHeight: 280,
						}}
					>
						<Component {...pageProps} />
					</Content>
				</Layout>
			</Layout>
		</>
	);
}

export default MyApp;
