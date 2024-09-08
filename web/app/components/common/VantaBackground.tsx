"use client";
import React, { Component, ReactNode } from "react";
import FOG from "vanta/dist/vanta.halo.min";
import * as THREE from "three";

interface FogComponentProps {
  children?: ReactNode;
}

class FogComponent extends Component<FogComponentProps> {
  private vantaRef = React.createRef<HTMLDivElement>();
  private vantaEffect?: any;

  componentDidMount() {
    this.vantaEffect = FOG({
      el: this.vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      highlightColor: 0xe1ff00,
      midtoneColor: 0xeb3921,
      lowlightColor: 0x272537,
      baseColor: 0x354291,
      blurFactor: 0.78,
      speed: 2.1,
      zoom: 0.8,
    });
  }

  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }

  render() {
    return (
      <div style={{ height: "100%", width: "100%" }} ref={this.vantaRef}>
        {this.props.children}
      </div>
    );
  }
}

export default FogComponent;
