import Image from "next/image";
import Card from "@/app/components/recent-post-card";
export default function Home() {
  return (
    <>

      <div className="hero-section">
        <div className="container">
          <div className="main">
            <div className="text-container">
              <h1 className="main-text">
                Hi, I am Hayal, Passionate Web Developer and Designer.
              </h1>
              <p className="main-para">
                With a solid foundation in front-end development and a keen
                eye for design,I specialize in crafting intuitive,responsive 
                websites.excel in translating complex idea into  elegent,
                functional web solutions using HTML,CSS,Javascript,Typescript,
                and frameworks like Next.js.
              </p>
              <button className="resume-btn">Download Resume</button>
            </div>
            <div>
              <div>
                <Image
                  src="/ani mi.jpg"
                  width={300}
                  height={300}
                  alt="person"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="recent-post">
        <div className="container">
          <div className="main">
            <div className="heading">
              <h3>Recent Post</h3>
              <button className="view-all-btn">View All</button>
            </div>
            

            <div className="card-parent">
              <Card />
              <Card/>
            </div>
          </div>
        </div>
      </div>
      

      <div className="featured-section">
        <div className="container">
          <div className="main">
            <div className="main-heading">
              <h3>Featured Works</h3>
            </div>

            <div className="card-parent">
              <div className="card">
                <Image
                  src="/responsive website.jpg"
                  width={245}
                  height={180}
                  alt="image"
                ></Image>

                <div className="card-content">
                  <h2>Responsive Web Design</h2>
                  <div className="badge-parent">
                    <div className="badge">
                      <p>2020</p>
                    </div>
                    <p>Dashboard</p>
                  </div>
                  <p>
                  Developed a responsive Dashboard that adapts seamlessly to mobile,
                  tablet,and desktop devices.The project involved crafting a flexible 
                  layout using CSS grid and media queries,ensuring and intutive user
                  interface across all platefroms.By focusing on usability and aesthetic 
                  appeal,this design provides a smooth and engaging experience that Design
                  provides a smooth and engaging experience that makes data accessible and
                  readable on any sacreen size, helping users make informed decisions at a 
                  glance.


                  </p>
                </div>
              </div>

              <div className="card">
                <Image
                  src="/e commerce website.jpg"
                  width={245}
                  height={180}
                  alt="image"
                ></Image>

                <div className="card-content">
                  <h2>E-Commerce Website for Retail Business</h2>

                  <div className="badge-parent">
                    <div className="badge">
                      <p>2020</p>
                    </div>
                    <p>Dashboard</p>
                  </div>
                  <p>
                    E-Commerce Designed and developed an e-commerceplatform for a retail
                    business,featuring a clean,user-friendlty layout and optimized performance. 
                    The website includes an intuitive product catalog,an interactive shopping 
                    cart, and a secure checkout process. Built with a focus on scalability,this
                    e-commerce site provides a frictionaless shopping experience that keeps 
                    customers engaged,making it easy for them to browse,add items to their cart,
                    and complete transactions smoothly.
                  </p>
                </div>
              </div>

              <div className="card">
                <Image
                  src="/image1.png"
                  width={245}
                  height={180}
                  alt="image"
                ></Image>

                <div className="card-content">
                  <h2>Dashboard with Interactive Calculator & Animated Portfolio</h2>
                  <div className="badge-parent">
                    <div className="badge">
                      <p>2020</p>
                    </div>
                    <p>Dashboard</p>
                  </div>
                  <p>
                    Created a custom calculator within a real-time data dashboard for accurate 
                    data analysis,supporting complex computations and visualizations. This 
                    Project simplifies trend analysis and metric comparisions.Additionally,an 
                    animated portfolio was developed to showcase the project's functionality 
                    and engage users effectively.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}