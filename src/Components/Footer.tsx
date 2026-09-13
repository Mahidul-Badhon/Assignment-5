import React from 'react'
import Logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <footer className="w-full bg-white text-slate-500 py-12 px-6 md:px-16 border border-gray-100 mt-7">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start text-center md:text-left gap-8 mb-12">   
                  <div className="max-w-sm flex flex-col items-center md:items-start">
                        <div className="mb-4">
                            <img src={Logo} alt="Dev Stack Logo" className="h-8 w-auto object-contain" />
                        </div>
                        <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>

                        <div className="flex items-center justify-center md:justify-start gap-3 md:gap-6 text-sm font-medium text-slate-700">
                            <a href="#github" className="text-slate-900">GitHub</a>
                            <span className="md:hidden text-slate-400">•</span>
                            <a href="#twitter" className="text-slate-900">Twitter</a>
                            <span className="md:hidden text-slate-400">•</span>
                            <a href="#linkedin" className="text-slate-900">LinkedIn</a>
                        </div>
                    </div>
                    <div className="hidden md:flex gap-12 lg:gap-20 text-sm">
                        <div className="flex flex-col gap-3">
                            <h3 className="font-semibold text-slate-900">PRODUCT</h3>
                            <a href="#home" className="text-slate-900">Home</a>
                            <a href="#technologies" className="text-slate-900">Technologies</a>
                            <a href="#projects" className="text-slate-900">Projects</a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="font-semibold text-slate-900">COMPANY</h3>
                            <a href="#about" className="text-slate-900">About</a>
                            <a href="#contact" className="text-slate-900">Contact</a>
                            <a href="#careers" className="text-slate-900">Careers</a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="font-semibold text-slate-900">LEGAL</h3>
                            <a href="#privacy-policy" className="text-slate-900">Privacy Policy</a>
                            <a href="#terms-of-service" className="text-slate-900">Terms of Service</a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#privacy" className="text-slate-600">Privacy</a>
                        <a href="#terms" className="text-slate-600">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;