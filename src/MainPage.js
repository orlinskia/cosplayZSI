import {Image} from "react-bootstrap";
import mainImage from "./img/site/mainImage.jpeg";

let MainPage = () => {
    return(
        <div className="content">
            <h1 className="text-center" id="mainText">Cosplay ZSI</h1>
            <Image className="mx-auto d-block shadow mainImage" src={mainImage} thumbnail={false} roundedCircle={true}/>
            <h3 className="text-center mx-lg-5" id="description">Cosplay ZSI to wydarzenie utworzone w 2023 roku przez Sebastiana Papuckiego. Ma ono na celu integrację uczniów oraz stworzenie możliwości podzielenia się swoimi zainteresowaniami przez osoby obracające się w tym środowisku. <br/><br/>Nie może tu zabraknąć i ciebie!<br/></h3>
        </div>
    );
}

export default MainPage;