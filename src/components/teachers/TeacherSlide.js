import React, { useState, useEffect} from 'react'  
import "../../styles/teacherSlide.scss";
import axios from 'axios';
import { API_URL } from '../../utils/axios';

const TeacherSlide = () => {

    const [teachers, setTeachers] = useState([]); 
    const [loadMore, setLoadMore] = useState(3);

    const load = () => {
        setLoadMore(loadMore + 5);
    }

    useEffect(() => {
       getTeachers();
    }, []);
 

    const getTeachers = async () => { 

        await axios.get(`${API_URL}/teachers`)
            .then(res => { 
                setTeachers(res.data.teachers);
            })
            .catch(err => {
                console.log(err);
            })

    }

     
    return (
        <>
        <div className="course-slides grid grid-cols-3 gap-6" >
            {
                teachers.length ?
                teachers.slice(0, loadMore).map((teacher) => {
                        return (
                            <div key={teacher.id} className="bg rounded-xl overflow-hidden shadow-lg">
                                <div className="teacher-slide__img"
                                    style={{
                                        backgroundImage: `url(${teacher.img})`,
                                        backgroundColor:"#fff",
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                        height: '200px'
                                    }}    
                                > 
                                     
                                </div>
                                <div className="p-4">
                                    <h1 className="text-white text-xl tracking-wider font-medium capitalize">{teacher.first_name} { teacher.last_name}</h1> 
                                    <p className='text-white'>{ teacher.description.substring(0,100)}...</p>
                                </div>
                            </div>
                        )
                }) : <h1>Iltimos kuting</h1>
                        
            }
        </div>
        <div className="flex items-center justify-center py-10">
                    {
                        loadMore < teachers.length && (
                            <button className="bg-blue-500 py-3 px-5 text-white rounded-xl font-semibold text-xl capitalize" onClick={load}>ko'proq ko'rish</button>
                        )
                    }
         </div>
        </>
    )
}

export default TeacherSlide
