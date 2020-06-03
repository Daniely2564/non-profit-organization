import Layout from "./hoc/layout";
import { StyledHome } from "./styles/styled-home";
import Nav from "./components/nav";

const Home = () => {
  return (
    <Layout>
      <StyledHome>
        <div className="container intro background-fixed">
          <div className="logo">
            NPO24/7
            <img src="/img/logo.png" className="logo-img" />
          </div>
          <Nav />
        </div>
        <br />
        <div className="container small">
          <h1 className="text-center upper">Mission</h1>
          <div className="content">
            <p>
              Our objectives are to advance New Jersey youth, and develop human
              capital through “Academic, Art &amp; Athletic” platforms. We
              develop innovative and sustainable leaders as they prepare
              themselves into legislative, advocacy, corporate and nonprofit
              roles.
            </p>
            <br />
            <br />
          </div>
        </div>
        <div className="container main background-fixed">
          <div className="center">Methodology</div>
        </div>
        <div className="container small">
          <br />
          <h1 className="text-center upper">Methodology</h1>
          <div className="content">
            <p>
              Academic and practical continuum of “best practice” processes and
              policies that have been extensively evaluated and proven to be
              effective. Our expectations are astronomical for our organization,
              and with our strong sense of values and passion, we expect
              positive outcomes.
            </p>

            <br />
            <br />
            <div className="text-center">
              <button type="button" className="btn">
                Donate
              </button>
            </div>
          </div>
        </div>
        <div className="container main2 background-fixed">
          <div className="center">Team</div>
        </div>
        <div className="container small">
          <br />
          <h1 className="text-center upper">Team</h1>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              perspiciatis cupiditate minima rerum, iste earum cumque eveniet
              consectetur at perferendis quia dolores nulla maxime molestiae id,
              saepe debitis praesentium impedit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              perspiciatis cupiditate minima rerum, iste earum cumque eveniet
              consectetur at perferendis quia dolores nulla maxime molestiae id,
              saepe debitis praesentium impedit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              perspiciatis cupiditate minima rerum, iste earum cumque eveniet
              consectetur at perferendis quia dolores nulla maxime molestiae id,
              saepe debitis praesentium impedit.
            </p>
            <br />
            <br />
            <div className="text-center">
              <button type="button" className="btn">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
        <div className="container main3 background-fixed">
          <div className="center">Donate</div>
        </div>
        <div className="container small">
          <br />
          <h2 className="text-center upper">Content About Donation</h2>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              perspiciatis cupiditate minima rerum, iste earum cumque eveniet
              consectetur at perferendis quia dolores nulla maxime molestiae id,
              saepe debitis praesentium impedit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              perspiciatis cupiditate minima rerum, iste earum cumque eveniet
              consectetur at perferendis quia dolores nulla maxime molestiae id,
              saepe debitis praesentium impedit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              perspiciatis cupiditate minima rerum, iste earum cumque eveniet
              consectetur at perferendis quia dolores nulla maxime molestiae id,
              saepe debitis praesentium impedit.
            </p>
            <br />
            <br />
            <div className="text-center">
              <button type="button" className="btn">
                Donate
              </button>
            </div>
          </div>
        </div>
      </StyledHome>
    </Layout>
  );
};

export default Home;
