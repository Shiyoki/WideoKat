import Footer from "../index";
import Icon from "../../icons";

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>Desarrolladores</Footer.Title>
                    <Footer.Link href="#"><Icon className="fas fa-code" />Bryan Garcia</Footer.Link>
                    <Footer.Link href="#"><Icon className="fas fa-code" />Oscar Garcia</Footer.Link>
                    <Footer.Link href="#"><Icon className="fas fa-code" />Jose Vizcaya</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Conocimientos</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-html5" />HTML5</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-css3-alt" />CSS3</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-python" />Python</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-js-square" />JavaScript</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contactanos</Footer.Title>
                    <Footer.Link href="#">04160532949</Footer.Link>
                    <Footer.Link href="#">04125110933</Footer.Link>
                    <Footer.Link href="#">04245038495</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Redes Sociales</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-linkedin" />Linkedin</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-github" />Github</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}