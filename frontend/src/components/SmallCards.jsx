import image1 from "../assets/small-card-images/image-1.png";
import image2 from "../assets/small-card-images/image-2.png";
import image3 from "../assets/small-card-images/image-3.png";
import image5 from "../assets/small-card-images/image-5.png";
import image6 from "../assets/small-card-images/image-6.png";
import image7 from "../assets/small-card-images/image-7.png";

const SmallCards = () => {
  const images = [image1, image2, image3, image5, image6, image7];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 p-10">
      {images.map((image, index) => (
        <div key={index} className="flex justify-center border rounded-lg shadow-sm">
          <img src={image} alt={`Small Card ${index + 1}`} className="w-full h-auto rounded-lg object-cover" />
        </div>
      ))}
    </div>
  );
};

export default SmallCards;
