'use client'

import { Suspense, lazy, useCallback } from 'react'
import type { Application } from '@splinetool/runtime'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  /** Track mouse across entire page, not just the canvas */
  globalMouseTracking?: boolean
}

export function SplineScene({ scene, className, globalMouseTracking = false }: SplineSceneProps) {
  const onLoad = useCallback((splineApp: Application) => {
    if (globalMouseTracking) {
      splineApp.setGlobalEvents(true)
    }
  }, [globalMouseTracking])

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
        onLoad={onLoad}
      />
    </Suspense>
  )
}
