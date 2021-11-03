// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import client from "./client";
export async function getProjects() {
  return await client.get("/v3/projects");
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const data = await getProjects();
  res.status(200).json(data);
}
