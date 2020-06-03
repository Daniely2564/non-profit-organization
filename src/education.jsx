import Layout from "./hoc/layout";
import { StyledEducation } from "./styles/styled-education";
import Nav from "./components/nav";
import Table from "./components/table";

const Education = () => {
  return (
    <Layout>
      <StyledEducation>
        <div className="container intro background-fixed">
          <div className="logo">
            NPO24/7
            <img src="/img/logo.png" className="logo-img" />
          </div>
          <Nav />
        </div>
        <br />
        <div className="container small">
          <h1 className="text-center upper" id="initiative">
            Initiatives
          </h1>
          <div className="content">
            <p>
              We will launch several initiatives for 2021 that prepare youth to
              become “strategic thinkers” and “prolific leaders.” These skill
              sets will strive to eliminate conditions that foster violence,
              delinquency, drugs, and gangs, positively impacting communities.
            </p>
            <br />
            <p className="bold">
              Leadership Initiative for Future Executives (LIFE)
            </p>
            <ol className="pr-5 initiative-list">
              <li>City-owned property - acquisition</li>
              <ul className="pr-5">
                <li>Community Redevelopment</li>
                <li>Single Family First Time Homeownership</li>
              </ul>
              <li>City-owned vacant lots</li>
              <ul className="pr-5">
                <li>New Community Developments</li>
                <li>Sustainable Villages</li>
                <li> Veteran’s Apartments</li>
                <li>Nursing Homes</li>
                <li>Indoor Soccer / Volleyball Facility</li>
              </ul>
              <li>G2Elite Learning Center</li>
              <ul className="pr-5">
                <li>
                  ACT, PSAT, SAT, USMLE, NBME, NCLEX 226 New Brunswick Avenue /
                  Newark
                </li>
                <li>Daycare Center 226 Smith Street- Perth Amboy / Newark</li>
              </ul>
              <li>Performance Arts and Dance</li>
              <ul className="pr-5">
                <li>Center for the Arts (New Brunswick)</li>
              </ul>
              <li>International Youth World Cup Soccer Tournaments</li>
              <ul className="pr-5">
                <li>
                  Soccer Summer Camps with coaches and trainers from Brazil and
                  Mexico
                </li>
              </ul>
            </ol>
            <br />
            <br />
          </div>
        </div>
        <div className="container main background-fixed" id="program">
          <div className="center">Program</div>
        </div>
        <div className="container small">
          <br />
          <h1 className="text-center upper">Program</h1>
          <div className="content">
            <p className="bold underline">LIFE Initiative (Solutions)</p>
            <ul className="program-list">
              <li>
                {" "}
                To dissect 21st century challenges, and deliver high impact
                strategies, innovative thinking and visionary leadership
              </li>
              <li>
                {" "}
                To deliver a fusion of academics and practical experiences, that
                supports self-efficacy and professional development strategies,
                through an integrated multi-disciplinary curriculum
              </li>
              <li>
                {" "}
                To develop and support emergent leaders, by developing their
                Critical Thinking and Deductive Reasoning Skills; reinforce
                Math, Reading, Science and English
              </li>
              <li>
                {" "}
                To increase higher test scores, better grades, reduce
                high-school drop-out rate, increase college enrollment and
                graduation
              </li>
              <li>
                {" "}
                To create a global Executive Leadership candidate pool and
                roundtable
              </li>
              <li>
                {" "}
                An after-school and summer initiative, focusing on High School
                students, grades 9th -12th
              </li>
              <li>
                {" "}
                Students develop core leadership skills by facilitation,
                mentoring, coaching and practicum
              </li>
              <li>
                {" "}
                Empowers youth to create and manage a 501(c)(3) Community Based
                Housing Development Organization (CBHDO), develop collaboration
                with municipalities throughout urban areas, and through these
                interactive sessions, take greater responsibility for their
                lives and communities{" "}
              </li>
            </ul>
            <br />
            <p>
              We are currently accepting essays with references for students to
              participate in our Leadership Initiative for Future Executives
              (LIFE), after-school program, proposed to start spring 2021. High
              School students selected will be trained to become members for an
              ad hoc community-based housing development organization (CBHDO).
              They will garner and implement the roles and responsibilities of
              governing a CBHDO, including research and grant writing. Projects
              consist of overseeing the revitalizations of neighborhoods and
              communities, with the vision to one day manage corporations,
              nonprofit organizations and/or become entrepreneurs. Upon
              “successful” completion of the “Teambuilding Camp,” participants
              will receive a laptop computer, business attire, business cards,
              etc. After each “successful” project seminar, they earn a stipend,
              placed in a college savings account. All essays and references
              will be submitted to a panel of business / Community leaders
              designated to select 15 candidates. Nominees chosen to move
              forward in the interview process will be contacted. All
              participants must request and provide a reference from someone who
              can give an assessment of their suitability. For additional
              information text: 609-456-3260.
            </p>
            <br />
            <br />
            <Table>
              <div className="header">Leads</div>
              <div className="row">
                <div className="title">Leads Others</div>
                <div className="content">
                  <ul>
                    <li>Provide purpose, motivation, inspiration</li>
                    <li>Enforce Standards</li>
                    <li>Balance mission and welfare of soldiers</li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="title">
                  Extends Influence Beyond the Chain of Command
                </div>
                <div className="content">
                  <ul>
                    <li> Build trust outside lines of authority</li>
                    <li> Understand sphere, means and limits of influence</li>
                    <li> Negotiate, build consensus, resolve conflict</li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="title">Leads By Example</div>
                <div className="content">
                  <ul>
                    <li> Display character</li>
                    <li> Lead with confidence in adverse conditions</li>
                    <li> Demonstrate confidence</li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="title">Communicates</div>
                <div className="content">
                  <ul>
                    <li> Listen actively</li>
                    <li> state goals for action</li>
                    <li> Ensure shared understanding</li>
                  </ul>
                </div>
              </div>
            </Table>
            <br />
            <Table>
              <div className="header">Develops</div>
              <div className="row">
                <div className="title">Creates a positive environment</div>
                <div className="content">
                  <ul>
                    <li> Set the conditions for positive climate</li>
                    <li> Build teamwork and cohesion</li>
                    <li> Encourage initiative</li>
                    <li> Demonstrate care for people</li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="title">Prepares self</div>
                <div className="content">
                  <ul>
                    <li> Be prepared for expected and unexpected challenges</li>
                    <li> Expand knowledge</li>
                    <li> Maintain self-awareness</li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="title">Develops leaders</div>
                <div className="content">
                  <ul>
                    <li> Assess developmental needs. Develop on the job</li>
                    <li> Support professional and personal growth.</li>
                    <li> Help people learn</li>
                    <li> Counsel, coach and mentor</li>
                    <li> Build team skills and processes</li>
                  </ul>
                </div>
              </div>
            </Table>
            <br />
            <Table>
              <div className="header">Achieves</div>
              <div className="row">
                <div className="title">Get Results</div>
                <div className="content">
                  <ul>
                    <li> Provide direction, guidance and priorities</li>
                    <li> Develop and execute plans</li>
                    <li> Accomplish tasks consistently</li>
                  </ul>
                </div>
              </div>
            </Table>
          </div>
        </div>
        <div className="container main2 background-fixed" id="evaluation">
          <div className="center">Evaluation</div>
        </div>
        <div className="container small">
          <br />
          <h1 className="text-center upper">Continuous Evaluation</h1>
          <div className="content">
            <p>
              In order to assure the success of this program, the following
              documents will be collected and monitored on a regular basis:
              periodic surveys, parent surveys, mentor interviews, observations,
              written evaluations, pre-tests, tests and post-tests, photo and
              video documentation. Increased SAT and ACT test results will be
              also indicative of the program effectiveness.
            </p>
            <p>
              Meeting and completing the programs high expectations are
              indicators of positive outcomes. Students wanting to continue to
              the next level indicate student satisfaction.
            </p>
            <br />
            <br />
          </div>
        </div>
        <div className="container main3 background-fixed" id="awareness">
          <div className="center">Awareness</div>
        </div>
        <div className="container small">
          <br />
          <h2 className="text-center upper">Awareness</h2>
          <div className="content">
            <p>
              The program will be outreached through presentations in schools
              and leveraging print ads. Moreover, it will be registered with
              local and national organizations, such as United Way. Marketing
              materials, posters and fliers will be sent to targeted schools.
              Announcements will also be submitted to local media for community
              bulletin boards and schedule presentations with partner
              organizations and community groups. Postcards and fliers will be
              sent to targeted population in order to spread awareness about the
              program.
            </p>
            <p>
              On the other hand, newsletters and an annual report will be sent
              to stakeholders to reveal the success of this program. Evaluation
              results will be included such as the number of student
              participants, increases in core courses level, survey results
              (from students, parents and teachers) and goals for the following
              program.
            </p>
            <br />
            <br />
          </div>
        </div>
        <div className="container main3 background-fixed" id="partners">
          <div className="center">Partners</div>
        </div>
        <div className="container small">
          <br />
          <h2 className="text-center upper">Partners</h2>
          <div className="content">
            <ul className="partners-list">
              <li>
                Minding Our Business – Kevin Wortham – Entrepreneurship Program.
              </li>
              <li>
                Barrio to the Boardroom- Robert Renteria – Motivational and
                Public Speaking.
              </li>
              <li>
                Vergus Group – Dennis Tavera – Investments for sustainable
                construction projects Finances construction development projects
                and proceeds fund LIFE.
              </li>
              <li>
                Honors Review Learning Center – John Park – Education
                Curriculum, Reading, spelling, literature, and composition, that
                aim at developing comprehension and capacity for use of written
                and oral language.
              </li>
              <li>
                Academic component, housing, classroom, food and transportation.
              </li>
              <li>
                Arts by Marceli – Marceli Miranda – Language Arts. Reading,
                spelling, literature, and composition, that aim at developing
                comprehension and capacity for use of written and oral language.
              </li>
              <li>
                Health – Yarissa Duarte, Dr. – Health & Wellness – provides
                peer-to-peer group sessions such as LBGTQ youth and allies and
                sessions for young women.
              </li>
            </ul>
            <br />
            <br />
          </div>
        </div>
      </StyledEducation>
    </Layout>
  );
};

export default Education;
