import type { Metadata } from "next";
import { CoursesPage } from "@/components/CoursesPage";

export const metadata: Metadata = {
  title: "Courses | Grammar Village",
  description:
    "Kids, Primary, Junior and Advanced English courses for Play to Class 12 in Dhaka. See topics, class format and ages for each level.",
  alternates: { canonical: "/courses" },
};

export default function Page() {
  return (
    <main>
      <CoursesPage />
    </main>
  );
}
