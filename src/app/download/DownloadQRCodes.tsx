"use client";

import { useId, useRef, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Icon } from "@/components/Icon";
import styles from "./download.module.css";

const stores = [
  { name: "iOS", url: "https://apps.apple.com/app/id1608629087" },
  { name: "Android", url: "https://play.google.com/store/apps/details?id=com.thebenchapp.bench" },
];

export function DownloadQRCodes({ initialPlatform }: { initialPlatform: "iOS" | "Android" }) {
  const id = useId();
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [platform, setPlatform] = useState(initialPlatform === "iOS" ? 0 : 1);
  const store = stores[platform];

  return (
    <>
      <div className={styles.qrPanel}>
        <button ref={trigger} type="button" className={styles.qrTrigger} onClick={() => { setPlatform(initialPlatform === "iOS" ? 0 : 1); dialog.current?.showModal(); }} aria-haspopup="dialog">
          <span aria-hidden="true" className="inline-flex shrink-0 items-center justify-center w-6 h-6"><Icon name="qr_code_2" size={24} /></span>
          Scan QR Code
        </button>
      </div>
      <dialog ref={dialog} className={styles.qrDialog} aria-labelledby={`${id}-title`} aria-describedby={`${id}-description`} onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) event.currentTarget.close();
      }} onClose={() => trigger.current?.focus()}>
        <button type="button" className={styles.qrClose} aria-label="Close QR code" onClick={() => dialog.current?.close()}>
          <span aria-hidden="true"><Icon name="close" size={20} /></span>
        </button>
        <h2 id={`${id}-title`} className="text-xl font-semibold tracking-tight text-ink-900">Get Bench on your phone</h2>
        <p id={`${id}-description`} className="mt-2 text-sm text-ink-500">Choose your phone, then scan with its camera.</p>
        <div className={styles.qrSelector} role="group" aria-label="Phone platform">
          {stores.map(({ name }, index) => (
            <button key={name} type="button" aria-pressed={platform === index} onClick={() => setPlatform(index)}>{name}</button>
          ))}
        </div>
        <div className={styles.qrCode}>
          <QRCodeSVG value={store.url} size={200} level="M" marginSize={4} bgColor="#ffffff" fgColor="#0b0b12" role="img" aria-label={`${store.name} download QR code`} />
        </div>
        <p className="text-xs text-ink-400 mb-4" aria-live="polite">Scan with your {platform === 0 ? "iPhone" : "Android phone"} camera</p>
        <a href={store.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-ink-700 underline underline-offset-4">Open {platform === 0 ? "App Store" : "Google Play"} instead</a>
      </dialog>
    </>
  );
}
