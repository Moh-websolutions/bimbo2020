


const services = [
    {
    id:"1",    
    title: "Group activities",
    image:"/assets/img/hero/camera-big.png",
    description:"that will help children learn how to interact with other children, how to share, and have fun!."
    },
    
    {   
    id:"2",  
    title: "Education",
    image:"/assets/img/hero/clock-big.png",
    description:"about the world around them. At Garderie Bimbo Daycare, we provide an environment that allows children to learn by manipulation, exploring and testing the environment around them."
    },

    {  
    id:"3",   
    title: "Physical exercise",
    image:"/assets/img/hero/education-big.png",
    description:"Physical exercise through activities that are designed to strengthen hand-eye coordination, balance, focus and cardiovascular endurance. 👋"
    },

    {   
    id:"4",  
    title: "Communication skills",
    image:"/assets/img/hero/chatbox-big.png",
    description:"Communication skills that are vital in our daycare. Our staff is quite good in bringing out the art of interaction from each child. We allow children to open up naturally under loving guidelines to help boost their confidence and help them be well-rounded in their school and in their community."
    },

    {    
    id:"5", 
    title: "Nutrition",
    image:"/assets/img/hero/apple.png",
    description:"Nutrition that is essential to every young child. Our meals are prepared with care by an onsite cook in a clean and responsible kitchen that every parent can feel good about. We follow the Canada food guide in order to provide balanced meals and snacks that are healthy. We believe that good nutrition is vital to nurturing healthy children."
    },

    {    
    id:"6", 
    title: "Let's Get in Touch",
    image:"/assets/img/hero/phone.png",
    description:"For more information about our daycare or preschool services contact us today, and feel free to call us at 506-548-8069 today!"
    },

];
 

function ServicesList(props) {

  const services = props.services;

  const Items = services.slice(0, 20).map((item) =>
     
    <div className="quality__col" key={item.title}>
        <div className="quality__item" data-aos="zoom-in-right" data-aos-easing="ease-in-sine">
          <div className="quality__icon"><img className="quality__pic" src={item.image} alt="Camera" /></div>
          <div className="quality__details">
            <div className="quality__category">{item.title}</div>
            <div className="quality__text">{item.description}</div>
           </div>
        </div>
     </div>
    
  );
  return (
     <>{Items}</> 
  );
}

const allServices = () => {
	return (

    <div className="mt-5">
        <div className="quality">
          <div className="quality__body">

            <ServicesList services={services} />
            
          </div>
          <div className="quality__circles" >
            <div className="quality__circle" data-aos="zoom-in-right" data-aos-easing="ease-in-sine" data-aos-delay="1200"> </div>
            <div className="quality__circle"> </div>
          </div>
      </div>
    </div> 
	)
}


export default allServices