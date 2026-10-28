"use client";
import React, { useState } from "react";
import HeatMap from "@uiw/react-heat-map";
import { convertDateToString } from "@/lib/utils";

type Props = {
  data: {
    createdAt: Date;
    count: number;
  }[];
};

const panelColors = {
  0: "#4b515c",
  4: "#C6E48B",
  8: "#7BC96F",
  12: "#239A3B",
  32: "#196127",
};

const SubmissionsHeatMap = (props: Props) => {
  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    text: string;
    visible: boolean;
  } | null>(null);

  const formattedDates = props.data.map((item) => ({
    date: convertDateToString(item.createdAt),
    count: item.count,
  }));

  return (
    <>
      <HeatMap
        value={formattedDates}
        width="100%"
        style={{ color: "#888" }}
        startDate={new Date("2025/01/01")}
        panelColors={panelColors}
        rectRender={(rectProps, data) => (
          <rect
            {...rectProps}
            onMouseEnter={(e) => {
              setTooltip({
                x: e.clientX,
                y: e.clientY,
                text: `Count: ${data.count || 0}`,
                visible: true,
              });
            }}
            onMouseLeave={() => {
              setTooltip((prev) =>
                prev ? { ...prev, visible: false } : null
              );
            }}
          />
        )}
      />
      <div
        style={{
          position: "fixed",
          top: tooltip?.y ? tooltip.y - 10 : 0,
          left: tooltip?.x ? tooltip.x + 10 : 0,
          background: "rgba(0, 0, 0, 0.85)",
          color: "white",
          padding: "6px 12px",
          borderRadius: "6px",
          fontSize: "14px",
          pointerEvents: "none",
          whiteSpace: "nowrap",
          zIndex: 9999,
          transform: "translate(-50%, -100%)",
          opacity: tooltip?.visible ? 1 : 0,
          transition:
            "opacity 0.25s ease-in-out, transform 0.11s ease-in-out, top 0.25s ease-in-out, left 0.11s ease-in-out",
          visibility: tooltip ? "visible" : "hidden",
        }}
      >
        {tooltip?.text}
      </div>
    </>
  );
};

export default SubmissionsHeatMap;
