import prisma from "../../../../lib/prisma";
export default async function handler(req, res) {
  if (req.method === "GET") {
    return await createInquiry(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}
async function createInquiry(req, res) {
  try {
    const newEntry = await prisma.user.findMany({})
    return res.end(JSON.stringify({ success: newEntry }));
  } catch (err) {
    return res.end(JSON.stringify({ error: err.message }));
  }
}