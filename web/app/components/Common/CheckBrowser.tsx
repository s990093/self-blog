"use client";
import React, { useEffect } from "react";

const CheckBrowser: React.FC = () => {
  useEffect(() => {
    const userAgent = window.navigator.userAgent || "";

    // Detect if in an in-app browser (like Facebook, Instagram, etc.)
    const isInApp = /FBAN|FBAV|Instagram|Line|Wechat|Twitter|Snapchat/.test(
      userAgent
    );

    if (isInApp) {
      const url = window.location.href;

      // Android: Force opening in external browser using intent://
      if (navigator.userAgent.includes("Android")) {
        window.location.href = `intent://${url.replace(
          /^https?:\/\//,
          ""
        )}#Intent;scheme=https;end;`;
      }
      // iOS: Show an alert to guide users to manually open in Safari
      else if (
        navigator.userAgent.includes("iPhone") ||
        navigator.userAgent.includes("iPad")
      ) {
        alert("Please open this link in Safari for a better experience.");
      }
      // Fallback: Open in a new tab in other browsers
      else {
        window.open(url, "_blank");
      }
    }
  }, []);

  return null; // No need to render anything
};

CheckBrowser.displayName = "CheckBrowser";

export default CheckBrowser;
