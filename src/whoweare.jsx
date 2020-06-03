import Layout from "./hoc/layout";
import { StyledWhoWeAre } from "./styles/styled-whoweare";
import Nav from "./components/nav";

const WhoWeAre = () => {
  return (
    <Layout>
      <StyledWhoWeAre>
        <div className="container intro background-fixed">
          <div className="logo">
            NPO24/7
            <img src="/img/logo.png" className="logo-img" />
          </div>
          <Nav />
        </div>
        <br />
        <div className="container small">
          <h1 className="text-center upper" id="history">
            History
          </h1>
          <div className="content">
            <p>
              24/7 is a Nonprofit Organization founded in 2014 and received
              501(C) (3) status in 2016. We recognize living in urban cities,
              youth lack access to programs more affluent neighborhoods. Because
              of the structural persistence of affluence and poverty of
              neighborhoods as a vehicle for perpetuating social inequality,
              reduced educational opportunities and economic segregation,
              platforms were created to advance “prepared” minds to promote U.S.
              higher education through “academics, arts & athletics.”
              Previously, we created a similar mode: a vocational education
              dedicated for agricultural migrant workers to be trained and
              transitioned into the construction trades, which resulted in their
              acceptance into the IBEW Union Apprenticeship program after the
              proper completion. Additionally, through volleyball athletics, 5
              Hispanic young women were academically prepared, and consequently
              received scholarships to Georgian Court University; several
              completed their master’s degrees. We have a remarkable experience
              with State of New Jersey grants, but we typically use corporate
              and private funds for public use.
            </p>
            <br />
            <br />
          </div>
        </div>
        <div className="container main background-fixed" id="goal">
          <div className="center">Goals</div>
        </div>
        <div className="container small">
          <br />
          <h1 className="text-center upper">Goals</h1>
          <div className="content">
            <p>
              The goal of 24/7 NPO is to foster continuous growth in our
              students by providing an environment in which it is safe to
              experiment, take risks and make mistakes without sacrificing
              academic rigor. This growth is nurtured by the following main
              points:
            </p>
            <br />
            <ul className="goal-list">
              <li>Staff modeling of desirable behaviors</li>
              <li>
                Providing a balance of classroom learning and supervised field
                experience
              </li>
              <li>
                Providing opportunities for on-going independent and supported
                reflection on practice
              </li>
              <li>
                Encouraging novice leaders to develop attitudes and behaviors
                that will support their professional growth.
              </li>
            </ul>
            <br />
            <p>
              Commitment is a value highly prized, serving as an essential
              cornerstone for our teaching and learning. Commitment is a set of
              connected attitudes, values, and beliefs that result in
              professional behaviors expected of dedicated leaders. We emphasize
              both content and pedagogical knowledge as we prepare our students.
              We design classroom and field experiences to help students learn
              the right knowledge and professional behaviors in order to apply
              it in practice and become dedicated leaders. Students are expected
              to use their technological expertise as a tool in learning and to
              reference relevant standards when either planning for or
              reflecting on their own classroom work. We believe that
              reflection, grounded in active experience, has value for
              developing leadership.
            </p>
            <br />
            <br />
          </div>
        </div>
        <div className="container main2 background-fixed" id="team">
          <div className="center">Team</div>
        </div>
        <div className="container small">
          <br />
          <h1 className="text-center upper">Team</h1>
          <div className="content">
            <p>
              Wally Miranda: Executive Director / with oversight by the board of
              directors.
            </p>
            <p>Kevin Wortham: Recruitment / Marketing / Student Relations </p>
            <p>John Park: Logistics / Housing / Transportation / Meals </p>
            <p>
              George Darouni: Director of International Programs – Middle East
            </p>
            <p>Marceli Araujo: Arts / Recreation</p>
            <p>Four Instructors/ Counselors – Leadership / ACT-SAT</p>
            <p>Four mentors – Volunteers</p>
          </div>
        </div>
      </StyledWhoWeAre>
    </Layout>
  );
};

export default WhoWeAre;
