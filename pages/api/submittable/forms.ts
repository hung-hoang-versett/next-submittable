// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import client from "./client";
export async function getData() {
  return await client.get("/v3/forms");
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const data = await getData();
  res.status(200).json(data);
}
