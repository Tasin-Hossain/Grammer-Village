import type { ReactElement } from "react";
import { IconBook, IconCap, IconKids, IconPencil } from "./Art";

// Shared by the home teaser and the /courses page.
export const courseLook: Record<string, { bg: string; icon: ReactElement }> = {
  kids: { bg: "bg-pencil", icon: <IconKids /> },
  primary: { bg: "bg-blush", icon: <IconBook /> },
  junior: { bg: "bg-mint", icon: <IconPencil /> },
  advanced: { bg: "bg-sky", icon: <IconCap /> },
};
