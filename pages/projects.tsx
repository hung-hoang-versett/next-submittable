import React from "react";
import { GetServerSideProps } from "next";
import { getProjects } from "pages/api/submittable/projects";
import { List, Space, PageHeader } from "antd";
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
  const { items } = projects;
  return (
    <div>
      <PageHeader className="site-page-header" title="Projects" />
      <List
        itemLayout="vertical"
        size="large"
        dataSource={items}
        renderItem={(item: any) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText
                icon={BarsOutlined}
                text={`Total review stages: ${item.reviewStages.length}`}
                key="list-vertical-star-o"
              />,
            ]}
          >
            <List.Item.Meta title={item.name} description={item.description} />
            <Space>
              <div
                dangerouslySetInnerHTML={{ __html: item.guidelinesHtml }}
              ></div>
            </Space>
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
