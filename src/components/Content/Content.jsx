import './Content.scss';
import { Card, Button } from 'react-bootstrap';
import { BiPlayCircle } from 'react-icons/bi';


const Content = () => {
    return (
        <div className="content-container">
            <div className="card-container">
                <div className="card-box">
                    <Card >
                        <Card.Body>
                            {/* <Card.Title>Science</Card.Title>
                            <Card.Title>Magazine</Card.Title>
                            <Card.Title>11. 12 2018</Card.Title> */}
                            <h6>Science</h6>
                            <h6>Magazine</h6>
                            <h6>11. 12 2018</h6>
                            <Card.Text>
                                Want to master your professional and social networks to maximize recognition? Want to learn how to build productive teams that create lasting impact? In his new book, The Formula: The Iniversal Laws of Succes, Albert-László Barabási translates almost a decade of scholarly research on the science of success into a lively...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <a href="#" className="link">Read More</a>
                </div>
                <div className="card-box">
                    <Card >
                        <Card.Body>
                            <h6>Natur</h6>
                            <h6>27. 11 2018</h6>
                            <Card.Text>
                                Originally printed by the National Academies of Sciences as a poster to accompany the publication of a research paper on how diseases connect, it was subsequently reproduced by the New York Times and included in the Mapping It Out: Atlas of Contemporary Cartoghraphies exhibition at the Serpentine Gallery in London...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <a href="#" className="link">Read More</a>
                </div>
                <div className="card-box">
                    <Card >
                        <Card.Body>
                            <h6>Lecture at NYU</h6>
                        </Card.Body>
                        <BiPlayCircle className="play-icon" />
                    </Card>
                    <a href="#" className="link">Watch</a>
                </div>
            </div>
        
        </div>
    )
}

export default Content
