import data from '../../artigos.json'

function News() {
    return (
        <>
            <div className='bg-black text-white'>
                <h1>NEWS</h1>

                <div className="grid grid-cols-3 gap-4 mt-1">
                    {data.map((filme, index) => (
                        <div className='card mx-5 gap-3' key={index}>
                            <h1 className='text-xl font-medium mb-4 text-white'>{filme.title}</h1>
                            <img src={filme.image} alt={filme.title} className='w-80' />
                            <p>{filme.text}</p>


                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}
export default News;