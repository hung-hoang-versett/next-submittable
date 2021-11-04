import React from "react";
import { GetServerSideProps } from "next";
import { getSubmissions } from "pages/api/submittable/submissions";
import { Button, List, PageHeader } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

interface Props {
  submissions: any;
}
const SubmissionsPage: React.FC<Props> = ({ submissions }) => {
  const router = useRouter();
  const { items } = submissions;
  return (
    <div>
      <PageHeader className="site-page-header" title="Submissions" />
      <List
        itemLayout="vertical"
        size="large"
        dataSource={items}
        renderItem={(item: any) => (
          <List.Item
            key={item.submissionId}
            actions={[
              <Button
                type="link"
                icon={<LinkOutlined />}
                key={`${item.submissionId}-view`}
                onClick={() => router.push(`submissions/${item.submissionId}`)}
              >
                View
              </Button>,
            ]}
          >
            <List.Item.Meta
              title={"Title"}
              description={item.submissionTitle}
            />
            <List.Item.Meta
              title={"Submitter Email"}
              description={item.submitterEmail}
            />
            <List.Item.Meta title={"Project Id"} description={item.projectId} />
          </List.Item>
        )}
      />
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await getSubmissions();
  return {
    props: {
      submissions: data,
    },
  };
};
export default SubmissionsPage;
