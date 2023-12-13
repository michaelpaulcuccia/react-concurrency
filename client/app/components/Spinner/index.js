"use client";
import React from 'react';
import styles from './index.module.css';

export default function index() {
  return (
    <div className={styles.spinnercontainer}>
        <div className={styles.spinner}></div>
    </div>
  )
}
