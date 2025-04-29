"use client"; // if using App Router
import { House } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname(); // Get current path
  const pathSegments = pathname.split("/").filter((segment) => segment);

  const breadcrumbs = pathSegments
    .map((segment, index) => {
      // Skip 'project'
      if (segment === "project") return null;

      let href = "";
      let label = "";

      if (segment === "sampleproject") {
        return { href: "/project", label: "Sample Project" };
      } else if (segment === "podcast") {
        return {
          href: "",
          label: "Add your podcast",
        };
      } else {
        href = "/" + pathSegments.slice(0, index + 1).join("/");
        label = decodeURIComponent(segment)
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase());
      }

      return { href, label };
    })
    .filter((item): item is { href: string; label: string } => item !== null);

  return (
    <nav className="text-sm breadcrumbs my-4" aria-label="Breadcrumb">
      <ol className="flex space-x-2">
        <li>
          <Link href="/" className="text-gray-500 hover:underline flex ">
            <House size={16} />
            <span className="pl-2"> Home Page</span>
          </Link>
        </li>
        {breadcrumbs.map((item, index) => {
          return (
            <li key={index} className="flex items-center">
              <span className="mx-2">/</span>
              <Link href={item?.href} className="text-gray-500 hover:underline">
                {item?.label}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
