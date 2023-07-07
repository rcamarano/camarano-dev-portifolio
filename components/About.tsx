import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaLink, FaCloudDownloadAlt } from 'react-icons/fa';

export default function AboutMe({ scrollHandler }) {
    const headerRef = useRef(null);

    const handleButtonClick = () => {
        scrollHandler();
    };
    return (
        <div id="about-section" className="about-me-section bg-orange-500 py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div>
                        <a href="#top" onClick={handleButtonClick}>
                            <img
                                className="rounded-full h-300 object-cover mx-auto mb-6 opacity-90 hover:opacity-100 border-2 border-white shadow-lg w-80"
                                onClick={handleButtonClick}
                                src="/images/profilePicture.jpg"
                                alt="Rogério Camarano, fullstack DEV, html, css, javascript, typescript, node.js, React, Next, Tailwind, MySql, Python."
                            />
                        </a>
                    </div>
                    <div className="container md:w-2/3 md:ml-10">
                        <h2 className="text-2xl font-bold text-white mx-2 mb-4">About me:</h2>
                        <p className="text-white mx-5 text-md">
                            Olá, sou Rogério, pai de duas meninas incríveis, casado pela segunda vez com minha cara metade. Sou apaixonado por tecnologia e inovação. Nos meus momentos livres gosto de passar tempo com a minha família, meus pets, estudar sobre tecnologia e fazer um som com a minha banda.
                            <br />
                            <br />
                            Sou apaixonado por tecnologia e por pessoas. Sei que são as pessoas que fazem a diferença no final do dia de qualquer ambiente de trabalho, projeto ou contrato. Levando isso em consideração, sou um desenvolvedor full stack com uma formação anterior em comunicação. Ou seja, consigo unir o melhor dos dois mundos:
                            - A técnica para desenvolver aplicações funcionais usando HTML, CSS, JS, TS, React, Node.JS, MySql, Sequelize, Express e afins;
                            - A gestão das pessoas envolvidas no meu ambiente de trabalho promovendo a empatia e a colaboração.
                            <br />
                            <br />
                            Estou disponível para trabalho e em busca de novas oportunidades de crescimento e desenvolvimento pessoal e profissional.  Entre em contato comigo.
                            <br />
                            Até já!
                            <br />
                            R
                        </p>
                        <div className="flex justify-left icons mt-6 mb-5 mx-5 md:mx-5">
                            <a href="mailto:rogeriocamarano@gmail.com" target="_blank" rel="noopener noreferrer" className="center text-white hover:text-orange-700 mx-5 mr-4 md:mr-8">
                                <div className="flex flex-col items-center mb-5">
                                    <FaEnvelope size={48} />
                                    <p className="mt-2">email me</p>
                                </div>
                            </a>

                            <a href="https://api.whatsapp.com/send?phone=5511981873686&text=Oi%2C+gostaria+de+agendar+uma+sess%C3%A3o+de+Bioconex%C3%A3o" target="_blank" rel="noopener noreferrer"
                                className="text-white hover:text-orange-700 mr-4 md:mr-8">
                                <div className="flex flex-col items-center mb-5">
                                    <FaWhatsapp size={48} />
                                    <p className="mt-2">whatsapp</p>
                                </div>
                            </a>
                            <a
                                href="https://github.com/rcamarano"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-orange-700 mr-4 md:mr-8">
                                <div className="flex flex-col items-center mb-5">
                                    <FaGithub size={48} />
                                    <p className="mt-2">github</p>
                                </div>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/rogerio-camarano-dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-orange-700 mr-4 md:mr-8">
                                <div className="flex flex-col items-center mb-5">
                                    <FaLinkedin size={48} />
                                    <p className="mt-2">linkedin</p>
                                </div>

                            </a>
                            {/* <a
                                href="../docs/CV-Camarano-DEV.pdf"
                                download="nome-do-arquivo.pdf"
                                className="text-white hover:text-orange-700 mr-4 md:mr-8"
                            >
                                <div className="flex flex-col items-center mb-5">
                                    <FaCloudDownloadAlt size={48} />
                                    <p className="mt-2">download cv</p>
                                </div>
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div ref={headerRef} id="carroussel" />
        </div>
    );
}