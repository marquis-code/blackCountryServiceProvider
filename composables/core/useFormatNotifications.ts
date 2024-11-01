// composables/modules/notifications/format.ts
import { ref } from 'vue';
import { format } from 'date-fns';

interface NotificationData {
  id: string;
  userId: string;
  readAt: string | null;
  createdAt: string;
  notification: {
    title: string;
    content: string;
    metadata: {
      type: string;
      data: {
        rentAmount: number;
        houseId: string;
        roomId: string;
      };
    };
  };
}

interface FormattedNotification {
  id: string;
  createdAt: string;
  notification: {
    title: string;
    content: string;
    metadata: {
      type: string;
      data: {
        rentAmount: number;
        houseId: string;
        roomId: string;
      };
    };
  };
}

interface GroupedNotifications {
  date: string;
  notifications: FormattedNotification[];
}

export const useFormatNotifications = () => {
  const groupedNotifications = ref<GroupedNotifications[]>([]);

  const formatNotifications = (notifications: NotificationData[]) => {
    const formattedData: { [date: string]: FormattedNotification[] } = {};

    notifications.forEach(notification => {
      const dateKey = format(new Date(notification.createdAt), 'do MMMM, yyyy');

      const formattedNotification: FormattedNotification = {
        id: notification.id,
        createdAt: notification.createdAt,
        notification: {
          title: notification.notification.title,
          content: notification.notification.content,
          metadata: notification.notification.metadata,
        },
      };

      if (!formattedData[dateKey]) {
        formattedData[dateKey] = [];
      }

      formattedData[dateKey].push(formattedNotification);
    });

    groupedNotifications.value = Object.keys(formattedData).map(date => ({
      date,
      notifications: formattedData[date],
    }));
  };

  return {
    groupedNotifications,
    formatNotifications,
  };
};


// export const useFormatNotifications = () => {
//   const groupedNotifications = ref<GroupedNotifications[]>([]);

//   const formatNotifications = (notifications: NotificationData[]) => {
//     const formattedData: { [date: string]: FormattedNotification[] } = {};

//     notifications.forEach(notification => {
//       const dateKey = format(new Date(notification.createdAt), 'do MMMM, yyyy');

//       const formattedNotification: FormattedNotification = {
//         id: notification.id,
//         createdAt: notification.createdAt,
//         notification: {
//           title: notification.notification.title,
//           content: notification.notification.content,
//           metadata: notification.notification.metadata,
//         },
//       };

//       if (!formattedData[dateKey]) {
//         formattedData[dateKey] = [];
//       }

//       formattedData[dateKey].push(formattedNotification);
//     });

//     // Convert the grouped data into an array
//     groupedNotifications.value = Object.keys(formattedData).map(date => ({
//       date,
//       notifications: formattedData[date],
//     }));
//   };

//   return {
//     groupedNotifications,
//     formatNotifications,
//   };
// };
