import * as React from "react";

import Navbar from "../components/Navbar";
import "../css/Home.css";

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

          <h2 id="a">Then you may be suffering from Imposter Syndrome </h2>
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

        <hr />
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
    </>
  );
};

export default Home;
