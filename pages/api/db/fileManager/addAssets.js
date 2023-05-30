import { PrismaClient } from "@prisma/client";
import prisma from "../../../../lib/prisma";

// import { v4 as uuid } from "uuid";

// const prisma = new PrismaClient()

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
    const newEntry = await prisma.asset.create({
      data: {
        name: body.name,
        file: body.filesImage,
        fileType: body.filetype == null ? "file type" : body.filetype,
        fileSize: body.filesize == null ? "file size" : body.filesize,
        folderId: body.idFolder, // == "" ? "Root" : body.idFolder,
        publisherId:body.idpublisher
      },
    });
    return res.status(200).json(newEntry, { success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error creating question", success: false });
  }
}
