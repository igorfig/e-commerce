import { 
	Container,
	Title,
	Link,
	Description,
	Emphasis,
	Author
} from './styles.js';

import githubImg from '../../assets/socialMedia/github-mark.svg'
import linkedinImg from '../../assets/socialMedia/linkedin-mark.svg'
import instagramImg from '../../assets/socialMedia/instagram-mark.svg'

export function Footer() {
	return (
		<Container>
			<Title>ME SIGA NAS REDES SOCIAIS</Title>
			<div>
				<Link href="https://github.com/igorfig" target="_blank">
					<img src={githubImg} alt="Github"/>
				</Link>

				<Link href="https://www.linkedin.com/in/igorfig/" target="_blank">
					<img src={linkedinImg} alt="linkedIn"/>
				</Link>

				<Link href="https://www.instagram.com/igufs123/" target="_blank">
					<img src={instagramImg} alt="Instagram"/>
				</Link>
			</div>

			<Description>
				<Emphasis>Link Start | Commerce</Emphasis> é um projeto web que simula um e-commerce.
				É inspirado em grandes lojas do mercado que tem como venda principal produtos relacionados a computadores. 
				Este projeto foi feito no intuito de servir como portfólio e comprovar experiência em determinadas tecnologias do mercado.
			</Description>

			<Author>
				Projeto inteiramente desenvolvido por
				<Emphasis> Igor Figueiredo ❤️</Emphasis>
			</Author>
		</Container>
	)
}