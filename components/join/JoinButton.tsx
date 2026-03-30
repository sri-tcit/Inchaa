import Link from "next/link";
import { cn } from "@/lib/utils";

const PORTAL_URL =
  "https://portal.inchaa.com/signup?utm_source=website&utm_medium=cta&utm_campaign=join_professionals_lp";

const SIZE_CLASSES = {
  sm: "text-sm font-semibold px-5 py-2.5",
  md: "text-sm font-bold px-7 py-3.5",
  lg: "text-base font-bold px-10 py-4",
};

export function JoinButton({
  size = "md",
  className = "",
  children = "Join as a Professional",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Link
      href={PORTAL_URL}
      className={cn(
        "inline-flex items-center bg-yellow text-white rounded-lg hover:brightness-95 transition-all duration-150",
        SIZE_CLASSES[size],
        className
      )}
    >
      {children}
    </Link>
  );
}
