export function GradientBackground() {
    return (
        <>
            <div className="fixed  -z-10  inset-0 bg-gradient-to-br from-slate-950 via-violet-950/50 to-blue-950/30"></div>

            <div className="absolute  -z-10 inset-0">
                <div className="absolute  top-20 left-10 w-72 h-72 bg-gradient-to-r from-violet-500/30 to-purple-500/30 rounded-full blur-3xl animate-float"></div>
                <div
                    className="absolute  bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-float"
                    style={{ animationDelay: "1s" }}
                ></div>
                <div
                    className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-500/30 to-violet-500/30 rounded-full blur-3xl animate-float"
                    style={{ animationDelay: "2s" }}
                ></div>
            </div>
        </>
    )
}
