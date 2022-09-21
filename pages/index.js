import { Button, Card, Checkbox, Col, Form, Input, Row } from "antd";
import Head from "next/head";
import Image from "next/image";

import Logo from "../public/logo.webp";
import { useRouter } from "next/router";
export default function Login({ setlogin }) {
	const router = useRouter();
	const onFinish = (values) => {
		console.log("Success:", values);
		setlogin(true);
		router.push("/home");
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<div>
			<Head>
				<title>Login</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Row
				type="flex"
				justify="center"
				align="middle"
				style={{ minHeight: "100vh" }}
			>
				<Col span={10}>
					<Card>
						<Row
							type="flex"
							justify="center"
							align="middle"
						>
							<Image
								src={Logo}
								alt="imageLogo"
								width={100}
								height={100}
							/>
						</Row>
						<Form
							name="basic"
							labelCol={{
								span: 8,
							}}
							wrapperCol={{
								span: 16,
							}}
							initialValues={{
								remember: true,
							}}
							onFinish={onFinish}
							onFinishFailed={
								onFinishFailed
							}
							autoComplete="off"
						>
							<Form.Item
								label="Username"
								name="username"
								rules={[
									{
										required: true,
										message: "Please input your username!",
									},
								]}
							>
								<Input />
							</Form.Item>

							<Form.Item
								label="Password"
								name="password"
								rules={[
									{
										required: true,
										message: "Please input your password!",
									},
								]}
							>
								<Input.Password />
							</Form.Item>

							<Form.Item
								name="remember"
								valuePropName="checked"
								wrapperCol={{
									offset: 8,
									span: 16,
								}}
							>
								<Checkbox>
									Remember
									me
								</Checkbox>
							</Form.Item>

							<Form.Item
								wrapperCol={{
									offset: 8,
									span: 16,
								}}
							>
								<Button
									type="primary"
									htmlType="submit"
								>
									Login
								</Button>
							</Form.Item>
						</Form>
					</Card>
				</Col>
			</Row>
		</div>
	);
}
