// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import client from "pages/api/submittable/client";
export async function getFormResponses(formId?: string) {
  return await client.get(`/v3/responses/forms/${formId}`);
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const data = await getFormResponses();
  res.status(200).json(data);
}
