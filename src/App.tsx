import './App.css'
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Accordion from './Accordion';
import Chart from './chart';
import ListGroup from 'react-bootstrap/ListGroup';
import TimeLine from './timeline'
import FadeIn from './FadeInComponent'
import {
  FaXTwitter,
} from "react-icons/fa6";
import { SiGoogledocs } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { MdDomainVerification } from "react-icons/md";
import { FaVuejs, FaJira, FaReact, FaAngular, FaNodeJs, FaGithub, FaClock } from "react-icons/fa";
import { CiLinkedin, CiCalendarDate } from "react-icons/ci";
import { GrDisabledOutline, GrStatusGood } from "react-icons/gr";
import { RiTwitterXFill } from "react-icons/ri";
import { FaSchool } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";
import { LuBookOpenCheck } from "react-icons/lu";
import { FaComputer } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import { IoShareSocialSharp } from "react-icons/io5";
import { PiBabyBold } from "react-icons/pi";
import { GiSchoolBag } from "react-icons/gi";
import { PiNumberCircleFourThin } from "react-icons/pi";
import { RiRobot2Fill } from "react-icons/ri";
import { FaNetworkWired } from "react-icons/fa";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { FaNpm } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { FaUnity } from "react-icons/fa";
import { SiHackster } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaSlack } from "react-icons/fa6";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Making a get request to say hello world
    const getData = async () => {
      try {
        //edit the github link to make changes
        const response = await axios.get('https://raw.githubusercontent.com/Jrres/portfolio_data/main/data.json');
        console.log(response)
        const newData = response.data.data.map((item) => {
          item.icon_calendar = <CiCalendarDate />;
          item.icon_complete = <MdDomainVerification />;
          item.icon_time = <FaClock />;
          return item;
        });
        setData(newData) // If you want to add to the existing array
        console.log(data)
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const styles: String[] = ['success', 'error', 'warning', 'dark'];


  const user: Object = {
    name: "Jack Rollins",
    image: "data:image/png;base64,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",
    College: "Georgia State University",
    college_icon: <FaSchool />,
    Graduation: "2024",
    graduation_icon: <FaUserGraduate />,
    degree_icon: <IoSchool />,
    Major: "Computer Science",
    major_icon: <FaComputer />,
    gpa_icon: <LuBookOpenCheck />,
    GPA: "3.9",
    links: [
      {
        name: 'Github',
        url: 'https://github.com/Jrres',
        icon: <FaGithub />
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/jack-rollins-8b73b3213/',
        icon: <CiLinkedin />
      },
      {
        name: 'Resume',
        url: 'https://github.com/Jrres/portfolio_data/blob/main/UpdatedResume%20(1).pdf',
        icon: <SiGoogledocs />
      }
    ]
  };
  const timelineEvents = [
    {
      title: 'Embarking on the Coding Journey',
      date: 'January 1, 2016',
      description: 'Initiated my coding journey by learning JavaScript, HTML, and CSS. Developed my first horrible website, sparking a passion for computing.',
      link: 'https://jrres.github.io/CookieDoughBytes/Tiles.html',
      isEnd: false,
      icons: [<PiBabyBold />],
    },
    {
      title: 'Introduction to Computer Science',
      date: 'August 2019',
      description: 'Enrolled in AP Computer Science course and achieved a score of 4. It was my introduction to programming in Java',
      isEnd: false,
      icons: [<GiSchoolBag />, <PiNumberCircleFourThin />],
    },
    {
      title: 'Venturing into Robotics',
      date: 'August 2020',
      description: 'Explored the world of robotics by creating robots with integrated circuits using Arduino and Raspberry Pis. I developed a touch light with a sensor and rgb input and also used a networking library to check for signals from end to end',
      isEnd: false,
      icons: [<RiRobot2Fill />, <FaNetworkWired />],
    },
    {
      title: 'Diving into React and Entrepreneurship',
      date: 'May 2020',
      description: 'Started APLUS Pressure Washing, delving into React JS and Square payment processing while creating a website to advertise the business. I made a realization that I needed to learn nodeJs to be able to accept payments and make money online',
      link: 'https://github.com/Jrres/Website',
      isEnd: false,
      icons: [<FaReact />, <MdOutlineBusinessCenter />],
    },
    {
      title: 'College Experience at GSU',
      date: 'August 2020 - 2024',
      description: 'Admitted to Georgia State University, where I studied Object-Oriented Programming, Data Structures and Algorithms, Inheritance, Recursion, Operating Systems, Parallel Computing, Systems-Level Programming, Networking, and Database Technologies. Also served as an event organizer at the Programming Club.',
      isEnd: false,
      icons: [<IoSchool />],
    },
    {
      title: 'Discovering Node.js and NPM',
      date: 'January 2021',
      description: 'Explored CRUD operations, Node.js, Express, and DevOps practices.',
      isEnd: false,
      icons: [<FaNodeJs />, <FaNpm />],
    },
    {
      title: 'Venturing into Game Development',
      date: 'January 2021',
      description: 'Developed several small browser games using static files and a 2D tile editor.',
      isEnd: false,
      icons: [<FaGamepad />],
    },
    {
      title: 'Code Path Boot Camp',
      date: 'August 2022',
      description: 'Participated in a software development boot camp, enhancing skills in OOP, DevOps, and cloud computing utilizing codepath portal. Received the certificate of completion.',
      isEnd: false,
      icons: [<FaSlack />],
    },
    {
      title: 'Exploring Full Stack Development with AGILE',
      date: 'Jan 2023',
      description: 'Worked with a team of 4 to develop a Recipe search, and health recommender web application. I learned how to communicate, devlop, and version control code using Git and GitHub. I also use AWS Amplify to implement the project',
      isEnd: false,
      icons: [<FaReact />, <FaNodeJs />, <IoLogoFirebase />, <SiExpress />],
    },
    {
      title: 'Hackathon Success',
      date: 'October 2023',
      description: 'Contributed to a dashcam app for HackGT, receiving an honorary award for the travel-themed hackathon.',
      isEnd: false,
      icons: [<SiHackster />],

    },
    {
      title: 'Unity Game Development',
      date: 'December 2023',
      description: 'Began developing a 3D RPG in Unity, gaining insights into AI, navmeshes, colliders, projectiles, and decals.',
      isEnd: false,
      icons: [<FaGamepad />, <FaUnity />],
    },
    {
      title: 'Lolmetrics',
      date: 'December 2023',
      description: 'My most Recent project. A web app for league of legends players to create polls and quizzes about the game. The app is currently in development and is being hosted on Heroku',
      isEnd: true,
      icons: [<MdQuiz />],
    }

    // Add more timeline events as needed
  ];
  return (
    <div className="gradient-pp position-relative" style={{ height: "3000px", fontFamily: 'Overlock' }}>
      <div className="container bg-white p-5"  >

        <div className="mb-5">
          <h1 className="display-2 text-center">
            My Portfolio
          </h1>
        </div>

        <div className="mb-4">
          <h2>Projects</h2>
          {data ?
            <p>Currently showing:{data.length}</p> : <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>}
        </div>

        <div className="d-flex flex-wrap justify-content-start gap-4">
          {
            data ? data.map((item) => (
              <FadeIn>
                <Card key={item.id} border="secondary" className="mb-4" style={{ width: '17rem', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>

                  <Card.Img variant="top" src={item.image} style={{ height: '200px', width: '100%', objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
                  <Card.Body>
                    <div style={{ marginBottom: '10px' }}>
                      {item.tags.map((val) => (
                        <Badge key={val} bg='primary' style={{ marginRight: '5px' }}>{val}</Badge>
                      ))}
                    </div>
                    <Accordion text={item.description} title="Description" style={{ maxHeight: '50px', overflow: 'hidden' }} />
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                      {item.icon_time}
                      <div style={{ marginLeft: '5px' }}>Development Time: {item.time}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {item.icon_calendar}
                      <div style={{ marginLeft: '5px', color: item.completed ? '#4CAF50' : '#FFC107' }}>Status: {item.status}</div>
                      {item.completed ? item.icon_complete : null}
                    </div>
                  </Card.Body>
                  <Card.Footer style={{ borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px' }}>
                    <Card.Link variant="primary" href={item.Address} style={{ color: '#000' }}>
                      < CiLink />
                      {item.url}
                    </Card.Link>
                  </Card.Footer>
                </Card>
              </FadeIn>
            )) : <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>

          }
        </div>
        <div className="mt-5 mb-4">
          <h2>Skills</h2>
        </div>
        <FadeIn>
          <div className="row mb-5 flex-column flex-md-row flex-sm-row">
            <div className="col-md-6">
              <Card>
                <Card.Body className="d-flex flex-wrap justify-content-between align-items-center">
                  <div className="chart-container mb-4">
                    <Card.Subtitle>Languages</Card.Subtitle>
                    <Chart isLanguage={true} isSkill={false} />
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-6">
              {/* Chart area for Skills */}
              <Card>
                <Card.Body className="d-flex flex-wrap justify-content-between align-items-center">
                  <div className="chart-container">
                    <Card.Subtitle>Skills</Card.Subtitle>
                    <Chart isLanguage={false} isSkill={true} />
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </FadeIn>

        <div className="mb-4" >
          <h2>About Me</h2>
        </div>
        <Card className="m-4 p-4" style={{ zIndex: 2 }}>
          <div className="m-4">
            <Card.Img src={user.image} style={{ width: '40px', height: '40px' }}>
            </Card.Img>

            Hello, I'm {user.name}, and im a full stack developer who's experienced in building web applications using React, Node.js, Express, MongoDB, MySQL, and more. I'm currently pursuing my Bachelors in CS at GSU, and i'm always looking to expand my knowledge and skills.
            <Card.Text>
              <IoShareSocialSharp />
              <div class="d-flex gap-4">
                {user.links.map((val) => (
                  <a key={val.name} href={val.url}>
                    {val.icon}
                    {val.name}
                  </a>
                ))}
              </div>

            </Card.Text>

            <ListGroup className="list-group-flush" >
              <ListGroup.Item className="d-flex align-items-center">
                <div className="mx-2">{user.college_icon}</div>
                <div className="mx-2">University:</div>
                <div className="mx-2">{user.College}</div>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center">
                <div className="mx-2">{user.major_icon}</div>
                <div className="mx-2">Major: {user.Major}</div>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center">
                <div className="mx-2">{user.gpa_icon}</div>
                <div className="mx-2">GPA: {user.GPA}</div>
              </ListGroup.Item>
            </ListGroup>

            <Card.Body>
              <Card.Subtitle>My CS Time Line</Card.Subtitle>
              <ProgressBar striped variant="primary" animated now={80} className="m-2" label='80% done, I just need the job' />
              <TimeLine events={timelineEvents} />

            </Card.Body>
          </div>

        </Card>
      </div>

      <div className="position-absolute w-100 bottom-0 " style={{ zIndex: 1 }}>
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 40" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="moving-waves">
            <use xlinkHref="#gentle-wave" x="48" y="-1" fill="rgba(255,255,255,0.40)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.35)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.25)" />
            <use xlinkHref="#gentle-wave" x="48" y="8" fill="rgba(255,255,255,0.20)" />
            <use xlinkHref="#gentle-wave" x="48" y="13" fill="rgba(255,255,255,0.15)" />
            <use xlinkHref="#gentle-wave" x="48" y="16" fill="rgba(255,255,255,1)" />
          </g>
        </svg>
      </div>
    </div>

  );

}
