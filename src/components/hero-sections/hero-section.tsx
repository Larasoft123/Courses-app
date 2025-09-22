"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { useWrite } from "@/hooks/use-write"
import { GradientBackground } from "@/components/shared"

const words = ["AI & Machine Learning", "Blockchain Technology", "Quantum Computing", "Data Science", "Cybersecurity"]

export function HeroSection() {

    const { displayText } = useWrite({ words, wordDelay: 500 })
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

            <GradientBackground />

            <div className="relative z-10 container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Content */}
                    <div className="animate-slide-in-up">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            <span className="text-white">Master Tomorrow's</span>
                            <br />
                            <span aria-label={displayText} className="text-violet-300 min-h-[1.2em] inline-block">
                                {displayText}
                                <span className="animate-pulse text-violet-400">|</span>
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
                            Join the future of learning with cutting-edge courses designed by industry experts. Transform your career
                            with hands-on projects and real-world applications.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 group shadow-lg shadow-violet-500/25"
                            >
                                Start Learning
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 group bg-transparent"
                            >
                                <Play className="mr-2 h-5 w-5" />
                                Watch Demo
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-8 text-sm">
                            <div>
                                <div className="text-2xl font-bold text-violet-400">50K+</div>
                                <div className="text-slate-400">Students</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-blue-400">200+</div>
                                <div className="text-slate-400">Courses</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-purple-400">95%</div>
                                <div className="text-slate-400">Success Rate</div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Video */}
                    <div className="relative animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
                        <div className="relative">
                            {/* Glow effect behind video */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>

                            {/* Video container */}
                            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-violet-500/20 backdrop-blur-sm">
                                <div className="aspect-video bg-gradient-to-br from-violet-900/30 via-purple-900/30 to-blue-900/30 rounded-lg flex items-center justify-center relative overflow-hidden">
                                    {/* Animated background pattern */}
                                    <div className="absolute inset-0 opacity-20">
                                        <div className="absolute top-4 left-4 w-2 h-2 bg-violet-400 rounded-full animate-ping"></div>
                                        <div
                                            className="absolute top-8 right-8 w-1 h-1 bg-blue-400 rounded-full animate-ping"
                                            style={{ animationDelay: "0.5s" }}
                                        ></div>
                                        <div
                                            className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping"
                                            style={{ animationDelay: "1s" }}
                                        ></div>
                                    </div>

                                    <div className="text-center z-10">
                                        <div className="w-20 h-20 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-violet-500/50 hover:scale-110 transition-transform cursor-pointer">
                                            <Play className="h-10 w-10 text-white ml-1" />
                                        </div>
                                        <p className="text-slate-300 font-medium">Academy Showcase Video</p>
                                        <p className="text-sm text-slate-400 mt-2">See our students' success stories</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
