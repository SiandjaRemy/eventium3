import prisma from "../../../../lib/prisma";
export default async function handler(req, res) {
  if (req.method === "POST") {
    return await createInquiry(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}
async function createInquiry(req, res) {
  const body = req.body;
  try {
    const newEntry = await prisma.giveawayPrices.create({
      data: {
        priceName:body.name,
        priceImagePath:body.imageLink,
        prizePrice:body.prices,
        currency:body.value
      },
    });
    return res.status(200).json(newEntry, { success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error creating question", success: false });
  }
}
