import bgPortrait from '../assets/images/common/background_portrait.jpg';
import bgLandscape from '../assets/images/common/background_landscape.jpg';

const Preloader = () => {
    return(
        <div style={{display: 'none'}}>
            <img src={bgPortrait} alt='preloading..' style={{display: 'none'}} />
            <img src={bgLandscape} alt='preloading..' style={{display: 'none'}} />
        </div>
    );
}

export default Preloader;