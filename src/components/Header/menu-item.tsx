import { useRouter } from "next/router";
import Link from "next/link";
import { ReactNode } from "react";

type MenuItemProps = {
  children: ReactNode;
  href: string;
  className: string;
};

export default function MenuItem({ children, href, className }: MenuItemProps) {
  const router = useRouter();
  const style = {
    color: router.asPath === href ? "#4ade80" : "#ff4500",
  };

  return (
    <Link href={href} className={className} style={style}>
      {children}
    </Link>
  );
}
