"use client";
import React, { Component, ReactNode } from "react";

import VantaEffect from "vanta";

import FOG from "vanta/dist/vanta.halo.min";
import * as THREE from "three";

interface FogComponentProps {
  children?: ReactNode;
}

class FogComponent extends Component<FogComponentProps> {
  private vantaRef = React.createRef<HTMLDivElement>();
  private vantaEffect?: ReturnType<typeof VantaEffect>;
  private scrollHandler?: () => void;

  componentDidMount() {
    this.vantaEffect = FOG({
      el: this.vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,

      highlightColor: 0xe1ff00,
      midtoneColor: 0xeb3921,
      lowlightColor: 0x272537,
      baseColor: 0x354291,
      blurFactor: 0.78,
      speed: 2.1,
      zoom: 0.8,
    });

    // Set up scroll event listener
    this.scrollHandler = () => {
      if (this.vantaRef.current) {
        const scrollPosition = window.scrollY;
        this.vantaRef.current.style.transform = `translateY(${
          scrollPosition * 0.5
        }px)`;
      }
    };
    window.addEventListener("scroll", this.scrollHandler);
  }

  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
    if (this.scrollHandler)
      window.removeEventListener("scroll", this.scrollHandler);
  }

  render() {
    return <div ref={this.vantaRef}>{this.props.children}</div>;
  }
}

export default FogComponent;
