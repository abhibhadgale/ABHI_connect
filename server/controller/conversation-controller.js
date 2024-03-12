
import Conversation from "../model/Conversation.js";

export const newConversation = async (req,res) => {
    try {
        const senderId = req.body.senderId;
        const receiverId = req.body.receiverId;

        const exist = await Conversation.findOne({ members: { $all: [ receiverId, senderId] }});

        if (exist) {
            return res.status(200).json('conversation already exists');
        }

        const newConversation = new Conversation ({
            members: [senderId, receiverId]
        })
        await newConversation.save();
        return res.status(200).json('conversation saved successfully');
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const getConversation = async (req, res) => {
    try {
        const senderId = req.body.senderId;
        const receiverId = req.body.receiverId;
        
        const conversation = await Conversation.findOne({
            members: { $all: [senderId, receiverId] }
        });

        if (!conversation) {
            return res.status(404).json({ message: "Conversation not found" });
        }
        
        return res.status(200).json(conversation);
    } catch (error) {
        console.error("Error while fetching conversation:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}