import React from "react";
import { GetServerSideProps } from "next";
import { getProjects } from "pages/api/submittable/projects";
import { List, Space } from "antd";
import { BarsOutlined } from "@ant-design/icons";

interface Props {
  projects: any;
}
const IconText = ({ icon, text }: any) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const ProjectsPage: React.FC<Props> = ({ projects }) => {
  console.log("projects", projects);
  const { items } = projects;
  return (
    <div>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 20,
        }}
        dataSource={items}
        renderItem={(item: any) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText
                icon={BarsOutlined}
                text={`Total fields:`}
                key="list-vertical-star-o"
              />,
            ]}
          >
            <List.Item.Meta title={item.name} description={item.description} />
            {item.content}
          </List.Item>
        )}
      />
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await getProjects();
  return {
    props: {
      projects: data,
    },
  };
};
export default ProjectsPage;
