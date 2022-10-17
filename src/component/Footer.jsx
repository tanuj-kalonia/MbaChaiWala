import React from 'react'

const Footer = () => {

    const footerLinks = (element) => {

        // this will contain all the footer elements
        const allFooterLinks = document.querySelectorAll(".footerLinks");

        switch (element) {
            case 0:
                allFooterLinks.forEach((item, index) => {
                    item.style.opacity = (index === 0) ? 1 : 0.4;
                });
                break;
            case 1:
                allFooterLinks.forEach((item, index) => {
                    item.style.opacity = (index === 1) ? 1 : 0.4;
                });
                break;
            case 2:
                allFooterLinks.forEach((item, index) => {
                    item.style.opacity = (index === 2) ? 1 : 0.4;
                });
                break;
            case 3:
                allFooterLinks.forEach((item, index) => {
                    item.style.opacity = (index === 3) ? 1 : 0.4;
                });
                break;
            case 4:
                allFooterLinks.forEach((item, index) => {
                    item.style.opacity = (index === 4) ? 1 : 0.4;
                });
                break;
            case 5:
                allFooterLinks.forEach((item, index) => {
                    item.style.opacity = (index === 5) ? 1 : 0.4;
                });
                break;
            default:
                allFooterLinks.forEach(item => item.style.opacity = 1
                );
        }

    }
    const linksBackToNormal = () => {
        const allFooterLinks = document.querySelectorAll(".footerLinks");
        allFooterLinks.forEach(item => item.style.opacity = 1);
    }
    return (
        <>
            <footer>
                <h1>
                    Let's
                    <br />
                    #ConnectOnCutting?
                </h1>

                <aside onMouseLeave={linksBackToNormal()}>
                    <a
                        href="/"
                        className="footerLinks"
                        onMouseOver={() => footerLinks(0)}
                        data-cursorpointermini={true}
                    >
                        Home
                    </a>
                    <a
                        href="/story"
                        className="footerLinks"
                        onMouseOver={() => footerLinks(1)}
                        data-cursorpointermini={true}
                    >
                        Story
                    </a>
                    <a
                        href="/media"
                        className="footerLinks"
                        onMouseOver={() => footerLinks(2)}
                        data-cursorpointermini={true}
                    >
                        Media
                    </a>
                    <a
                        href="/franchise"
                        className="footerLinks"
                        onMouseOver={() => footerLinks(3)}
                        data-cursorpointermini={true}
                    >
                        Franchise
                    </a>
                    <a
                        href="/events"
                        className="footerLinks"
                        onMouseOver={() => footerLinks(4)}
                        data-cursorpointermini={true}
                    >
                        Events
                    </a>
                    <a
                        href="/chaiwalacares"
                        className="footerLinks"
                        onMouseOver={() => footerLinks(5)}
                        data-cursorpointermini={true}
                    >
                        Chai Wala Cares
                    </a>
                </aside>

                <div>
                    <h5>Email</h5>
                    <a href="mailto: info@mbachaiwala.com">Info@mbachaiwala.com</a>
                    <a href="mailto: franchise@mbachaiwala.com">
                        Franchise@mbachaiwala.com
                    </a>
                </div>

                <div>
                    <h5>Phone</h5>
                    <a href="tel: +91722905222">+91722905222</a>
                </div>

                <p>© COPYRIGHT 2022 MBA CHAIWALA. MADE BY</p>
            </footer>
            <div className="footer"></div>
        </>
    )
}

export default Footer
