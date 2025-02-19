"use client";
import { Suspense } from "react";
import { useEffect } from "react";
import InvoiceListPage from "@/components/invoices/InvoiceListPage";

export default function Page() {
  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const isAndroid = /Android/.test(userAgent);
    const isIPhone = /iPhone/.test(userAgent);

    if (isAndroid || isIPhone) {
      window.location.href = "/warn";
    }
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InvoiceListPage />
    </Suspense>
  );
}
