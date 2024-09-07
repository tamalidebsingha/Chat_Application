const mongoose = require("mongoose");

const chatModel = mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChar: { type: Boolean, default: false },

    users: [
      {
        type: mongoose.Schema.type.ObjectId,
        ref: "User",
      },
    ],

    latestMessage: {
      type: mongoose.Schema.type.ObjectId,
      ref: "Message",
    },

    groupAdmin: {
      type: mongoose.Schema.type.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;
