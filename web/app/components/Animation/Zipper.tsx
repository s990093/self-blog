"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

// 預設值
const defaultNumTeeth = 20;
const defaultStyle = {
  backgroundColor: "#ededed",
  zipperColor: "#2d2d2d",
  teethColor: "#2d2d2d",
};

interface ZipperProps {
  numTeeth?: number;
  style?: {
    backgroundColor?: string;
    zipperColor?: string;
    teethColor?: string;
  };
  message?: string;
  startUnzipped?: boolean;
}

const Zipper: React.FC<ZipperProps> = ({
  numTeeth = defaultNumTeeth,
  style = defaultStyle,
  startUnzipped = false,
}) => {
  const zipperRef = useRef<HTMLDivElement>(null);
  const zipTagSVGRef = useRef<SVGSVGElement>(null);
  const zipToothMaskRectRef = useRef<SVGRectElement>(null);
  const zipOpenMaskRectRef = useRef<SVGRectElement>(null);
  const textRevealMaskRectRef = useRef<SVGRectElement>(null);
  const zipHandleRef = useRef<SVGPathElement>(null);

  const dimensions = numTeeth * 20;

  useEffect(() => {
    if (
      !zipTagSVGRef.current ||
      !zipToothMaskRectRef.current ||
      !zipOpenMaskRectRef.current ||
      !textRevealMaskRectRef.current
    )
      return;

    const zipToothMask = zipToothMaskRectRef.current;
    const zipOpenMask = zipOpenMaskRectRef.current;
    const textRevealMask = textRevealMaskRectRef.current;
    const zipTagSVG = zipTagSVGRef.current;
    const zipHandle = zipHandleRef.current;

    const zipToothMaskInitY = Number(zipToothMask.getAttribute("y"));
    const zipOpenMaskInitY = Number(zipOpenMask.getAttribute("y"));
    const zipOpenMaskHeight = Number(zipOpenMask.getAttribute("height"));

    const minDragY = zipToothMaskInitY;
    const maxDragY = numTeeth * 20 - 50;

    const onDrag = function (this: Draggable) {
      gsap.set(zipToothMask, { y: this.y - zipToothMaskInitY });
      gsap.set(zipOpenMask, {
        y: this.y - zipOpenMaskInitY - zipOpenMaskHeight,
      });
      gsap.set(textRevealMask, { y: this.y, rotation: 225 });
    };

    if (startUnzipped) onDrag.call({ y: maxDragY } as Draggable);

    // Draggable 設定
    Draggable.create(zipTagSVG, {
      type: "y",
      bounds: { minY: minDragY, maxY: maxDragY },
      onDrag: onDrag,
      onPress() {
        gsap.to(zipHandle, {
          scaleY: 0.7,
          transformOrigin: "50% 0%",
          duration: 0.1,
        });
      },
      onRelease() {
        gsap.to(zipHandle, { scaleY: 1, ease: "bounce.out", duration: 0.3 });
      },
      throwProps: true,
      overshootTolerance: 0,
      onThrowUpdate: onDrag,
    });
  }, [numTeeth, startUnzipped]);

  return (
    <div
      className="zipper"
      ref={zipperRef}
      style={{
        backgroundColor: style.backgroundColor,
        width: "100%",
        height: "100%",
      }}
    >
      <svg
        className="zipSVG"
        width={`${dimensions}px`}
        height={`${dimensions}px`}
        viewBox={`0 0 ${dimensions} ${dimensions}`}
        style={{ position: "absolute" }}
      >
        <defs>
          <clipPath id="zipToothMask">
            <rect
              ref={zipToothMaskRectRef}
              x="0"
              y="14"
              width={dimensions}
              height={numTeeth * 18.8}
              fill="#FFFFFF"
            />
          </clipPath>
        </defs>
      </svg>

      {/* 拉鍊標籤 */}
      <svg
        className="zipTagSVG"
        ref={zipTagSVGRef}
        width="44.7px"
        height="101.7px"
        viewBox="0 0 44.7 101.7"
      >
        <g>
          <path
            fill={style.zipperColor}
            d="M31.4,40.4c-6-0.9-12-0.9-18,0c-3,0.5-6-1.3-6.5-4.2C5.1,27,3.2,17.7,0.2,8.4c-1-2.9,2-6.5,7.1-7.3
            c9.8-1.6,20.2-1.6,30.1,0c5.1,0.8,8.1,4.3,7.1,7.3c-3,9.3-4.9,18.6-6.6,27.8C37.3,39.2,34.4,40.9,31.4,40.4z"
          />
          <path
            ref={zipHandleRef}
            fill={style.zipperColor}
            stroke={style.backgroundColor}
            strokeMiterlimit={10}
            d="M9.2,28.7c0,0-1.9,34.8-5.5,54.8c-1.1,9.4,5.2,17.7,18.5,17.7
            c12.3,0,20-8.4,18.9-17.7c-3.6-20-5.5-54.8-5.5-54.8H9.2z M22.7,94.5c-6.3,0-11.5-3.7-11.5-8.3c0-4.6,5.1-8.3,11.5-8.3
            c6.3,0,11.5,3.7,11.5,8.3C34.2,90.8,29,94.5,22.7,94.5z"
          />
        </g>
      </svg>
    </div>
  );
};

export default Zipper;
