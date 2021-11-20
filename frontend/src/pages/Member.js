import React,{ useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios'
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Navigation from "../components/Navigation";
import BTGCover from "../images/btg-cover.png";
import Footer from "../components/Footer";

ReactGA.initialize("UA-104764221-10");
ReactGA.pageview(window.location.pathname + window.location.search);

function Member(){

    const params = useParams();
    const id = params.id;

    const [error,setError] = useState(null);
    const [member, setMember] = useState([]);
    const [isLoaded,setIsLoaded] = useState(false);

    useEffect(() => {
      async function getAPI() {
        try{
          const response = await axios.get(`http://localhost:1337/members/?andrewid=`+id)
          setMember(response.data);
          setIsLoaded(true);
        } catch (error) {
            setError(error)
            setIsLoaded(true);
        }
      }
      getAPI()
    },[])

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
        return <div>Loading...</div>;
    }  
    if (member){
        //console.log(member[0].resume[0].url);
        return (
            <FadeIn>
            <Helmet>
                <title>Members | CMUBTG</title>
                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta name="twitter:image" content={BTGCover}></meta>
            </Helmet>
        
            <Navigation />
        
            <Container className="mt-md-5 pt-md-5">
                <Row className="pt-5 mt-5">
                  <Col xs={8}>
                    <h1 className="display-3 text-black font-weight-boldest">{member[0].firstname} {member[0].lastname}</h1>
                    <p>{member[0].email}</p>
                  </Col>
                  <Col>
                    <img src={"http://localhost:1337"+member[0].pic.formats.thumbnail.url} alt="Pic" />
                  </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <pre>{member[0].portfolio}</pre>
                            {/* <iframe title="PDF" src={"http://localhost:1337"+member[0].resume[0].url}>
                                <a href={"http://localhost:1337"+member[0].resume[0].url}>Download</a>
                            </iframe> */}
                            <embed src={"http://localhost:1337"+member[0].resume[0].url} type="application/pdf" />
                        </div>
                    </Col>
                </Row>
              </Container>
                <Footer />
            </FadeIn>
        );
    }

}

export default Member;