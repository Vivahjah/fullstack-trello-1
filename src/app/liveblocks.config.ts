import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
//   publicApiKey: process.env.LIVEBLOCKS_PUBLIC_KEY as string,
  authEndpoint: "/api/liveblocks-auth",
  throttle: 100,
});

type Presence = {};
type Storage = {};
type UserMeta = {};
type RoomEvent = {};
type ThreadMetadata = {};

export const {
  RoomProvider,
  useMyPresence,

  // Other hooks
  // ...
} = createRoomContext<Presence, Storage, UserMeta, RoomEvent, ThreadMetadata>(
  client
);