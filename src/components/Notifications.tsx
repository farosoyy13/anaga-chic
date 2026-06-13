import React from 'react';
import { FaBell } from 'react-icons/fa';

interface Notification {
  id: number;
  message: string;
  time: string;
}

interface NotificationsProps {
  notifications: Notification[];
  onClose: () => void;
}

const Notifications: React.FC<NotificationsProps> = ({ notifications, onClose }) => {
  return (
    <div className="fixed top-16 right-4 bg-white shadow-lg rounded-lg p-4 w-80 z-50">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-lg">الإشعارات</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          ✕
        </button>
      </div>
      {notifications.length === 0 ? (
        <p className="text-gray-500 text-center py-4">لا توجد إشعارات جديدة</p>
      ) : (
        <ul>
          {notifications.map((notif) => (
            <li key={notif.id} className="border-b py-2 flex items-start gap-2">
              <FaBell className="text-yellow-500 mt-1" />
              <div>
                <p className="text-sm">{notif.message}</p>
                <span className="text-xs text-gray-400">{notif.time}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;