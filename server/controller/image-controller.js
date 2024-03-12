

const url = "http://localhost:8000";

export const uploadFile = async (req,res) => {
    if (!req.file) {
        return res.status(404).json("File not found");
    }

    const imageurl = `${url}/file/${req.file.filename}`;

    return res.status(200).json(imageurl);
}