// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import client from "pages/api/submittable/client";
export async function getForm(formId?: string) {
  return await client.get(`/v3/forms/${formId}`);
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const data = await getForm();
  res.status(200).json(data);
}
