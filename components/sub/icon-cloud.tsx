"use client";

import { useEffect, useMemo, useState } from "react";
import { Cloud, ICloud } from "react-icon-cloud";
import Image from "next/image";

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%", // Ensure the container fills the viewport height
      paddingTop: 40,
      position: "relative", // Ensure the container has position relative
      overflow: "hidden", // Ensure no overflow
    },
  },
  options: {
    reverse: true,
    depth: 0.5, // Adjust depth if needed
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export type DynamicCloudProps = {
  iconSlugs: string[];
};

export default function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<string[] | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!iconSlugs || iconSlugs.length === 0) {
      console.error("Icon slugs are missing or invalid.");
      return;
    }

    setData(iconSlugs);
    setMounted(true);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return data.map((icon) => (
      <a href="#" key={icon} style={{ display: "inline-block", padding: "20px", zIndex: 50 }}>
        <Image
          width={50}
          height={50}
          src={`/${icon}.svg`}
          alt={icon}
          priority // Ensure the image is loaded with high priority
          style={{ zIndex: 50 }}
          onError={() => console.error(`Image loading error for icon: ${icon}`)}
        />
      </a>
    ));
  }, [data]);

  if (!mounted) {
    return null; // Return null or a loading indicator until the component is mounted
  }

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      {renderedIcons}
    </Cloud>
  );
}


