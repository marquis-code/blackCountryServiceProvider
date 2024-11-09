// plugins/socket.client.ts
import { io, Socket } from 'socket.io-client';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  // Initialize the socket.io client connection
  const socket: Socket = io('http://localhost:3000', {
    transports: ['websocket', 'polling'],
  });

  // Provide socket instance globally in Nuxt
  nuxtApp.provide('socket', socket);
});
