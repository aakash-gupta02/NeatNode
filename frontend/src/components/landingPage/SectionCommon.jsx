import React from 'react'

const SectionCommon = ({ children, title, desc }) => {
    return (

        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">{title}</h2>
                    <p className="text-lg text-zinc-400">{desc}</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {children}

                </div>
            </div>
        </section>
    )
}

export default SectionCommon