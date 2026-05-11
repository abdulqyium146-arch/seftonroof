import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-slate-500 flex-wrap">
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-brand-orange transition-colors"
        aria-label="Home"
      >
        <Home className="w-4 h-4" />
      </Link>
      {items.map((item, index) => (
        <span key={item.label} className="flex items-center gap-1.5">
          <ChevronRight className="w-4 h-4 text-slate-300" aria-hidden="true" />
          {item.href && index < items.length - 1 ? (
            <Link
              href={item.href}
              className="hover:text-brand-orange transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span
              className={index === items.length - 1 ? "text-brand-navy font-medium" : ""}
              aria-current={index === items.length - 1 ? "page" : undefined}
            >
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
