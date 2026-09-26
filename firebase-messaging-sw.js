importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAzeWPIBXMI4GUZFKEnWdpZS0NntYhpS3o",
  authDomain: "batch-13137.firebaseapp.com",
  projectId: "batch-13137",
  storageBucket: "batch-13137.firebasestorage.app",
  messagingSenderId: "275925595005",
  appId: "1:275925595005:web:3474e1820603eafcf81214"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title || 'Mission Pari UP';
  const notificationOptions = {
    body: payload.notification.body || 'Aapko ek naya message mila hai!',
    icon: '/icon.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});