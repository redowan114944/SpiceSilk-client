import SectionTitle from "../SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";
import './Featured.css'; // If you have additional custom styles

const Featured = () => {
    return (
        <div className="featured-item text-white pt-8 my-20 shadow-lg"> {/* Added shadow-lg class */}
            <SectionTitle subHeading="Check it out" heading="Featured Item"></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p className="text-white">July 20, 2024</p> {/* Set text color to white */}
                    <p className="uppercase text-white">Where can I get some?</p> {/* Set text color to white */}
                    <p className="text-white">Welcome to Spice Silk, where culinary artistry meets a warm, inviting atmosphere to create unforgettable dining experiences. Located in the heart of Anowara, our restaurant is a destination for food lovers who appreciate fresh, locally-sourced ingredients and culinary excellence. Our diverse menu features a range of dishes, from succulent steaks and fresh seafood to vibrant vegetarian options, each crafted with care and creativity. Whether you're here for a romantic dinner, a family gathering, or a special celebration, our attentive staff ensures every visit is exceptional. The elegantly designed interior combines modern chic with rustic charm, offering a cozy yet sophisticated setting. With exclusive event catering and a convenient location at Chattogram, Spice Silk is the perfect place to celebrate life's special moments. Reserve your table online or call us at 01787860270 – we look forward to serving you.</p>
                    <button className="btn btn-outline shadow-lg text-white">Read more</button> {/* Set text color to white */}
                </div>
            </div>
        </div>
    );
};

export default Featured;