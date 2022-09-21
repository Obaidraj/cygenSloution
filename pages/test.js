import Head from "next/head";
import React from "react";
import DataTable from "../components/test/dataTable";

const Test = () => {
	return (
		<div>
			<Head>
				<title>Test Page</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<DataTable />
			</main>
		</div>
	);
};

export default Test;
