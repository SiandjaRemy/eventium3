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

  const location = JSON.stringify(body.location);
  const language = JSON.stringify(body.language);
  const optimizedTags = JSON.stringify(body.optimizedTags);
  const ageTags = JSON.stringify(body.age);
  const channel = JSON.stringify(body.channelTags);
  try {
    const newEntry = await prisma.channel.create({
      data: {
        publisherId: body.idpublisher,
        category: body.category,
        subCategory: body.subCategory,
        audienceLocationTags: location,
        languageTags: language,
        ageRangeTags: ageTags,
        channelTags: channel,
        optimizedTags: optimizedTags,
      },
    });
    return res.status(200).json(newEntry, { success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error creating question", success: false });
  }
}
