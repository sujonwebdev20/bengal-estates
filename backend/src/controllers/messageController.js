import isAdminUser from "../config/isAdminUser.js";
import Conversation from "../models/conversationModel.js";
import MaintenanceRequest from "../models/maintenanceRequestModel.js";
import Message from "../models/messageModel.js";
import User from "../models/userModel.js";

/****************
 * SEND MESSAGE *
 ****************/
export const sendMessage = async (req, res) => {
  const senderId = req.decodedToken.userId;
  // const receiverId = req.params.id;
  const { message } = req.body;
  const { conversationId } = req.query;

  try {
    // Checking Admin
    const getAdminId = await User.find({ role: "admin" }).select("_id");
    const parsedAdminId = getAdminId[0]["_id"];

    const senderIsAdmin = await isAdminUser(senderId);
    const receiverIsAdmin = await isAdminUser(parsedAdminId);

    const receiverId = parsedAdminId;

    // If user is normal then can send message to admin. No one else can.
    if (!senderIsAdmin && !receiverIsAdmin) {
      return res
        .status(403)
        .json({ error: "Normal users can only send messages to the admin." });
    }

    let gotConversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!gotConversation) {
      gotConversation = Conversation({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = Message({
      senderId,
      receiverId,
      message,
    });
    await newMessage.save();

    if (newMessage) {
      gotConversation.messages.push(newMessage._id);
    }

    if (newMessage) {
      await MaintenanceRequest.findByIdAndUpdate(
        { _id: conversationId },
        { $push: { requestMessages: newMessage._id } }
      );
    }

    await gotConversation.save();
    return res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

/***************
 * GET MESSAGE *
 ***************/
export const getMessage = async (req, res) => {
  const receiverId = req.params.id;
  const senderId = req.decodedToken.userId;

  try {
    const userIsAdmin = await isAdminUser(senderId);

    if (!userIsAdmin && senderId !== receiverId) {
      return res.status(403).json({
        error: "You can only view your own conversations with admins.",
      });
    }
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");

    if (!conversation) {
      return res
        .status(404)
        .json({ success: false, message: "No conversation found" });
    }

    return res.status(200).json(conversation?.messages);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

/***** get messages of specific maintenance request *****/
export const getSpecificMessagesOfMaintenanceRequestForUser = async (
  req,
  res,
  next
) => {
  const maintenanceRequestId = req.params.id;

  try {
    const maintenanceRequest =
      await MaintenanceRequest.findById(maintenanceRequestId).populate(
        "requestMessages"
      );

    if (!maintenanceRequest) {
      return res
        .status(404)
        .json({ success: false, message: "No maintenance request found" });
    }

    return res.status(200).json(maintenanceRequest?.requestMessages);
  } catch (error) {
    next(error);
  }
};

/***** Get all conversations for admin *****/

export const getAllConversationsForAdmin = async (req, res, next) => {
  try {
    const conversations = await Conversation.find().populate("messages");

    if (!conversations) {
      return res
        .status(404)
        .json({ success: false, message: "No conversations found" });
    }

    return res.status(200).json(conversations);
  } catch (error) {
    next(error);
  }
};
