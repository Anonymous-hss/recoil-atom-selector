import { atom } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 101,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 1,
});

export const notificationsAtom = atom({
  key: "notificationAtom",
  default: 12,
});

export const messegeAtom = atom({
  key: "messageAtom",
  default: 1,
});
