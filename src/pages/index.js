import React from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import config from '../../config';
import cv from '../assets/img/cv.pdf';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
          I'm a 25 years old frontend developer with knowledge on technology such as HTML, CSS, JS, Python and actually learning Backend Development. Able to work under pressure and within of different work methodologies such as Agile and Kamban; always up for a new challenge and open to learn new languages and technologies. Anything that helps me grow personally and professionally is welcome.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">React Developer</h3>
              <div className="subheading mb-3">Tekpro Ecommerce - Team: Vtex IO</div>
              <p>
              Creating components and developing the frontend of all the new clients of the company with Vtex, based on React. Working with technologies such as CSS Modules, Typescript, React Hooks, GraphQL and NPM packages
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">April 2021 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">JS and React's mentor</h3>
              <div className="subheading mb-3">CoderHouse</div>
              <p>
                Helping students in classes and after it in order to help them understand the basis and the concepts of Javascript and the React library, giving support and feedback to the student's code while revise the challenges of each class
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2020 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Frontend Developer</h3>
              <div className="subheading mb-3">Glamit - Team: Implementations</div>
              <p>
              Developing the frontend of all the new clients of the company in HTML, CSS,
              LESS, JS and
              design with Magento or the CMS Vtex, based on React. Working hand by hand with the design department in order to create WOW experiences to our customers and clients, as one of our company basis.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">December 2020 - March 2021</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Web UI Jr</h3>
              <div className="subheading mb-3">Globant - Project: Smile Direct Club</div>
              <p>
              Creating components in HTML, CSS, Bulma and JS, bases on the requirements of the project. Learning Vue.JS and Contentful to migrate old components to a new and scalable enviroment.
              Maintaining the frontend of the international sites of the client's Django CMS
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2020 - December 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">QC Analyst</h3>
              <div className="subheading mb-3">Globant - Project: Mercadolibre</div>
              <p>
                QA/QC on diversity kind of parameters and standards provided by this important e-commerce company while researching and reporting problems or mistakes in the e-commerce company
                website. Data entry and cataloging of the marketplace's products.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">February 2020 - November 2020</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Coderhouse</h3>
              <div className="subheading mb-3">Fullstack Development</div>
              <div>Backend development with MERN (in progress).</div>
              <div>Frontend with Javascript.</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2020 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Udemy</h3>
              <div className="subheading mb-3">React Development</div>
              <div>React Native (in progress).</div>
              <div>Advanced React and Redux.</div>
              <div>React: fundamentals, Hooks, NextJS, Gatsby, Firebase, Graphql.</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2020 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Educacion IT</h3>
              <div className="subheading mb-3">Python</div>
              <div>Backend development with Django.</div>
              <div>Programming with Python.</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">April 2020 - July 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Da Vinci School</h3>
              <div className="subheading mb-3">Web Design</div>
              <div>HTML, CSS, Sass, jQuery and CMS such as Wordpress and Mobirise.</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2019 - January 2020</span>
            </div>
          </div>
        </div>

      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-python"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from studying and being a web developer, I'm an excellent chef. In fact, before I became a frontend developer I was a Pastry Chef and a Sushiman in different kind of restaurants around Buenos Aires. I also love to climb and take pictures, since I'm a photographer as well.
          </p>
          <p className="mb-0">
            When I'm in my house (or in quarentine), I follow a large number of
            movies and television shows, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="certifications"
      >
        <div className="w-100">
          <h2 className="mb-5">Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li far fa-eye text-danger"></i>
                <a className="certificate" href="https://www.linkedin.com/in/ruben-jose-mavarez-boscan-3192b4172/detail/treasury/education:694460296/?entityUrn=urn%3Ali%3Afsd_profileTreasuryMedia%3A(ACoAACj6j8UBFmarQBzEr5hmj_umOqvtCYBaL9E%2C1609696526165)&section=education%3A694460296&treasuryCount=1">React certificate - Udemy</a>
            </li>
            <li>
              <i className="fa-li far fa-eye text-danger"></i>
                <a className="certificate" href="https://www.linkedin.com/in/ruben-jose-mavarez-boscan-3192b4172/detail/treasury/education:677542340/?entityUrn=urn%3Ali%3Afsd_profileTreasuryMedia%3A(ACoAACj6j8UBFmarQBzEr5hmj_umOqvtCYBaL9E%2C1600292464230)&section=education%3A677542340&treasuryCount=1">Advanced Javascript - Udemy</a>
            </li>
            <li>
              <i className="fa-li far fa-eye text-danger"></i>
                <a className="certificate" href="https://www.linkedin.com/in/ruben-jose-mavarez-boscan-3192b4172/detail/treasury/education:652263141/?entityUrn=urn%3Ali%3Afsd_profileTreasuryMedia%3A(ACoAACj6j8UBFmarQBzEr5hmj_umOqvtCYBaL9E%2C1595173639334)&section=education%3A652263141&treasuryCount=1">Frontend with Javascript - Coderhouse</a>
            </li>
            <li>
              <i className="fa-li far fa-eye text-danger"></i>
                <a className="certificate" href="https://www.linkedin.com/in/ruben-jose-mavarez-boscan-3192b4172/detail/treasury/education:667465880/?entityUrn=urn%3Ali%3Afsd_profileTreasuryMedia%3A(ACoAACj6j8UBFmarQBzEr5hmj_umOqvtCYBaL9E%2C1594902189012)&section=education%3A667465880&treasuryCount=1">Backend web development with Django - EducacionIT</a>
            </li>
            <li>
              <i className="fa-li far fa-eye text-danger"></i>
                <a className="certificate" href="https://www.linkedin.com/in/ruben-jose-mavarez-boscan-3192b4172/detail/treasury/education:652263122/?entityUrn=urn%3Ali%3Afsd_profileTreasuryMedia%3A(ACoAACj6j8UBFmarQBzEr5hmj_umOqvtCYBaL9E%2C1589902834595)&section=education%3A652263122&treasuryCount=1">Programming with Python - EducacionIT</a>
            </li>
          </ul>
        </div>
      </section>

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="resume"
      >
        <div className="w-100">
          <h2 className="mb-5">Download my CV</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fas fa-download text-danger"></i>
              <p className="lead mb-5">
                <a href={cv} className="certificate" download="CV-RubenMavarez-Frontend">CV - Ruben Mavarez</a>
              </p>
            </li>
          </ul>

        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
