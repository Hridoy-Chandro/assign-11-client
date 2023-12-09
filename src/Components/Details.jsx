import { useLoaderData } from "react-router-dom";
import Footer from "../Share/Footer";
// import Swal from "sweetalert2";


const Details = () => {
    const data = useLoaderData();
    console.log(data);


    // const book = { RoomDescription,
    //     PricePerNight,
    //     RoomSize,
    //     RoomImages,

    // };

    // console.log(book);


    // const handleBook = () => {
    //     fetch('https://assignment-11-server-omega-sepia.vercel.app/bookings', {
    //         method: 'POST',
    //         headers:{
    //             'content-type' : 'application/json'
    //         },
    //         body: JSON.stringify(book)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    // }

    // const handleBooking = () => {
    //     fetch("https://assignment-11-server-omega-sepia.vercel.app/booking", {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json",
    //         },
    //         body: JSON.stringify(book),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             if (data.acknowledged) {
    //                 Swal.fire({
    //                     icon: "success",
    //                     title: "success",
    //                     text: "Add Booking!",
    //                     footer: '<a href="">Why do I have this issue?</a>',
    //                 })(data);
    //             }
    //         });
    // };

    return (
        <div>
            <div className="card my-7 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={data.RoomImages} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{}</h2>
                    <h2 className="card-title">{}</h2>
                    <p className="text-orange-400 text-xl">Price: $ {data.PricePerNight
                    }</p>
                    <p>Available</p>

                    <div className="card-actions">

                        <button className="btn btn-secondary">BOOK THE ROOM</button>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Details;