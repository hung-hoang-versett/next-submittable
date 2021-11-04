import React from "react";
import { GetServerSideProps } from "next";
import { getData } from "pages/api/submittable/forms";
import { Button, List, Space, PageHeader } from "antd";
import { BarsOutlined, LinkOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
interface Props {
  forms: any;
}
const IconText = ({ icon, text }: any) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const FormsPage: React.FC<Props> = ({ forms }) => {
  const router = useRouter();
  const { items } = forms;
  return (
    <div>
      <PageHeader className="site-page-header" title="Forms" />
      <List
        itemLayout="vertical"
        size="large"
        dataSource={items}
        renderItem={(item: any) => (
          <List.Item
            key={item.formId}
            actions={[
              <IconText
                icon={BarsOutlined}
                text={`Total fields: ${item.fields.length}`}
                key="list-vertical-star-o"
              />,
              <IconText
                icon={BarsOutlined}
                text={`Type: ${item.formType}`}
                key="list-vertical-star-o"
              />,
              <Button
                type="link"
                icon={<LinkOutlined />}
                key={`${item.submissionId}-responses`}
                onClick={() => router.push(`responses/forms/${item.formId}`)}
              >
                Responses
              </Button>,
            ]}
          >
            <List.Item.Meta
              title={item.name}
              description={`Form Id: ${item.formId}`}
            />
          </List.Item>
        )}
      />
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await getData();
  return {
    props: {
      forms: data,
    },
  };
};
export default FormsPage;
