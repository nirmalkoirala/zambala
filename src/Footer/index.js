import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import { animateScroll as scroll} from 'react-scroll'

import { FooterContainer, FooterWrap, FooterLinksContainer,
FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink,
SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIconLink, SocialIcons
} from './FooterElements'


const Footer = ({isOpen, toggle}) => {
    // const [scrollNav, setScrollNav] = useState(false);

    // const changeNav = () => {
    //     if(window.scrollY >=80) {
    //         setScrollNav(true);
    //     } else{
    //         setScrollNav(false);
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', changeNav)
    // }, [])

const toggleHome = () => {
    scroll.scrollToTop();
};
    return (
        <>
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems isOpem={isOpen} onClick={toggle}>
                            <FooterLinkTitle>Speak To Our Team</FooterLinkTitle>
                                <FooterLink to='services'>(02) 5116 0464</FooterLink>
                                <FooterLink to='aboutus' >0435 816 031</FooterLink> 
                                <FooterLink to='aboutus' > info@zambalaeducation.com.au</FooterLink> 
                                <FooterLink to='aboutus' >ABN: 82307281610</FooterLink> 
                            </FooterLinkItems>
                            <FooterLinkItems>
                            <FooterLinkTitle></FooterLinkTitle>
                            
                                <FooterLink to="/signin">http://www.zambalaeducation.com.au</FooterLink>
                                <FooterLink to="/signin">22/8 Goodchild Street , Lyneham, ACT 2602</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>ZAMBALA</SocialLogo>
                        <WebsiteRights>Zambala Education Consultancy © {new Date().getFullYear()}
                         All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/people/Zambala-Education-Consultancy/100076505912504/" target="_blank"
                             aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/" target="_blank"
                             aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="https://twitter.com/" target="_blank"
                             aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
            
        </>
    );
};



export default Footer;
