import { AiFillCar } from "react-icons/ai";
import { BiLocationPlus, BiTime } from "react-icons/bi";
// import mathura from '../../../images/mathura.jpg';
import mathura from "../../public/images/mathura.jpg"
const places = [
    {
        title: "Nainital",
        label: "Nainital Lake",
        content: "Lakeside Bliss, Alpine Beauty, and Enchanting Hill Station Retreat.",
        image: "https://images.unsplash.com/photo-1586019767508-1f60a2626ebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
    {
        title: "Kainchi Dham",
        label: "Temple",
        content: "Spiritual Haven Nestled Amidst Nature's Beauty.",
        image: "https://static.toiimg.com/photo/91622445/Kainchi-Dham.jpg?width=748&resize=4",
    },
    {
        title: "Delhi Sightseeing",
        label: "India",
        content: "Vibrant Culture, Historical Wonders, and Gastronomic Adventures Await.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
];

const serviceList = [
    {
        title: "Airport Pickup and Drop",
        subtitle: "Start and end your journey hassle-free with our reliable airport pickup and drop services. Our experienced drivers ensure punctuality and comfort, making your travel seamless.",
        features: [
            {
                icon: "BiTime",
                text: "24/ 7 Availability",
            },
            {
                icon: "BiLocationPlus",
                text: "To/From Delhi International Airport",
            },
            {
                icon: "AiFillCar",
                text: "Luxurious and Comfortable Vehicles",
            }
        ],
        img:"https://images.unsplash.com/photo-1542296332-2e4473faf563?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Delhi Sightseeing",
        subtitle: "Explore the rich history and vibrant culture of Delhi with our guided sightseeing tours. Visit iconic landmarks and hidden gems that define the heart of India.",
        features: [
            {
                icon: "BiTime",
                text: "Flexible Timings",
            },
            {
                icon: "BiLocationPlus",
                text: "Comprehensive Tour of Delhi's Attractions",
            },
            {
                icon: "AiFillCar",
                text: "Comfortable and Informative Journey",
            }
        ],
        img:"https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        title: "Mathura Vrindavan Tour",
        subtitle: "Immerse yourself in the spiritual aura of Mathura and Vrindavan. Explore the birthplace of Lord Krishna and experience the religious and cultural essence of these holy cities.",
        features: [
            {
                icon: "BiTime",
                text: "Half-day Tour",
            },
            {
                icon: "BiLocationPlus",
                text: "Visit to Sacred Sites",
            },
            {
                icon: "AiFillCar",
                text: "Spiritually Enriching Journey",
            }
        ],
        img:mathura
    },
    {
        title: "Uttarakhand Tour",
        subtitle: "Embark on a journey to the picturesque landscapes of Uttarakhand. From the serene hill stations to adventurous treks, experience the natural beauty and tranquility of the region.",
        features: [
            {
                icon: "BiTime",
                text: "Customizable Tours",
            },
            {
                icon: "BiLocationPlus",
                text: "Explore Various Destinations",
            },
            {
                icon: "AiFillCar",
                text: "Scenic and Adventurous Expedition",
            }
        ],
        img:"https://images.unsplash.com/photo-1601821139990-9fc929db79ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        title: "Agra Tour",
        subtitle: "Witness the magnificence of the Taj Mahal and other historical marvels in Agra. Our guided tour ensures you experience the grandeur of India's architectural heritage.",
        features: [
            {
                icon: "BiTime",
                text: "Full-day Tour",
            },
            {
                icon: "BiLocationPlus",
                text: "Visit to the Taj Mahal and More",
            },
            {
                icon: "AiFillCar",
                text: "Comfortable Travel with Expert Guides",
            }
        ],
        img:"https://images.unsplash.com/photo-1506462945848-ac8ea6f609cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
    },

]


export { places,serviceList };
