import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: "healistry",
  api_key: "884612834742651",
  api_secret: "hVpKyuRwwr19gwHsLAxQAQ7sSWg",
});

export const upload = async (req, res) => {
  console.log("log", req.body.image);

  const result = await cloudinary.v2.uploader.upload(req.body.image, {
    public_id: `${Date.now()}`,
    resource_type: "auto",
  });
  res.json({
    public_id: result.public_id,
    url: result.secure_url,
  });
};

export const remove = (req, res) => {
  const image_id = req.body.public_id;

  cloudinary.v2.uploader.destroy(image_id, (err, reult) => {
    if (err) return res.json({ success: false, err });
    res.send("ok");
  });
};
