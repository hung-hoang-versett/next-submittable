import React from "react";
import { GetServerSideProps } from "next";
import { getData } from "pages/api/submittable/forms";
import { List, Space } from "antd";
import { BarsOutlined } from "@ant-design/icons";

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
  console.log("forms", forms);
  const { items } = forms;
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
                text={`Total fields: ${item.fields.length}`}
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
  const { data } = await getData();
  return {
    props: {
      forms: data,
    },
  };
};
export default FormsPage;
