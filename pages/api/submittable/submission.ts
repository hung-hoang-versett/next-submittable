// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import client from "./client";
export async function getSubmission(submissionId?: string) {
  return await client.get(`/v3/submissions/${submissionId}`);
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const data = await getSubmission();
  res.status(200).json(data);
}
