"use client";

import { createContext, useContext, useMemo, useState, ReactNode } from "react";

type ModalContextValue = {
  isOpen: boolean;
  presetService: string | null;
  open: (service?: string) => void;
  close: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [presetService, setPresetService] = useState<string | null>(null);

  const value = useMemo(
    () => ({
      isOpen,
      presetService,
      open: (service?: string) => {
        setPresetService(service ?? null);
        setIsOpen(true);
      },
      close: () => setIsOpen(false),
    }),
    [isOpen, presetService]
  );

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
}
