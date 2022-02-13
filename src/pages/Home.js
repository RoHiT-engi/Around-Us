import * as React from "react";

import Navbar from "../components/Navbar";
import "../css/Home.css";
import BlogAdd from "./BlogAdd";

const Home = () => {
  return (
    <>
      <div div className="navMenu">
        {/* Navbar Starts */}
        <Navbar />
      </div>
      <div className="page">
        <div className="div1">
          <h1 id="a">Do you feel that what you do is never good enough?</h1>

          <h2 id="c">Then you may be suffering from Imposter Syndrome </h2>
          <br />
          <h2 id="b">
            Imposter Syndrome affects your sense of self worth, happiness,
            progress and affects <br /> most of the people at some point in
            their lifetime. It may be at academic leevel or work level.
            <br />
            Accepting your imposter syndrome will allow you to accept that you
            deserve <br /> your success and allow you to reach greater heights
            in you life.
            <br />
          </h2>
        </div>
        <div class="div4">
          <center>
            <iframe
              width="700"
              height="400"
              title="yt video"
              src="https://www.youtube.com/embed/ZQUxL4Jm1Lo"
              frameborder="50"
              allow="accelerometer; autoplay; clipboard-write;encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </center>
        </div>
        <br />
        {/* <span class="line_break">********************************</span> */}
        <div class="page_2">
          <div class="div2">
            <div class="container">
              <div class="row">
                <div class="col-sm">
                  <div class="blog_post">
                    <div class="container_copy">
                      <h1 class="blog_h1">Name</h1>
                      <br />
                      <h3 class="blog_h3">12 January 2019</h3>
                      <br />
                      <h2 class="blog_h2">CSS Positioning</h2>
                      <h4 class="blog_h4">
                        The position property specifies the type of positioning
                        method used for an element (static, relative, absolute,
                        fixed, or sticky).
                      </h4>
                    </div>
                  </div>
                </div>
                <div class="col-sm">
                  <div class="blog_post">
                    <div class="container_copy">
                      <h1 class="blog_h1">Name</h1>
                      <br />
                      <h3 class="blog_h3">12 January 2019</h3>
                      <br />
                      <h2 class="blog_h2">CSS Positioning</h2>
                      <h4 class="blog_h4">
                        The position property specifies the type of positioning
                        method used for an element (static, relative, absolute,
                        fixed, or sticky).
                      </h4>
                    </div>
                  </div>
                </div>
                <div class="col-sm">
                  <div class="blog_post">
                    <div class="container_copy">
                      <h1 class="blog_h1">Name</h1>
                      <br />
                      <h3 class="blog_h3">12 January 2019</h3>
                      <br />
                      <h2 class="blog_h2">CSS Positioning</h2>
                      <h4 class="blog_h4">
                        The position property specifies the type of positioning
                        method used for an element (static, relative, absolute,
                        fixed, or sticky).
                      </h4>
                    </div>
                  </div>
                </div>
                <br />
              </div>
              <br />
              <div>
                <a class="btn_primary" id="left" href="#blog">
                  Write a Blog
                </a>
                <a class="btn_primary" id="right " href="#readmore">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <body class="div3">
            <h1>FAQ's about Imposter Syndrome</h1>
            <main>
              <details>
                <summary>What is Impostor Syndrome?</summary>
                <div class="faq__content">
                  <p>
                    People suffering from impostor syndrome doubt their skills
                    and accomplishments, live in fear of being exposed as not
                    worthy of their position, and even downplay their success,
                    attributing it all to luck or good fortune.
                  </p>
                </div>
              </details>

              <details>
                <summary>What triggers imposter syndrome?</summary>
                <div class="faq__content">
                  <p>
                    There are lots of situations that can trigger these
                    feelings. Differing in some way from your peers – by race,
                    gender, sexual orientation, age, religion – can fuel a sense
                    of being a fraud. It's also exacerbated when being measured
                    or evaluated. Whatever the trigger, these feelings can lead
                    to damaging habits.
                  </p>
                </div>
              </details>

              <details>
                <summary>How long does imposter syndrome last?</summary>
                <div class="faq__content">
                  <p>
                    According to a 2020 review, 9%–82% of people experience
                    impostor syndrome. The numbers may vary depending on who
                    participates in a study. Many people experience symptoms for
                    a limited time, such as in the first few weeks of a new job.
                    For others, the experience can be lifelong.
                  </p>
                </div>
              </details>

              <details>
                <summary>Is impostor syndrome a mental illness?</summary>
                <div class="faq__content">
                  <p>
                    Imposter syndrome isn't a psychiatric diagnosis. This
                    phenomenon is experienced equally by men and women and
                    frequently coexists with depression and anxiety
                  </p>
                </div>
              </details>

              <details>
                <summary>Is impostor syndrome a mental illness?</summary>
                <div class="faq__content">
                  <p>
                    Imposter syndrome isn't a psychiatric diagnosis. This
                    phenomenon is experienced equally by men and women and
                    frequently coexists with depression and anxiety
                  </p>
                </div>
              </details>

              <details>
                <summary>Can you self diagnose imposter syndrome?</summary>
                <div class="faq__content">
                  <p>
                    Though the impostor phenomenon isn't an official diagnosis
                    listed in the DSM, psychologists and others acknowledge that
                    it is a very real and specific form of intellectual
                    self-doubt. Impostor feelings are generally accompanied by
                    anxiety and, often, depression.
                  </p>
                </div>
              </details>

              <details>
                <summary>
                  Can you be confident and have imposter syndrome?
                </summary>
                <div class="faq__content">
                  <p>
                    Everyone can experience a lack of confidence in their
                    abilities from time to time. But people who experience
                    impostor syndrome tend to be high achievers with diverse
                    educational backgrounds and a fair amount of professional
                    experience. Despite this, they may often experience feelings
                    of inadequacy and self-doubt.
                  </p>
                </div>
              </details>

              <details>
                <summary>Is imposter syndrome Linked to ADHD?</summary>
                <div class="faq__content">
                  <p>
                    Attention Deficit Hyperactivity Disorder (ADHD) and imposter
                    syndrome are a common pairing. You just want to stop beating
                    yourself up, to stop feeling like a failure no matter what
                    you achieve. You want to feel good enough on the inside
                  </p>
                </div>
              </details>
            </main>
          </body>
        </div>
      </div>
    </>
  );
};

export default Home;
