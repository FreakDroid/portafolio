import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Technologies = () => {
  const { technologies } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="technologies">
      <Container>
        <div className="technologies-wrapper">
          <Title title="Skills" />
          <Row>
            {technologies.map((technology) => {
              const { icon, description, name, id } = technology;
              return (
                <Col key={id} lg={4} sm={12} className="technologies-wrapper__col">
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="technologies-wrapper__text">
                      <h2 className="technologies-wrapper__text-title">
                        {name || 'Project Title'}
                      </h2>
                      <div>
                        <p>{description}</p>
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <img className="technologies-wrapper__image" src={icon} />
                      </div>
                    </div>
                  </Fade>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Technologies;
