import React from 'react';
import { useState, useEffect } from "react"
import data from '../../artigos.json';

function Home() {

    const [filmes, setFilmes] = useState([])
    const apiKey = 'api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const urlImg = 'https://image.tmdb.org/t/p/w342/'

    useEffect(() => {
        fetch(`${urlBase}upcoming?${apiKey}`)
            .then(response => response.json())
            .then(response => setFilmes(response.results))
            .catch(erro => console.log(erro))
    }, [])

    return (
        <>

            <main className="bg-black">


                <div className='flex flex-col items-center'>

                    <h1 className='text-white'>Lançamentos</h1>

                    <div className='w-full flex flex-row justify-around'>
                        {
                            filmes.slice(0, 3).map(filme => (
                                <div className="card-filme" key={filme.id}>
                                    <img src={`${urlImg}${filme.poster_path}`} />
                                    <h1>{filme.title}</h1>
                                </div>
                            ))
                        }
                    </div>

                </div>



            </main>
        </>
    );
}

export default Home;
