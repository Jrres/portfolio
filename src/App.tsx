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


interface ItemType {
  icon_calendar: JSX.Element;
  icon_complete: JSX.Element;
  icon_time: JSX.Element;
}
interface Val {
  description: string;
  icon_time: JSX.Element;
  icon_calendar: JSX.Element;
  completed: boolean;
  status: string; // assuming status is a string property
  tags: string[]; // assuming tags is an array of strings
  time: string; // assuming time is a string property
  icon_complete: JSX.Element; // assuming icon_complete is a JSX element
  Address: string; // assuming Address is a string property
  url: string; // assuming url is a string property
  image: string; // assuming image is a string property
  id: string; // assuming id is a string property
}


export default function App() {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    // Making a get request to say hello world
    const getData = async () => {
      try {
        //edit the github link to make changes
        const response = await axios.get('https://raw.githubusercontent.com/Jrres/portfolio_data/main/data.json');
        console.log(response)
        const newData = response.data.data.map((item: ItemType) => {
          item.icon_calendar = <CiCalendarDate />;
          item.icon_complete = <MdDomainVerification />;
          item.icon_time = <FaClock />;
          return item;
        });
        setData(newData as Val[]) // If you want to add to the existing array
        console.log(data)
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const styles: String[] = ['success', 'error', 'warning', 'dark'];


  const user: any = {
    name: "Jack Rollins",
    image: "https://media.licdn.com/dms/image/D4E03AQFhaKRtD5E8MA/profile-displayphoto-shrink_200_200/0/1663384481332?e=1710374400&v=beta&t=ccb0Kvnv8MCvYovsyYtx8vRO8zjE8ujSWVDuKuPnSyg",
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
  const timelineEvents : any = [
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
            data ? data.map((item : Val) => (
              <FadeIn>
                <Card key={item.id} border="secondary" className="mb-4" style={{ width: '17rem', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>

                  <Card.Img variant="top" src={item.image} style={{ height: '200px', width: '100%', objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
                  <Card.Body >
                    <div style={{ marginBottom: '10px' }}>
                      {item.tags.map((val) => (
                        <Badge key={val} bg='primary' style={{ marginRight: '5px' }}>{val}</Badge>
                      ))}
                    </div>
                    <Accordion text={item.description} title="Description"   />
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
                    <Card.Link  href={item.Address} style={{ color: '#000' }}>
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
            <Card.Img
              src={user.image}
              style={{
                width: '100px',
                height: '100px',
                objectFit: 'cover', // Preserve resolution scaling
                borderRadius: '50%', // Make the image rounded
                 border: '2px solid red', // Accentuated border
              }}
            />

            <Card.Text>
            Hello, I'm {user.name}, and im a full stack developer who's experienced in building web applications using React, Node.js, Express, MongoDB, MySQL, and more. I'm currently pursuing my Bachelors in CS at GSU, and i'm always looking to expand my knowledge and skills.

            </Card.Text>
              <IoShareSocialSharp />
              <div className="d-flex gap-4">
                {user.links.map((val: {name: string, url: string, icon: JSX.Element}) => (
                  <a key={val.name} href={val.url}>
                    {val.icon}
                    {val.name}
                  </a>
                ))}

              </div>

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
