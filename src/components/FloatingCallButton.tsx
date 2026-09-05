"use client";

import { useModal } from "./modal-context";

export default function FloatingCallButton() {
  const { open } = useModal();

  return (
    <button
      onClick={() => open()}
      aria-label="Заказать звонок"
      className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-2xl text-white shadow-xl transition hover:brightness-95 sm:h-16 sm:w-16"
    >
      📞
    </button>
  );
}
