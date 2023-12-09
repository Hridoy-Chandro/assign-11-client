import img1 from '../assets/Images/1.jpg';
import img2 from '../assets/Images/2.jpg';
import img3 from '../assets/Images/3.jpg';
import img4 from '../assets/Images/4.jpg';
import img5 from '../assets/Images/5.jpg';
import img6 from '../assets/Images/6.jpg';
import photo from '../assets/Images/Photo.jpeg';
import offer from '../assets/Images/Banner.jpg';

const Offer = () => {
    return (
        <div>
            <section className="text-center">
                <h1 className="font-semibold text-4xl py-5 text-fuchsia-400">SUPER OFFER</h1>
                <img src={offer} alt="" />
            </section>

            <section>

                <div>
                    <div className="text-center">
                        <h1 className="my-8 text-purple-500 font-semibold text-4xl">SPECIAL OFFER</h1>
                        <p className="mb-5">Embark on an exciting last-minute adventure by booking your spontaneous escape with us. <br /> Enjoy an incredible 20% discount on room rates, ideal for travelers seeking a thrilling journey on  short notice. Do not hesitate; this limited-time offer promises unforgettable excitement for your travel plans. Reserve your adventure now</p>
                    </div>
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 text-center justify-center items-center ">
                        <div>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={img1} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Double Room
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p>If a dog chews shoes whose does he choose?</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={img2} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Double Room
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p>If a dog chews shoes whose does he choose?</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={img3} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Double Room
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p>If a dog chews shoes whose does he choose?</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={img4} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Double Room
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p>If a dog chews shoes whose does he choose?</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={img5} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Double Room
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p>If a dog chews shoes whose does he choose?</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={img6} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Double Room
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p>If a dog chews shoes whose does he choose?</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>



            <section>

                <div className="text-center">
                    <h1 className="my-8 text-fuchsia-500 font-semibold text-4xl">USER TESTIMONIALS</h1>
                    <div className='flex gap-9 py-5 justify-center'>
                        <img className='justify-center w-20 ' src={photo} alt="" />
                        <img className='justify-center w-20 ' src={photo} alt="" />
                    </div>

                    <div className='py-10'>
                        <h3>⭐⭐⭐⭐⭐</h3>
                        <h1>David Johnson</h1>
                    </div>
                    <p className="mb-5">Embark on an exciting last-minute adventure by booking your spontaneous escape with us. <br /> Enjoy an incredible 20% discount on room rates, ideal for travelers seeking a thrilling journey on  short notice. Do not hesitate; this limited-time offer promises unforgettable excitement for your travel plans. Reserve your adventure now</p>
                </div>

            </section>




            <section>
                <div className='text-center py-10'>
                    <h1 className="my-8 text-purple-500 font-semibold text-4xl">NEWSLETTER SIGNUP
                    </h1>
                </div>

                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Subscribe to the newsletter
</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="name" placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                    
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">SUBSCRIBE</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>




        </div>
    );
};

export default Offer;