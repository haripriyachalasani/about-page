'use client'

import React, { useState, useEffect, useRef } from 'react';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

interface Metric {
  id: number
  value: string
  label: string
}

const metrics: Metric[] = [
  { id: 1, value: '4.8/5', label: 'Client Success Score' },
  { id: 2, value: '200+', label: 'Active Platform Users' },
  { id: 3, value: '98%', label: ' Global Partners & Counting' }
]

export default function MetricsCard() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [activeMetric, setActiveMetric] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  return (
    <BackgroundBeamsWithCollision>
      <div 
        ref={containerRef}
        className="relative h-[30rem] flex justify-center items-center min-h-screen overflow-hidden cursor-none bg-transparent dark:bg-transparent"
      >
        <div className="relative rounded-3xl p-8 text-black dark:text-white w-full max-w-5xl overflow-hidden">
          <h1 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Key Metrics
          </h1>
          <div className="flex flex-wrap justify-around items-center gap-8">
            {metrics.map((metric) => (
              <div
                key={metric.id}
                className="text-center relative z-10 flex-1 min-w-[120px]"
                onMouseEnter={() => setActiveMetric(metric.id)}
                onMouseLeave={() => setActiveMetric(null)}
              >
                <div 
                  className={`text-4xl font-bold mb-2 transition-all duration-300 ${
                    activeMetric === metric.id ? 'text-5xl text-blue-600 dark:text-blue-400' : ''
                  }`}
                >
                  {metric.value}
                </div>
                <div className="text-lg text-gray-700 dark:text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>
          <div 
            className="absolute w-40 h-50 rounded-full pointer-events-none z-20 mix-blend-screen"
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
              background: 'radial-gradient(circle, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0) 70%)',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-black dark:bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  )
}