import DEMO_ICON from "./Assets/Amazon_icon.png";
import { v4 as uuidv4 } from "uuid";

// Generating random jobs data
export const positionOptions = [
  "Software Developer",
  "Business Analyst",
  "Data Analyst",
  "Data Scientist",
  "Frontend Developer",
  "Backend Developer",
  "Sales Executive",
  "Business Executive",
];
export const experienceOptions = [0, 1, 2, 3, 4];
export const typeOptions = ["Part Time", "Full Time", "Internship", "Remote"];
export const categorieOptions = ["Engineering", "Business"];
export const locationOptions = [
  "Hyderabad, Telangana",
  "Bengaluru, Karnataka",
  "Ahmedabad, Gujarat",
  "New Delhi, Delhi",
  "Chandigarh, Punjab",
  "Pune, Maharashtra",
  "Noida, Uttar Pradesh",
  "Gurugram, Haryana",
];

export const companyOptions = [
  "Google",
  "Apple",
  "Tesla",
  "OLA",
  "Netflix",
  "Microsoft",
  "Bosch",
  "TCS",
  "Infosys",
];
const salaries = [20, 12, 11, 43, 67, 23, 7, 5, 56, 92];

export const generateJobs = () => {
  const jobs = [];

  const getRandom = (entity) => {
    return entity[Math.floor(Math.random() * entity.length)];
  };

  for (let i = 0; i < 50; i++) {
    const job = {
      id: uuidv4(),
      Position: getRandom(positionOptions),
      Experience: getRandom(experienceOptions),
      Type: getRandom(typeOptions),
      Category: getRandom(categorieOptions),
      Location: getRandom(locationOptions),
      Company: getRandom(companyOptions),
      Salary: getRandom(salaries),
      Logo: DEMO_ICON,
    };
    jobs.push(job);
  }

  return jobs;
};
