import { Footer } from 'nextra-theme-docs'
import Link from 'next/link'

const DocsFooter = () => {

    const Links = [
        { name: 'NeatNode', href: 'https://neatnode.vercel.app' },
        { name: 'GitHub', href: 'https://github.com/aakash-gupta02/NeatNode' },
        { name: 'NPM', href: 'https://npmjs.com/package/neatnode' },
        { name: 'Twitter', href: 'https://x.com/AakashG99795' }
    ]


    return (
        <Footer>
            <style>{`
                .nn-footer-wrap {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 12px;
                    width: 100%;
                    padding: 4px 0;
                }
                .nn-footer-links {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 20px;
                    font-size: 13px;
                    color: #71717a;
                }
                .nn-footer-link {
                    color: #71717a;
                    text-decoration: none;
                    transition: color 0.15s;
                }
                .nn-footer-link:hover {
                    color: #10b981;
                }
                .nn-footer-copy {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 4px;
                    font-size: 13px;
                    color: #71717a;
                }
                .nn-footer-accent {
                    color: #10b981;
                    font-weight: 600;
                }
                .nn-footer-author {
                    color: #10b981;
                    font-weight: 500;
                    text-decoration: none;
                    transition: opacity 0.15s;
                }
                .nn-footer-author:hover {
                    opacity: 0.8;
                }
            `}</style>

            <div className="nn-footer-wrap">
                <div className="nn-footer-links">
                    {Links.map((link, index) => (
                        <Link key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="nn-footer-link">
                            {link.name}
                        </Link>
                    ))}
                </div>

            </div>

            <div className="nn-footer-copy">
                <span>
                    MIT {new Date().getFullYear()} © <span className="nn-footer-accent">NeatNode</span>
                </span>
                <span>·</span>
                <span>
                    Built with Love by{' '}
                    <Link href="https://aakashgupta.app/" target="_blank" rel="noopener noreferrer" className="nn-footer-author">
                        Aakash Gupta
                    </Link>
                </span>
            </div>
        </Footer>
    )
}

export default DocsFooter
