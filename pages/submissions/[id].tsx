import React from "react";
import { GetServerSideProps } from "next";
import { getSubmission } from "pages/api/submittable/submission";
import { Typography, List, Divider, Descriptions, PageHeader } from "antd";
import { useRouter } from "next/router";
import moment from "moment";
interface Props {
  submission: any;
}
const SubmissionPage: React.FC<Props> = ({ submission }) => {
  const router = useRouter();
  return (
    <div>
      <PageHeader
        className="site-page-header"
        onBack={() => router.push("/submissions")}
        title="Submission"
        subTitle={submission.submissionId}
      >
        <Descriptions size="small" column={3}>
          <Descriptions.Item label="Submitter">
            {submission.submitterFirstName} {submission.submitterLastName}
          </Descriptions.Item>
          <Descriptions.Item label="Email">
            {submission.submitterEmail}
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            {submission.submissionStatus}
          </Descriptions.Item>
        </Descriptions>
      </PageHeader>
      <Divider orientation="left">Form Responses</Divider>
      {submission.formResponses.map(
        (formResponse: any, index: number | string) => {
          return (
            <List
              header={
                <React.Fragment>
                  <Descriptions size="small" column={3}>
                    <Descriptions.Item label="Form Id">
                      {formResponse.formId}
                    </Descriptions.Item>
                    <Descriptions.Item label="Created">
                      {moment(formResponse.createdAt).format("L")}
                    </Descriptions.Item>
                    <Descriptions.Item label="Completed">
                      {moment(formResponse.completedAt).format("L")}
                    </Descriptions.Item>
                  </Descriptions>
                  <Descriptions size="small" column={3}>
                    <Descriptions.Item label="Form Type">
                      {formResponse.formType}
                    </Descriptions.Item>
                    <Descriptions.Item label="Status">
                      {formResponse.isCompleted ? "completed" : "none"}
                    </Descriptions.Item>
                    <Descriptions.Item label="Project Id">
                      {formResponse.projectId}
                    </Descriptions.Item>
                  </Descriptions>
                </React.Fragment>
              }
              key={`${formResponse.formId}-${index}`}
              bordered
              dataSource={formResponse.fieldData}
              renderItem={(item: any) => (
                <List.Item>
                  <Descriptions size="small" column={3}>
                    <Descriptions.Item label="Form Type">
                      {item.fieldType}
                    </Descriptions.Item>
                    <Descriptions.Item label="Value">
                      {item.value}
                    </Descriptions.Item>
                    <Descriptions.Item label="Form Field Id">
                      {item.formFieldId}
                    </Descriptions.Item>
                  </Descriptions>
                </List.Item>
              )}
            />
          );
        }
      )}
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id || "";
  const { data } = await getSubmission(id.toString());
  if (!data)
    return {
      notFound: true,
    };
  return {
    props: {
      submission: data,
    },
  };
};
export default SubmissionPage;
