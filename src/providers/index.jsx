'use client';
import React from 'react';
import { MotionLazyContainer } from '../component/animation';

export default function AppProviders({ children }) {
  return <MotionLazyContainer>{children}</MotionLazyContainer>;
}
