import React from 'react'

const Background = () => {
    return (

        <>

            <div
                className="pointer-events-none absolute inset-0 -z-20"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(16,185,129,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.01) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                    maskImage: "radial-gradient(ellipse at center, black 0%, black 10%, transparent 70%)",
                    WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, black 30%, transparent 70%)"
                }}
            ></div>

            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-emerald-500/30 blur-[190px]"></div>
            </div>
        </>

    )
}

export default Background