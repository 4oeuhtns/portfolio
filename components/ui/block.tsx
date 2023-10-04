"use client"

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

import 'styles/block.css';

interface BlockProps {
  scrollY: number;
}

export const Block = ({ scrollY }: BlockProps) => {
  let y = scrollY
  const threshold = 500;
  const minSize = 0.75
  const scale = Math.max((y - 0) * (minSize - 1) / (threshold - 0) + 1, minSize);
  if (y > threshold) {
    y = (scrollY - threshold)/2;
  } else {
    y = 0;
  }
  return (
    <div className="fixed flex justify-center" style={{transform: `translate(0, ${-y}px) scale(${scale})`}}>
      <div className="text">
        <div className="line">
          <div>
            <span className="letter">f</span>
            <span className="letter">e</span>
            <span className="letter">l</span>
            <span className="letter">i</span>
            <span className="letter">x</span>
          </div>
          <div>
            <span className="letter">z</span>
            <span className="letter">h</span>
            <span className="letter">a</span>
            <span className="letter">o</span>
          </div>
        </div>
        <div className="line">
          <div>
            <span className="letter">f</span>
            <span className="letter">r</span>
            <span className="letter">o</span>
            <span className="letter">n</span>
            <span className="letter">t</span>
          </div>
          <div>
            <span className="letter">e</span>
            <span className="letter">n</span>
            <span className="letter">d</span>
          </div>
          <div>
            <span className="letter">&</span>
          </div>
        </div>
        <div className="line fancy">
          <Link href="#">
            <span className="letter">p</span>
            <span className="letter">r</span>
            <span className="letter">o</span>
            <span className="letter">g</span>
            <span className="letter">r</span>
            <span className="letter">a</span>
            <span className="letter">m</span>
            <span className="letter">m</span>
            <span className="letter">i</span>
            <span className="letter">n</span>
            <span className="letter">g</span>
          </Link>
        </div>
        <div className="line fancy">
          <Link href="#">
            <span className="letter">@</span>
          </Link>
          <Link href="#">
            <span className="letter">a</span>
            <span className="letter">o</span>
            <span className="letter">e</span>
            <span className="letter">u</span>
            <span className="letter">h</span>
            <span className="letter">t</span>
            <span className="letter">n</span>
            <span className="letter">s</span>
          </Link>
        </div>
      </div>
    </div>
  );
}