import RoomCards from "../../Components/RoomCards";
import Footer from "../../Share/Footer";
import { useLoaderData } from "react-router-dom";


const Rooms = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
                {
                    data?.map((room) => (<RoomCards key={room._id} room={room}></RoomCards>))
                }
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Rooms;