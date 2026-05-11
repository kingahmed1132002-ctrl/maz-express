import React from "react";
import { motion } from "framer-motion";

export default function MazLogo({ size = 60, className = "", animate = false }) {
  // The GIF has a lot of transparent padding, so we make it much larger.
  // The PNG is cropped normally, so we use its actual size.
  const finalHeight = animate ? size * 5 : size * 1.2;

  return (
    <motion.img
      src={animate ? "/Maz logo 3.gif" : "/logo.png"}
      alt="Maz Express Logo"
      className={className}
      style={{
        height: finalHeight,
        width: "auto", // Allow it to naturally scale its width
        objectFit: "contain",
        maxWidth: "none" // Ensure it isn't constrained by parent containers unexpectedly
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
}