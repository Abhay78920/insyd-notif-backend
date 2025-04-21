import { Activity } from '../models/activity.model.js';
import { createNotification } from '../services/notification.service.js';

export const createActivity = async (req, res) => {
  try {
    const { actorId, targetId, type } = req.body;
    
    // Create activity
    const activity = await Activity.create({
      actorId,
      targetId,
      type,
    });

    // Generate notification for the activity
    await createNotification(activity);

    res.status(201).json({
      success: true,
      data: activity,
    });
  } catch (error) {
    console.error('Error creating activity:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create activity',
    });
  }
};