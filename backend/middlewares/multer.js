import multer from "multer";

const storage = multer.memoryStorage();
export const fileOp = multer({ storage }).single("photo");
