"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

interface AnimateOnScrollProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function AnimateOnScroll({ children, className = "", delay = 0 }: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element is 10% visible, trigger the animation
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Once we've seen it, no need to keep observing
          if (ref.current) observer.unobserve(ref.current)
        }
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.1, // 10% of the item visible
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: delay,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
