import { Notification } from '../models/notification.model.js';

const generateNotificationMessage = (activity) => {
  const messages = {
    follow: `User ${activity.actorId} started following you`,
    post: `User ${activity.actorId} created a new post`,
    comment: `User ${activity.actorId} commented on your post`,
  };
  
  return messages[activity.type] || 'New activity';
};

const generateNotificationLink = (activity) => {
  const links = {
    follow: `/profile/${activity.actorId}`,
    post: `/posts/${activity._id}`,
    comment: `/posts/${activity._id}/comments`,
  };
  
  return links[activity.type] || '/';
};

export const createNotification = async (activity) => {
  try {
    const notification = await Notification.create({
      userId: activity.targetId,
      message: generateNotificationMessage(activity),
      link: generateNotificationLink(activity),
    });
    
    return notification;
  } catch (error) {
    console.error('Error creating notification:', error);
    throw error;
  }
};