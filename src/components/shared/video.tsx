"use client"


export function Video({ src }: { src: string | null }) {
    return (
        <div className="flex w-full h-full justify-center items-center">
            {src ? (
                <video src={src} className="w-full h-full object-cover"></video>
            ) : <h1 className="text-4xl text-center text-red-500 font-bebas">No hay video</h1>}
        </div>
    )
}
