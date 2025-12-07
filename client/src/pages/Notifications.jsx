import Sidebar from "../components/Sidebar";
import { useNotification } from "../context/NotificationContext";
import { Link } from "react-router-dom";

export default function Notifications() {
  const { notifications, markAsRead } = useNotification();

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-10 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Notifications Center</h2>

        {notifications.length === 0 && (
          <p className="text-gray-500">No notifications yet.</p>
        )}

        {notifications.map((n) => (
          <div
            key={n.id}
            className={`p-4 rounded-lg shadow bg-white border-l-4 ${
              n.read ? "border-gray-300" : "border-blue-600"
            }`}
          >
            <div className="flex justify-between">
              <p className="font-medium">{n.message}</p>
              <span className="text-xs text-gray-500">{n.time}</span>
            </div>

            <div className="flex justify-between mt-3">
              <Link
                to={n.type === "loan" ? "/dashboard" : "/emi-payments"}
                onClick={() => markAsRead(n.id)}
                className="text-blue-700 text-sm font-semibold hover:underline"
              >
                View Details →
              </Link>

              {!n.read && (
                <button
                  onClick={() => markAsRead(n.id)}
                  className="text-xs text-gray-600 hover:text-blue-600"
                >
                  Mark as read
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
