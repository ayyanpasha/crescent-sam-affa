"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { LoadingScreen } from "./loading-screen"

export function ClientWrapper({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true)
    const [showContent, setShowContent] = useState(false)

    useEffect(() => {
        // Check if user has already seen the loading screen in this session
        const hasSeenLoading = sessionStorage.getItem("hasSeenLoading")

        if (hasSeenLoading) {
            setIsLoading(false)
            setShowContent(true)
        }
    }, [])

    const handleLoadingComplete = () => {
        // Mark that user has seen the loading screen
        sessionStorage.setItem("hasSeenLoading", "true")

        setIsLoading(false)
        setTimeout(() => {
            setShowContent(true)
        }, 200)
    }

    if (isLoading) {
        return <LoadingScreen onLoadingComplete={handleLoadingComplete} />
    }

    return (
        <div className={`transition-opacity duration-700 ${showContent ? "opacity-100" : "opacity-0"}`}>{children}</div>
    )
}
