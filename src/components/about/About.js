import React from 'react';
import { Button } from 'react-bootstrap';
import './about.css'

const About = () => {
      // about us section with photo 
      return (
            <div className="container aboutus-style my-5">
                  <div>
                        <h2 className="fw-bold text-center">ABOUT US</h2>

                        <p className="me-4 font-style">The better we do, the more good we can do.
                              e-learning was founded in Galway, Ireland, in 2007 and has grown organically to become a major force in free online education and skills training. Today, with more than 20 million learners in 195 countries, e-learning is changing how the world learns and up-skills.

                              We are committed to equality and access to education and skills training irrespective of gender, geography, economic status or any other barriers that can so often stunt potential. So we offer a range of free courses that meet the many diverse needs of our learners. The UN declared in Article 26 of the 1946 Declaration of Human Rights that “Education shall be free…”. This statement will always inspire us.

                              e-learning was founded by e-learning CEO, Mike Feerick. Mike is a businessman, but one with a difference. He believes in social impact, and that you can build a financially successful business focused on meeting a huge global social need, making education and skills training more accessible for everyone. He invites anyone who believes that too, to support the e-learning mission.

                              e-learning is free of charge to you. But it’s still a business – albeit a socially-focused one. We are a social enterprise making our money through advertising, merchandise, and the sale of Certificates and Diplomas, should a graduate choose to buy one.</p>
                        <Button className="btn-warning">LEARN MORE</Button>
                  </div>

                  <img src="https://cdn01.alison-static.net/public/html/site/img/our-story-image2.png" alt="" />
            </div>
      );
};

export default About;