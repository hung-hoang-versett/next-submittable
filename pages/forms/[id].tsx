import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { getForm } from "pages/api/submittable/form";
import { PageHeader } from "antd";
import { useRouter } from "next/router";
import FormGenerator from "components/formBuilder/generator";
import { convertFormJsonSubmittableToReactForm } from "utils/helper";
import { Row, Col } from "antd";
import * as yup from "yup";
interface Props {
  form: any;
}
const FormPage: React.FC<Props> = ({ form }) => {
  const router = useRouter();
  const [isSSR, setIsSSR] = useState(true);
  const [validationState, setValidationState] = useState(null);
  const formattedFields = convertFormJsonSubmittableToReactForm(
    form.fields,
    validationState
  );
  useEffect(() => {
    // waiting SSR rendered
    setIsSSR(false);
  }, []);
  if (isSSR) return null;
  let validation: any = {};
  formattedFields.forEach((field: any) => {
    validation[field.field_name] = yup.string().required();
  });
  const schema = yup.object().shape(validation);
  return (
    <div>
      <PageHeader
        className="site-page-header"
        onBack={() => router.push("/forms")}
        title={`Form: ${form.name}`}
      />
      <Row justify="center">
        <Col span={20}>
          <FormGenerator
            data={formattedFields}
            onSubmit={async (values) => {
              let params: any = {};
              values.forEach((field: any) => {
                params[field.name] = field.value;
              });
              schema
                .validate(params, { abortEarly: false })
                .then(() => {
                  // TODO call api
                })
                .catch((err: any) => {
                  let dataErrors: any = {};
                  err.inner.forEach((e: any) => {
                    dataErrors[e.path] = e.message;
                  });
                  setValidationState(dataErrors);
                  // console.log("dataErrors", dataErrors);
                });
            }}
          />
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
