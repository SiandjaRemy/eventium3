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
    const newEntry = await prisma.giveaway.create({
      data: {
       title:body.title,
       description:body.description,
       startDate:body.startDate,
       endDate:body.endDate,
       awardedAt:body.awardedAts,
       numberOfWinners:body.nows,
       giveawayRunnerName:body.organizer,
       publishersLink:body.publisherLink,
       contestRequirement:body.radio,
       termsAndConditions:body.termsAndConditions,
       isEUPolicy:body.eu,
       contestPublisherId:body.idpublisher,
       allowNetworRefferals:body.anr,
       allowMultipleEntries:body.ame,
       maximumEntries:body.maximumEntries
      },
    });
    return res.status(200).json(newEntry, { success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error creating question", success: false });
  }
}
