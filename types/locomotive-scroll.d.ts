declare module 'locomotive-scroll' {
  interface LocomotiveScrollOptions {
    el?: HTMLElement | null;
    name?: string;
    offset?: number | [number, number];
    repeat?: boolean;
    smooth?: boolean;
    smoothMobile?: boolean;
    direction?: 'horizontal' | 'vertical';
    inertia?: number;
    class?: string;
    scrollbarClass?: string;
    scrollingClass?: string;
    draggingClass?: string;
    smoothClass?: string;
    initClass?: string;
    getSpeed?: boolean;
    getDirection?: boolean;
    scrollFromAnywhere?: boolean;
    multiplier?: number;
    lerp?: number;
    infinite?: boolean;
    gestureOrientation?: 'vertical' | 'horizontal' | 'both';
    reloadOnContextChange?: boolean;
    resetNativeScroll?: boolean;
    touchMultiplier?: number;
    touchClass?: string;
    smartphone?: {
      smooth?: boolean;
      direction?: 'horizontal' | 'vertical';
      inertia?: number;
      getDirection?: boolean;
      gestureOrientation?: 'vertical' | 'horizontal' | 'both';
    };
    tablet?: {
      smooth?: boolean;
      direction?: 'horizontal' | 'vertical';
      inertia?: number;
      getDirection?: boolean;
      gestureOrientation?: 'vertical' | 'horizontal' | 'both';
    };
    easing?: (t: number) => number;
    duration?: number;
    smoothWheel?: boolean;
  }

  interface LocomotiveScroll {
    el?: HTMLElement | null;
    smooth: boolean;
    inertia: number;
    isDragging: boolean;
    isScrolling: boolean;
    isMobile: boolean;
    isTablet: boolean;
    vs: {
      delta: {
        x: number;
        y: number;
      };
      direction: string;
    };
    on: (event: string, callback: (...args: any[]) => void) => void;
    off: (event: string, callback?: (...args: any[]) => void) => void;
    destroy: () => void;
    update: () => void;
    start: () => void;
    stop: () => void;
    scrollTo: (
      target: string | HTMLElement | number,
      options?: {
        offset?: number;
        callback?: () => void;
        duration?: number;
        easing?: (t: number) => number;
        disableLerp?: boolean;
      }
    ) => void;
  }

  export default class LocomotiveScrollConstructor {
    constructor(options?: LocomotiveScrollOptions);
    init(): void;
    on(event: string, callback: (...args: any[]) => void): void;
    off(event: string, callback?: (...args: any[]) => void): void;
    destroy(): void;
    update(): void;
    start(): void;
    stop(): void;
    scrollTo(
      target: string | HTMLElement | number,
      options?: {
        offset?: number;
        callback?: () => void;
        duration?: number;
        easing?: (t: number) => number;
        disableLerp?: boolean;
      }
    ): void;
  }
} 