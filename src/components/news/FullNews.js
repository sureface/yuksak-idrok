import React, {useState, useEffect} from 'react'
import Footer from '../footer'
import Navigation from '../navigation'
import axios from 'axios'
import { API_URL } from '../../utils/axios'
import { useParams } from 'react-router-dom'

const FullNews = () => {
    
    const {id} = useParams();
     
      const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    
    useEffect(() => {
        getFullNews();
    });
    useEffect(() => {
        if (data.length !== 0) {
            setIsLoading(false)
        }
    }, [data]);

    const getFullNews = async () => { 

        await axios.get(`${API_URL}/news/${id}`)
            .then(res => { 
                setData(res.data.news);  
            })
            .catch(err => {
                console.log(err);
            }) 
    }

  return (
      <div>
          
          <Navigation />
          <div className='container my-16 mx-auto'>
              {isLoading ? (
                  <div>Loading...</div>
              ) : (
                      
                      data.map(item => { 
                          return (
                            <div className="bg-white grid grid-cols-6 rounded-xl overflow-hidden" key={item.id}>
                                    <div className="w-full col-span-2"
                                        style={{
                                            background: ' #eee',  
                                            height: '100%',
                                        }}
                                    >
                                        <img className="w-full rounded-t-xl" src={item.img} alt=" " 
                                            
                                        />
                                    </div>
                                    <div className="p-5 col-span-4">
                                        <h2 className="sm:text-xl ss:text-lg font-semibold">{item.title}</h2>
                                        <p className="text-justify py-2">{item.subtitle }</p>
                                         
                                    </div>
                                </div>
                      )
                  })
                    
              )}
          </div>
          <Footer/>

      </div>
  )
}

export default FullNews