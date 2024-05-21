
import ReactCardSlider from "react-card-slider-component";
import "./css/slide.css";

function Sliderimage() {
  const slides = [
    {
      image: "https://fiverr-res.cloudinary.com/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png",
      title: "Unlock growth online",
      description: "SEO",
      clickEvent: "sliderClick"
    },
    {
      image: "https://fiverr-res.cloudinary.com/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png",
      title: "Color your dreams",
      description: "Illustration",
      clickEvent: "sliderClick"
    },
    {
      image: "https://fiverr-res.cloudinary.com/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png",
      title: "Go global",
      description: "Translation",
      clickEvent: "sliderClick"
    },
    {
      image: "https://fiverr-res.cloudinary.com/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png",
      title: "Learn your business",
      description: "Data Entry",
      clickEvent: "sliderClick"
    },
    {
      image: "https://fiverr-res.cloudinary.com/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png",
      title: "Showcase your story",
      description: "Book Covers",
      clickEvent: "sliderClick"
    },
    {
      image: "https://fiverr-res.cloudinary.com/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png",
      title: "Build your brand",
      description: "Logo Design",
      clickEvent: "sliderClick"
    },
    {
      image: "https://fiverr-res.cloudinary.com/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png",
      title: "Customize your site",
      description: "Wordpress",
      clickEvent: "sliderClick"
    },
    {
      image: "https://fiverr-res.cloudinary.com/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png",
      title: "Share your message",
      description: "Voice Over",
      clickEvent: "sliderClick"
    },
    {
      image: "https://fiverr-res.cloudinary.com/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png",
      title: "Engage your audience",
      description: "Video Explainer",
      clickEvent: "sliderClick"
    },
    {
      image: "https://fiverr-res.cloudinary.com/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png",
      title: "Reach more customers",
      description: "Social Media",
      clickEvent: "sliderClick"
    },
    
  ];
  return (
  <>
  <style>
        {`
          .sdd{
            width:300px;
          }
        `}
      </style>
    <div>
      
      <ReactCardSlider className="sdd" slides={slides} />
    
    </div>
    </>
  );
}

export default Sliderimage;