"use client"

import { useEffect, useState } from "react"

interface LoadingScreenProps {
    onLoadingComplete: () => void
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
    const [progress, setProgress] = useState(0)
    const [fadeOut, setFadeOut] = useState(false)

    useEffect(() => {
        // Smooth progress animation
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval)
                    setFadeOut(true)
                    setTimeout(() => onLoadingComplete(), 800)
                    return 100
                }
                return prev + 1.5
            })
        }, 40)

        return () => clearInterval(progressInterval)
    }, [onLoadingComplete])

    return (
        <div
            className={`fixed inset-0 z-50 bg-white flex items-center justify-center transition-opacity duration-800 ${fadeOut ? "opacity-0" : "opacity-100"
                }`}
        >
            <div className="text-center">
                {/* Logo */}
                <div className="mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#002D62] rounded-full mb-6 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#002D62] to-[#004080] animate-pulse" />
                        <span className="relative text-white font-bold text-2xl font-poppins">C</span>
                    </div>

                    <div className="space-y-2">
                        <h1 className="font-poppins font-semibold text-2xl text-[#002D62] tracking-tight">Crescent Sam Affa</h1>
                        <p className="text-gray-500 text-sm font-medium tracking-wider uppercase">Enterprises</p>
                    </div>
                </div>

                {/* Progress Indicator */}
                <div className="w-64 mx-auto mb-8">
                    <div className="w-full h-px bg-gray-200 relative overflow-hidden">
                        <div
                            className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#002D62] to-[#FFB000] transition-all duration-300 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                {/* Loading Text */}
                <p className="text-gray-400 text-sm font-medium">
                    {progress < 30 && "Initializing"}
                    {progress >= 30 && progress < 70 && "Loading"}
                    {progress >= 70 && progress < 100 && "Almost Ready"}
                    {progress === 100 && "Complete"}
                </p>

                {/* Established Badge */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
                    <div className="text-gray-400 text-xs font-medium tracking-widest">EST. 1984</div>
                </div>
            </div>

            {/* Subtle Background Animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#FFB000] rounded-full opacity-30 animate-ping"
                    style={{ animationDuration: "3s" }}
                />
                <div
                    className="absolute top-3/4 right-1/3 w-1 h-1 bg-[#002D62] rounded-full opacity-20 animate-ping"
                    style={{ animationDuration: "4s", animationDelay: "1s" }}
                />
                <div
                    className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-[#FFB000] rounded-full opacity-25 animate-ping"
                    style={{ animationDuration: "5s", animationDelay: "2s" }}
                />
            </div>
        </div>
    )
}
