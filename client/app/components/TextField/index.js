"use client";
import React from 'react';

export default function index({ 
    value,
    onChange 
}) {
  return (
    <div>
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
  )
}
