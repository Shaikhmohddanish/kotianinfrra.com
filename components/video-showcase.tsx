"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react"

interface VideoItem {
  src: string
  title: string
  description: string
}

const videos: VideoItem[] = [
  {
    src: "/videos/video1.mp4",
    title: "Project Showcase",
    description:
      "An inside look at our latest residential development — quality construction and modern living.",
  },
  {
    src: "/videos/video2.mp4",
    title: "Community Walkthrough",
    description:
      "Explore the amenities, surroundings and lifestyle that Kotian Infrra projects bring to every family.",
  },
]

function VideoPlayer({ src, title }: VideoItem) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const [showControls, setShowControls] = useState(true)
  const hideTimer = useRef<ReturnType<typeof setTimeout>>(null)

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = true
  }, [])

  const resetHideTimer = () => {
    setShowControls(true)
    if (hideTimer.current) clearTimeout(hideTimer.current)
    if (isPlaying) {
      hideTimer.current = setTimeout(() => setShowControls(false), 2500)
    }
  }

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) v.play().catch(() => {})
    else v.pause()
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setIsMuted(v.muted)
  }

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation()
    // Fullscreen the container so controls stay visible
    containerRef.current?.requestFullscreen?.()
  }

  const handleTimeUpdate = () => {
    const v = videoRef.current
    if (!v || !v.duration) return
    setProgress((v.currentTime / v.duration) * 100)
  }

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    const v = videoRef.current
    if (!v || !v.duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    v.currentTime = ((e.clientX - rect.left) / rect.width) * v.duration
  }

  const controlsVisible = showControls || !isPlaying

  return (
    <div
      ref={containerRef}
      className="relative rounded-2xl overflow-hidden border border-white/10 bg-black cursor-pointer group flex items-center justify-center"
      style={{ height: "min(65vh, 520px)" }}
      onMouseMove={resetHideTimer}
      onMouseLeave={() => isPlaying && setShowControls(false)}
      onMouseEnter={() => setShowControls(true)}
      onClick={togglePlay}
    >
      {/* Video — max dimensions constrained, natural aspect ratio preserved */}
      <video
        ref={videoRef}
        src={src}
        playsInline
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onPlay={() => { setIsPlaying(true); resetHideTimer() }}
        onPause={() => { setIsPlaying(false); setShowControls(true) }}
        onEnded={() => { setIsPlaying(false); setProgress(0); setShowControls(true) }}
        style={{ maxWidth: "100%", maxHeight: "100%", display: "block" }}
      />

      {/* Gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none transition-opacity duration-300"
        style={{ opacity: controlsVisible ? 1 : 0 }}
      />

      {/* Centre play/pause */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-200"
        style={{ opacity: controlsVisible ? 1 : 0 }}
      >
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-lg shadow-primary/30 backdrop-blur-sm transition-transform duration-200 group-hover:scale-110">
          {isPlaying ? (
            <Pause className="w-6 h-6 sm:w-7 sm:h-7 text-black fill-black" />
          ) : (
            <Play className="w-6 h-6 sm:w-7 sm:h-7 text-black fill-black ml-0.5" />
          )}
        </div>
      </div>

      {/* Bottom controls */}
      <div
        className="absolute bottom-0 inset-x-0 px-3 pb-3 pt-8 transition-opacity duration-300"
        style={{ opacity: controlsVisible ? 1 : 0 }}
      >
        {/* Seekbar */}
        <div
          className="w-full h-1 bg-white/20 rounded-full mb-2 cursor-pointer overflow-hidden"
          onClick={handleSeek}
        >
          <div
            className="h-full rounded-full"
            style={{ width: `${progress}%`, background: "oklch(0.75 0.14 85)", transition: "width 150ms linear" }}
          />
        </div>

        <div className="flex items-center justify-between text-white" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center gap-1">
            <button onClick={togglePlay} className="p-1.5 rounded-full hover:bg-white/15 transition-colors" aria-label={isPlaying ? "Pause" : "Play"}>
              {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
            </button>
            <button onClick={toggleMute} className="p-1.5 rounded-full hover:bg-white/15 transition-colors" aria-label={isMuted ? "Unmute" : "Mute"}>
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
          <span className="text-xs font-medium text-white/70 truncate max-w-[40%]">{title}</span>
          <button onClick={handleFullscreen} className="p-1.5 rounded-full hover:bg-white/15 transition-colors" aria-label="Fullscreen">
            <Maximize className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function VideoShowcase() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
            See Our <span className="text-primary">Projects in Action</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Experience the craftsmanship and vision behind every Kotian Infrra
            project through these exclusive walkthroughs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {videos.map((video) => (
            <div key={video.src} className="flex flex-col gap-3">
              <VideoPlayer {...video} />
              <p className="text-sm text-muted-foreground leading-relaxed px-1">
                {video.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
