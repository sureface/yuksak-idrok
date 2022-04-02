import axios from "axios";
import {API_URL} from "../../utils/axios";
import {toast} from "react-toastify";


export const getGroupsCourse = async (id) => {
    let data, error;

    try {
        const res = await axios.get(`${API_URL}/courses/${id}/groups`);
        if (res.data.groups[0] === undefined){
            data = {name: "bu kursda guruh hali yo'q"}
        }else{
            data = res.data.groups[0];

            const getTeach = await axios.get(`${API_URL}/teachers/${data.teacher_id}`);
            data.teacherName = getTeach.data.teacher[0].first_name + " " + getTeach.data.teacher[0].last_name
            const courseName = await axios.get(`${API_URL}/courses/${data.course_id}`);
            data.courseName = courseName.data.course[0].title
        }

    } catch (e) {
        toast.error("xatolik yus berdi")
        console.error(e);
        error = e
    }

    return {data, error}
}

export const getIndividualsCourses = async (id) => {
    let data, error;
    console.log(id)

    try {
        const res = await axios.get(`${API_URL}/courses/${id}/individuals`);
        if (res.data.individuals[0] === undefined){
            data = {name: "bu kursda individual guruh yo'q"}
        }else{
            data = res.data.individuals[0];

            console.log(data, "individuals")

            const getTeach = await axios.get(`${API_URL}/teachers/${data.teacher_id}`);
            data.teacherName = getTeach.data.teacher[0].first_name + " " + getTeach.data.teacher[0].last_name
        }

    } catch (e) {
        toast.error("xatolik yus berdi");
        console.error(e);
        error = e
    }

    return {data, error}
}