import { Star, Shield, Award, Clock, CheckCircle, ThumbsUp } from "lucide-react";
import { SITE } from "@/lib/constants";

const badges = [
  {
    icon: Star,
    title: `${SITE.rating} Star Rating`,
    sub: `${SITE.reviewCount}+ Verified Reviews`,
    color: "amber",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    sub: "Public Liability Cover",
    color: "blue",
  },
  {
    icon: Award,
    title: "10-Year Guarantee",
    sub: "All Workmanship Covered",
    color: "orange",
  },
  {
    icon: Clock,
    title: "60-Min Response",
    sub: "Emergency Call-Out",
    color: "red",
  },
  {
    icon: CheckCircle,
    title: "Free Quotes",
    sub: "No Obligation, In Writing",
    color: "green",
  },
  {
    icon: ThumbsUp,
    title: "14+ Years",
    sub: "Liverpool Roofing Experts",
    color: "purple",
  },
];

const colorMap: Record<string, string> = {
  amber: "bg-amber-50 border-amber-200 text-amber-700",
  blue: "bg-blue-50 border-blue-200 text-blue-700",
  orange: "bg-orange-50 border-orange-200 text-brand-orange",
  red: "bg-red-50 border-red-200 text-red-700",
  green: "bg-green-50 border-green-200 text-green-700",
  purple: "bg-purple-50 border-purple-200 text-purple-700",
};

interface TrustBadgesProps {
  variant?: "light" | "dark";
  compact?: boolean;
}

export function TrustBadges({ variant = "light", compact = false }: TrustBadgesProps) {
  if (compact) {
    return (
      <div className="flex flex-wrap gap-3 justify-center">
        {badges.map(({ icon: Icon, title }) => (
          <div
            key={title}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium ${colorMap[badges.find((b) => b.title === title)?.color || "orange"]}`}
          >
            <Icon className="w-4 h-4" />
            {title}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {badges.map(({ icon: Icon, title, sub, color }) => (
        <div
          key={title}
          className={`flex flex-col items-center text-center p-4 rounded-2xl border ${
            variant === "dark"
              ? "bg-white/10 border-white/20 text-white"
              : "bg-white border-slate-100 shadow-sm"
          }`}
        >
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
              variant === "dark" ? "bg-brand-orange/20" : colorMap[color].split(" ")[0]
            }`}
          >
            <Icon
              className={`w-5 h-5 ${variant === "dark" ? "text-brand-orange" : colorMap[color].split(" ")[2]}`}
            />
          </div>
          <div className={`font-bold text-sm mb-1 ${variant === "dark" ? "text-white" : "text-brand-navy"}`}>
            {title}
          </div>
          <div className={`text-xs ${variant === "dark" ? "text-slate-400" : "text-slate-500"}`}>
            {sub}
          </div>
        </div>
      ))}
    </div>
  );
}
