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
import { Button, Col, Dropdown, Layout, Menu, Row, Space } from "antd";
import React, { useEffect, useState } from "react";
import SideBar from "../components/sider";
import Head from "next/head";
import LoginPage from "./index";
import { useRouter } from "next/router";
const { Header, Sider, Content } = Layout;
const menu = (
	<Menu
		items={[
			{
				key: "1",
				label: "Profile",
			},
			{
				key: "2",
				label: "Logout",
			},
		]}
	/>
);
function MyApp({ Component, pageProps }) {
	const [collapsed, setCollapsed] = useState(false);
	const [login, setlogin] = useState(false);
	const router = useRouter();
	useEffect(() => {
		if (login) {
			router.push("/home");
		} else {
			router.push("/");
		}
	}, [login]);

	return (
		<>
			<Head>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
					integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
					crossorigin="anonymous"
					referrerpolicy="no-referrer"
				/>
			</Head>
			{login ? (
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
							<div
								style={{
									display: "inline",
									float: "right",
									marginRight:
										"5px",
								}}
							>
								<Space size={5}>
									<Button shape="circle">
										<i class="fa-sharp fa-solid fa-bell"></i>
									</Button>
									<Dropdown
										overlay={
											menu
										}
										placement="bottomLeft"
										arrow
									>
										<Button shape="circle">
											<i class="fa-solid fa-user"></i>
										</Button>
									</Dropdown>
								</Space>
							</div>
						</Header>
						<Content
							className="site-layout-background"
							style={{
								margin: "24px 16px",
								padding: 24,
								minHeight: 280,
							}}
						>
							<Component
								{...pageProps}
							/>
						</Content>
					</Layout>
				</Layout>
			) : (
				<LoginPage setlogin={setlogin} />
			)}
		</>
	);
}

export default MyApp;
