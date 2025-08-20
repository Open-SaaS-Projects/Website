"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) {
      setError(true)
      return
    }

    try {
      // Set canvas to full width/height
      const resizeCanvas = () => {
        try {
          const container = canvas.parentElement
          if (container) {
            canvas.width = container.offsetWidth
            canvas.height = container.offsetHeight
          }
        } catch (err) {
          console.error("Canvas resize error:", err)
          setError(true)
        }
      }

      resizeCanvas()
      window.addEventListener("resize", resizeCanvas)

      // Create particles
      const particles: Particle[] = []
      const particleCount = Math.min(50, window.innerWidth / 20) // Reduce particles on smaller screens
      // Updated colors to match the new color palette
      const colors = ["#6320ce", "#6D2FD5", "#E6DFFF"]

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }

      // Animation loop
      let animationFrame: number
      const animate = () => {
        try {
          ctx.clearRect(0, 0, canvas.width, canvas.height)

          particles.forEach((particle) => {
            // Draw particle
            ctx.fillStyle = particle.color
            ctx.beginPath()
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
            ctx.fill()

            // Update position
            particle.x += particle.speedX
            particle.y += particle.speedY

            // Wrap around edges
            if (particle.x > canvas.width) particle.x = 0
            if (particle.x < 0) particle.x = canvas.width
            if (particle.y > canvas.height) particle.y = 0
            if (particle.y < 0) particle.y = canvas.height
          })

          // Draw connecting lines between nearby particles
          particles.forEach((particle, index) => {
            for (let j = index + 1; j < particles.length; j++) {
              const dx = particle.x - particles[j].x
              const dy = particle.y - particles[j].y
              const distance = Math.sqrt(dx * dx + dy * dy)

              if (distance < 100) {
                ctx.beginPath()
                // Updated color to match the new color palette
                ctx.strokeStyle = `rgba(99, 32, 206, ${0.2 - distance / 500})`
                ctx.lineWidth = 0.5
                ctx.moveTo(particle.x, particle.y)
                ctx.lineTo(particles[j].x, particles[j].y)
                ctx.stroke()
              }
            }
          })

          animationFrame = requestAnimationFrame(animate)
        } catch (err) {
          console.error("Animation error:", err)
          cancelAnimationFrame(animationFrame)
          setError(true)
        }
      }

      animate()

      return () => {
        window.removeEventListener("resize", resizeCanvas)
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    } catch (err) {
      console.error("Canvas setup error:", err)
      setError(true)
    }
  }, [])

  // If there's an error, return a simple gradient background instead
  if (error) {
    return <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#E6DFFF] to-white opacity-50"></div>
  }

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" />
}
