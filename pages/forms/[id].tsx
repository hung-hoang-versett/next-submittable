import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { getForm } from "pages/api/submittable/form";
import { PageHeader } from "antd";
import { useRouter } from "next/router";
import FormGenerator from "components/formBuilder/generator";
import { convertFormJsonSubmittableToReactForm } from "utils/helper";
import { Row, Col } from "antd";

interface Props {
  form: any;
}
const FormPage: React.FC<Props> = ({ form }) => {
  const router = useRouter();
  const [isSSR, setIsSSR] = useState(true);
  const formattedFields = convertFormJsonSubmittableToReactForm(form.fields);
  useEffect(() => {
    // waiting SSR rendered
    setIsSSR(false);
  }, []);
  if (isSSR) return null;
  return (
    <div>
      <PageHeader
        className="site-page-header"
        onBack={() => router.push("/forms")}
        title={`Form: ${form.name}`}
      />
      <Row justify="center">
        <Col span={20}>
          <FormGenerator data={formattedFields} />
        </Col>
      </Row>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id || "";
  const { data } = await getForm(id.toString());
  if (!data)
    return {
      notFound: true,
    };
  return {
    props: {
      form: data,
    },
  };
};
export default FormPage;
