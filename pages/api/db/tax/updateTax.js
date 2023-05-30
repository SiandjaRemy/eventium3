import { PrismaClient } from "@prisma/client";
import { v4 as uuid } from "uuid";

const prisma = new PrismaClient();

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
    const newEntry = await prisma.tax.update({
      where: {
        id: body.id,
      },
      data: {
         planName:body.editplanName,
         duration:body.editduration+" "+body.edittime,
         frequency:body.editfrequency+" "+body.editfTime,
         regularPrice:body.editregularPrice,
         salePrice:body.editsalePrice,
         contestPublisherId:body.publisherId
      },
    });
    return res.status(200).json(newEntry, { success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error creating question", success: false });
  }
}
