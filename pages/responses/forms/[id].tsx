import React from "react";
import { GetServerSideProps } from "next";
import { getFormResponses } from "pages/api/submittable/responses/form";
import { Typography, List, Divider, Descriptions, PageHeader } from "antd";
import { useRouter } from "next/router";
import moment from "moment";
interface Props {
  responses: any;
}
const FormResponsesPage: React.FC<Props> = ({ responses }) => {
  const router = useRouter();
  const { items } = responses;
  return (
    <div>
      <PageHeader
        className="site-page-header"
        onBack={() => router.push("/forms")}
        title="Form Responses"
      />
      <List
        itemLayout="vertical"
        size="large"
        dataSource={items}
        renderItem={(response: any) => (
          <List.Item key={response.formResponseId}>
            <List.Item.Meta title={`Form Id: ${response.formId}`} />

            <Divider orientation="left">
              Response Id {response.formResponseId}
            </Divider>
            <List
              dataSource={response.fieldData}
              renderItem={(fieldData: any, index: number) => (
                <List.Item key={`${fieldData.formFieldId}-${index}`}>
                  <Descriptions size="small" column={3}>
                    <Descriptions.Item label="Form Type">
                      {fieldData.fieldType}
                    </Descriptions.Item>
                    <Descriptions.Item label="Value">
                      {fieldData.value}
                    </Descriptions.Item>
                    <Descriptions.Item label="Form Field Id">
                      {fieldData.formFieldId}
                    </Descriptions.Item>
                  </Descriptions>
                </List.Item>
              )}
            ></List>
          </List.Item>
        )}
      />
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id || "";
  const { data } = await getFormResponses(id.toString());
  console.log("data", data);
  if (!data)
    return {
      notFound: true,
    };
  return {
    props: {
      responses: data,
    },
  };
};
export default FormResponsesPage;
