"use client";

import { useModal } from "./modal-context";

export default function OpenModalButton({
  service,
  className,
  children,
}: {
  service?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const { open } = useModal();
  return (
    <button type="button" onClick={() => open(service)} className={className}>
      {children}
    </button>
  );
}
