import { Link } from "react-router-dom";


const RoomCards = ({ room }) => {
    const { title, _id, RoomImages, PricePerNight
    } = room;
    console.log(room);
    return (
        <div>
            <div className="card w-96 bg-base-100 my-7 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={RoomImages} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-orange-400 text-xl">Price: $ {PricePerNight
                    }</p>
                    <div className="card-actions">
                        <Link to={`/rooms/details/${_id}`}>
                            <button className="btn btn-primary">DETAILS</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomCards;