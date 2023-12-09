import banner from '../../assets/Images/banner.jpeg'

const Banner = () => {
    return (
        <div className=''>
            <div className='relative'>

                <img className='w-full h-96' src={banner} alt="" />

                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-4xl font-bold'>Affordable Price For Hotel Room </h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;