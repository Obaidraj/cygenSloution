import React from "react";

import Logo from "../public/logo.webp";
import { Layout, Menu } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
const { Sider } = Layout;
const SideBar = ({ collapsed }) => {
  const router = useRouter();
  const items = [
    {
      label: "Home",
      key: "home",
      icon: <i className="fa-solid fa-house-user  ant-menu-item-icon"></i>,
      onClick: () => {
        router.push("/home");
      },
    }, // remember to pass the key prop
    {
      label: "Test",
      icon: <i className="fa-solid fa-calendar-check ant-menu-item-icon"></i>,
      key: "test",
      onClick: () => {
        router.push("/test");
      },
    }, // which is required
    {
      label: "Questions",
      icon: <i className="fa-solid fa-cube ant-menu-item-icon"></i>,
      key: "questions",
      onClick: () => {
        alert("Questions");
      },
    },
    {
      label: "Media Library",
      icon: <i className="fa-solid fa-image ant-menu-item-icon"></i>,
      key: "mediaLibrary",
      onClick: () => {
        alert("Media Library");
      },
    },
    {
      label: "Categories",
      icon: <i className="fa-solid fa-list ant-menu-item-icon"></i>,
      key: "categories",
      onClick: () => {
        alert("Categories");
      },
    },
    {
      label: "Admin",
      key: "admin",
      icon: <i className="fa-solid fa-user-shield ant-menu-item-icon"></i>,
      children: [
        {
          label: (
            <>
              <i
                className="fa-solid fa-user-group"
                style={{
                  padding: "5px",
                }}
              ></i>
              Tenants
            </>
          ),
          key: "tenants",
          onClick: () => {
            alert("tenants");
          },
        },
        {
          label: (
            <>
              {" "}
              <i
                className="fa-solid fa-user-group"
                style={{
                  padding: "5px",
                }}
              ></i>{" "}
              Users
            </>
          ),
          key: "users",
          onClick: () => {
            alert("users");
          },
        },
        {
          label: (
            <>
              {" "}
              <i
                className="fa-solid fa-users"
                style={{
                  padding: "5px",
                }}
              ></i>{" "}
              Roles
            </>
          ),
          key: "roles",
          onClick: () => {
            alert("roles");
          },
        },
        {
          label: "Exams",
          label: (
            <>
              {" "}
              <i
                className="fa-sharp fa-solid fa-file-pen"
                style={{
                  padding: "5px",
                }}
              ></i>{" "}
              Exams
            </>
          ),
          key: "exams",
          onClick: () => {
            alert("exams");
          },
        },
      ],
    },
    {
      label: "Knowledge Base",
      icon: (
        <i className="fa-sharp fa-solid fa-circle-question ant-menu-item-icon"></i>
      ),
      key: "knowledgeBase",
      onClick: () => {
        alert("knowledgeBase");
      },
    },
  ];
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={230}
      //   style={{ width: "230px" }}
    >
      <div className="logo">
        <h3
          style={{
            color: "#fff",
          }}
        >
          {collapsed ? (
            <Image src={Logo} alt="Image logo" width={50} height={50} />
          ) : (
            <>
              <Image src={Logo} alt="Image logo" width={50} height={50} /> CYGEN
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
