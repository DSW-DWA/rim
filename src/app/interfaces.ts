import { number } from "echarts"

// create vacancy iterface
export interface Vacancy {
    "id": number,
    "name": string,
    "area": string,
    "salary": number,
    "experience": string,
    "description": string,
    "key_skills": [
    string
    ],
    "alternate_url": string
}
export interface PrewInfo {
    "average_salary": number,
    "average_exp": string,
    "average_skills_names": string,
    "average_skills_len": number
}
export interface BarChart {
    "len_skills": [number],
    "salary": [number]
}
export interface LineChart {
    "exp_names": [string],
    "avr_salary": [number]
}
export interface PieChart {
        "name": string,
        "value": number
}