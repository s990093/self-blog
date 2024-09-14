import React from "react";
import { motion } from "framer-motion";

interface NotificationListProps {
  notifications: { id: number; message: string }[];
}

const NotificationList: React.FC<NotificationListProps> = ({
  notifications,
}) => {
  return (
    <div className="fixed bottom-4 left-4 p-2 z-50 space-y-2 ">
      {notifications.map((notification) => (
        <motion.div
          key={notification.id}
          initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
          animate={{ opacity: 1, x: 0 }} // Move to the center and become visible
          exit={{ opacity: 0, x: -100 }} // Move back off-screen to the left when exiting
          transition={{ duration: 0.5 }}
          className="bg-opacity-65 bg-gradient-to-r from-blue-400 to-purple-500 text-white p-2 rounded-lg shadow-lg font-mono text-sm"
        >
          {notification.message}
        </motion.div>
      ))}
    </div>
  );
};

export default NotificationList;
