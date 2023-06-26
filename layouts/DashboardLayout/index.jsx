import {Layout, theme} from "antd";

import AppFooter from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import {useState} from "react";

const {Header, Footer, Sider, Content} = Layout;

// function getItem(label, key, icon, children, type) {
//   return {key, icon, children, label, type};
// }
//
// const items = [
//   {key: "home", disabled: true, label: <h4 className={"font-semibold text-[#C2C2C2]"}>Home</h4>},
//
//   getItem("داشبورد", "dashboard"),
//   getItem("اطلاعات مشتری", "customerInfo",()=>{},[
//     getItem(<Link href={"/dashboard/profile"}>پروفایل</Link>, "profile"),
//     getItem("سوابق خرید", "purchaseHistory"),
//   ]),
//   getItem("سناریوها", "scenarios"),
//   getItem("فضاها", "spaces"),
//
//   {
//     type: "divider",
//   },
//   {key: "devices", disabled: true, label: <h4 className={"font-semibold text-[#C2C2C2]"}>دستگاه‌ها</h4>},
//
// ];

const DashboardLayout = ({children}) => {
  const {
    token: {colorBgContainer},
  } = theme.useToken();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const handleSidebarCollapsed = (collapsed) => {
    setSidebarCollapsed(collapsed)
  }
  return (
    <>
      <Layout hasSider>
        <Sider
          // trigger={null}
          collapsible
          width={250}
          // collapsed={collapsed}
          theme={"light"}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
            handleSidebarCollapsed(broken)
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
            handleSidebarCollapsed(collapsed)
          }}
          // className={"overflow-y-scroll overflow-x-visible fixed h-screen top-0 bottom-0"}
          className={
            "[&_.ant-layout-sider-zero-width-trigger]:top-2 &_.ant-layout-sider-zero-width-trigger]:z-[999px] [&_.ant-layout-sider-zero-width-trigger]:bg-[#3A57E8] h-screen z-20 top-0 bottom-0 left-0"
          }
          style={{position: "fixed"}}
          // style={{ overflowY: "auto", overflowX: "scroll" }}
        >
          <Sidebar/>
        </Sider>
        <Layout>
          {/*<Header className={"h-[4.75rem] py-2 px-8 bg-[#F7F7F7] fixed top-0 w-full z-10"}>*/}
          {/*</Header>*/}

          <Content className={"min-h-screen"}>
            <div className={"p-10 flex flex-col gap-12 md:ml-[270px]"}
                 style={{marginLeft: sidebarCollapsed ? 0 : 270}}
            >
              {children}
            </div>

          </Content>

          <Footer className={"bg-white bottom-0 w-full z-10"}>
            <AppFooter/>
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default DashboardLayout;
