
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import { FaXTwitter,
   } from "react-icons/fa6";
import { SiGoogledocs } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { MdDomainVerification } from "react-icons/md";
import { FaVuejs,FaJira ,FaReact, FaAngular,FaNodeJs ,FaGithub,FaClock   } from "react-icons/fa";
import { CiLinkedin,CiCalendarDate } from "react-icons/ci";
import { GrDisabledOutline,GrStatusGood } from "react-icons/gr";
import { RiTwitterXFill } from "react-icons/ri";



ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const CustomXAxisLabel = ({ value }) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <FaCoffee style={{ marginRight: '5px' }} />
    {value}
  </div>
);

export const language_data = {
  labels: ['C++', 'Java', 'C#', 'JS Libs', 'python'],
  datasets: [
    {
      label: ' Familiarity (%)',
      data: [80, 60, 60, 90, 50],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
export const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    title: {
      display: true,
      text: 'Frameworks',
    },
  },

};

const labels = ['ReactJs', 'Vue3', 'NodeJs', 'ExpressJs','AWS' ,'Firebase','MongoDB', 'Git', 'Github','MySQL',  'Docker',  'Gitlab','Angular']



export const skill_data = {
  labels,
  datasets: [
    {
      label: 'Familiarity(%)',
      data: [
        '90', '90','80', '80','80', '70', '70', '70', '70', '70', '70', '50', '30'
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
    },
  ],
};


export default function App(prop) {
  return <div style={{ height: "300px", width: "500px" }}>

    {prop.isLanguage ? <Doughnut data={language_data} height='300' /> : null}
    {prop.isSkill ? <Bar options={options} data={skill_data} height='300' width='400' /> : null}
  </div>
}
