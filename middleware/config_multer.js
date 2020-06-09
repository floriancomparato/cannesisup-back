const multer = require("multer");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
  "application/pdf": "pdf",
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./public/image");
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("").split(".")[0];
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + "." + extension);
  },
});
//***exporter le dossier  */
module.exports = multer({ storage: storage }).fields([
  { name: "logo", maxCount: 1 },
  { name: "photoCouverture", maxCount: 1 },
  { name: "brochure", maxCount: 1 },
  { name: "photoPortrait", maxCount: 1 },
]);
