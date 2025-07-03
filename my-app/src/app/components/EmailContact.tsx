"use client";
import { IconMail } from "@tabler/icons-react";
import { Copy } from "lucide-react";
import { useState } from "react";

export function EmailContact() {
  const email = "washington.chagas.9@hotmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Erro ao copiar:", err);
    }
  };

  return (
    <>
      <div className="items-center flex gap-3">
        <IconMail className="text-yellow-200 mt-1" />

        <a
          href={`mailto:${email}`}
          className=" hover:text-yellow-400 truncate max-w-[150px] lg:max-w-[250px]"
          target="_blank"
        >
          {email}
        </a>

        <button
          onClick={handleCopy}
          className="text-gray-500 hover:text-yellow-200 transition"
          title="Copiar e-mail"
        >
          <Copy size={18} />
        </button>
      </div>
      {copied && (
        <div className="block">
          <span className=" text-sm animate-pulse">Copiado!</span>
        </div>
      )}
    </>
  );
}
