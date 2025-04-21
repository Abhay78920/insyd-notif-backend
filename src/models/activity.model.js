import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
  actorId: {
    type: String,
    required: true,
  },
  targetId: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['follow', 'post', 'comment'],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Activity = mongoose.model('Activity', activitySchema);