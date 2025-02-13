import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Only GET requests are allowed" });
  }

  const { date } = req.query;
  const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

  if (!API_TOKEN) {
    return res.status(500).json({ message: "API token is missing" });
  }

  try {
    const response = await axios.get(
      `https://api.sportmonks.com/v3/football/fixtures/date/${date}`,
      {
        params: { api_token: API_TOKEN },
      }
    );

    return res.status(200).json(response.data);
  } catch (error: any) {
    return res
      .status(error.response?.status || 500)
      .json({ message: "Error fetching data", error: error.response?.data });
  }
}
