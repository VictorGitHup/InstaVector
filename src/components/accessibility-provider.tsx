'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type AccessibilityState = {
  highContrast: boolean;
  toggleHighContrast: () => void;
  fontSize: number;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  zoom: number;
  increaseZoom: () => void;
  decreaseZoom: () => void;
  resetAccessibility: () => void;
};

const AccessibilityContext = createContext<AccessibilityState | undefined>(undefined);

const FONT_SIZE_STEP = 1;
const MIN_FONT_SIZE = 14;
const MAX_FONT_SIZE = 22;
const DEFAULT_FONT_SIZE = 16;

const ZOOM_STEP = 0.1;
const MIN_ZOOM = 1.0;
const MAX_ZOOM = 1.5;
const DEFAULT_ZOOM = 1.0;

export const AccessibilityProvider = ({ children }: { children: ReactNode }) => {
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE);
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedContrast = localStorage.getItem('high-contrast') === 'true';
    const storedFontSize = Number(localStorage.getItem('font-size')) || DEFAULT_FONT_SIZE;
    const storedZoom = Number(localStorage.getItem('zoom-level')) || DEFAULT_ZOOM;

    setHighContrast(storedContrast);
    setFontSize(storedFontSize);
    setZoom(storedZoom);
  }, []);

  useEffect(() => {
    if (isMounted) {
        if (highContrast) {
            document.documentElement.classList.add('high-contrast');
            localStorage.setItem('high-contrast', 'true');
        } else {
            document.documentElement.classList.remove('high-contrast');
            localStorage.setItem('high-contrast', 'false');
        }
    }
  }, [highContrast, isMounted]);

  useEffect(() => {
    if (isMounted) {
        document.documentElement.style.setProperty('--font-size-base', `${fontSize}px`);
        localStorage.setItem('font-size', String(fontSize));
    }
  }, [fontSize, isMounted]);

  useEffect(() => {
    if (isMounted) {
        document.body.style.zoom = String(zoom);
        localStorage.setItem('zoom-level', String(zoom));
    }
  }, [zoom, isMounted]);

  const toggleHighContrast = () => setHighContrast(prev => !prev);

  const increaseFontSize = () => setFontSize(prev => Math.min(MAX_FONT_SIZE, prev + FONT_SIZE_STEP));
  const decreaseFontSize = () => setFontSize(prev => Math.max(MIN_FONT_SIZE, prev - FONT_SIZE_STEP));

  const increaseZoom = () => setZoom(prev => Math.min(MAX_ZOOM, prev + ZOOM_STEP));
  const decreaseZoom = () => setZoom(prev => Math.max(MIN_ZOOM, prev - ZOOM_STEP));

  const resetAccessibility = () => {
    setHighContrast(false);
    setFontSize(DEFAULT_FONT_SIZE);
    setZoom(DEFAULT_ZOOM);
  };
  
  if (!isMounted) {
    return null;
  }

  return (
    <AccessibilityContext.Provider value={{ 
        highContrast, toggleHighContrast, 
        fontSize, increaseFontSize, decreaseFontSize,
        zoom, increaseZoom, decreaseZoom,
        resetAccessibility
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};
