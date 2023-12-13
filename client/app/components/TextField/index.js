"use client";
import React from 'react';
import styles from './index.module.css'

export default function index({ 
    value,
    onChange 
}) {
  return (
    <div className={styles.main}>
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
  )
}
