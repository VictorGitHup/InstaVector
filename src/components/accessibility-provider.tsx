'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type AccessibilityState = {
  highContrast: boolean;
  toggleHighContrast: () => void;
  zoom: number;
  increaseZoom: () => void;
  decreaseZoom: () => void;
  resetAccessibility: () => void;
};

const AccessibilityContext = createContext<AccessibilityState | undefined>(undefined);

const ZOOM_STEP = 0.1;
const MIN_ZOOM = 1.0;
const MAX_ZOOM = 1.5;
const DEFAULT_ZOOM = 1.0;

export const AccessibilityProvider = ({ children }: { children: ReactNode }) => {
  const [highContrast, setHighContrast] = useState(false);
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedContrast = localStorage.getItem('high-contrast') === 'true';
    const storedZoom = Number(localStorage.getItem('zoom-level')) || DEFAULT_ZOOM;

    setHighContrast(storedContrast);
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
        document.body.style.zoom = String(zoom);
        localStorage.setItem('zoom-level', String(zoom));
    }
  }, [zoom, isMounted]);

  const toggleHighContrast = () => setHighContrast(prev => !prev);

  const increaseZoom = () => setZoom(prev => Math.min(MAX_ZOOM, prev + ZOOM_STEP));
  const decreaseZoom = () => setZoom(prev => Math.max(MIN_ZOOM, prev - ZOOM_STEP));

  const resetAccessibility = () => {
    setHighContrast(false);
    setZoom(DEFAULT_ZOOM);
  };
  
  if (!isMounted) {
    return null;
  }

  return (
    <AccessibilityContext.Provider value={{ 
        highContrast, toggleHighContrast, 
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
