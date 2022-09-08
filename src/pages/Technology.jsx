import { Container, Row } from 'reactstrap'
import SectionTitle from '../common/SectionTitle';
import TechnologyBox from '../components/TechnologyBox';
import realitykitLogo from '../assets/images/technology/realitykit_logo.png';
import arkitLogo from '../assets/images/technology/arkit_logo.png';
import swiftuiLogo from '../assets/images/technology/swiftui_logo.png';
import swiftLogo from '../assets/images/technology/swift_logo.png';
import firebaseLogo from '../assets/images/technology/firebase_logo.png';
import combineLogo from '../assets/images/technology/combine_logo.png';
import metalLogo from '../assets/images/technology/metal_logo.png';

const pageData = {
    title: 'Technology',
    description: 'Tools and Frameworks for Chamber AR',
    techs: [
        {
            icon: realitykitLogo,
            title: 'RealityKit',
            href: 'https://developer.apple.com/documentation/realitykit',
            details: 'RealityKit framework provides high-performance 3D simulation and rendering. RealityKit leverages information provided by the ARKit framework to seamlessly integrate virtual objects into the real world.'
        },
        {
            icon: arkitLogo,
            title: 'ARKit',
            href: 'https://developer.apple.com/augmented-reality/arkit',
            details: 'ARKit combines device motion tracking, camera scene capture, advanced scene processing, and display conveniences to simplify the task of building an AR experience.'
        },
        {
            icon: swiftLogo,
            title: 'Swift',
            href: 'https://developer.apple.com/swift',
            details: 'Swift is a powerful and intuitive programming language for iOS, iPadOS, macOS, tvOS, and watchOS. Swift code is interactive and fun, the syntax is concise yet expressive.'
        },
        {
            icon: swiftuiLogo,
            title: 'SwiftUI',
            href: 'https://developer.apple.com/xcode/swiftui',
            details: 'SwiftUI helps you build great-looking apps across all Apple platforms with the power of Swift.'
        },
        {
            icon: combineLogo,
            title: 'Combine',
            href: 'https://developer.apple.com/documentation/combine',
            details: 'The Combine framework provides a declarative Swift API for processing values over time.'
        },
        {
            icon: metalLogo,
            title: 'Metal SL',
            href: 'https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf',
            details: 'Metal shading language provides graphics and data-parallel compute code for shader programs that runs on the GPU.'
        },
        {
            icon: firebaseLogo,
            title: 'Firebase',
            href: 'https://firebase.google.com',
            details: 'Firebase is an app development platform that helps you build and grow apps and games users love.'
        }
    ]
}

const Technology = () => {
    return(
        <section id='technology'>
            <Container>
                <Row>
                    <SectionTitle title={pageData.title} description={pageData.description} />
                </Row>
                <Row>
                    {pageData.techs.map( (item, index) => 
                        <TechnologyBox index={index} icon={item.icon} title={item.title} href={item.href} details={item.details}/>
                    )}
                </Row>
            </Container>
        </section>
    );
}

export default Technology;