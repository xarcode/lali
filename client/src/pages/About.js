import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="flexbox">
          <img src="laali-logo.png" />
        </div>
        {/* <Navbar/> */}
        <div
          className="flexbox"
          style={{ backgroundColor: "#FFF0F0", height: "25%" }}
        >
          <h1 style={{ color: "#E61F1F" }}>THE LAALI PROJECT</h1>
        </div>
        <div className="content-box">
          <div className="hero-txt">
            <p>
              A Bit More About Us Supporters, Allies and Advocates The Laali
              Project is a non-profit organisation that works to create a world
              where everyone has access to sexual and reproductive health
              services. We strive to build young change makers to advance sexual
              and reproductive health with a particular focus on poor,
              vulnerable and marginalized people, so that no one is left behind.
              Through our unique leadership program, we are empowering the youth
              to become period leaders and educators in their communities,
              helping to end period poverty. Join us today and help make a
              difference
            </p>
          </div>
          <div className="hero-img">
            <img  src="herobg.png" />
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
