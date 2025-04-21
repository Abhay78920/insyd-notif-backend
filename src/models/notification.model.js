import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    index: true,
  },
  message: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  read: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Notification = mongoose.model('Notification', notificationSchema);