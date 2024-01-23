import Footer from "./Footer";
import {Image} from "react-bootstrap";
import './Gallery.css';

let Gallery = () => {
    const imageList = [
        "image01.jpeg",
        "image02.jpeg",
        "image03.jpeg",
        "image04.jpeg",
        "image05.png",
        "image06.png",
        "image07.jpeg",
        "image08.jpeg",
        "image09.jpeg",
        "image10.jpeg",
        "image11.jpeg",
        "image12.jpeg",
        "image13.jpeg",
        "image14.jpeg",
        "image15.jpeg",
        "image16.jpeg",
        "image17.jpeg",
        "image18.jpeg",
        "image19.jpeg",
        "image20.jpeg",
        "image21.jpeg",
        "image22.jpeg",
        "image23.jpeg",
        "image24.jpeg"
    ]

    return(
        <div className="content text-center">
            {imageList.map(path => <Image className="imageVertical m-3" src={require("./img/zdjecia/" + path)} rounded />)}
        <hr />
        <Footer />
        </div>
    )
}

export default Gallery;