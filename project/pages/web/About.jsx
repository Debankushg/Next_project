import Navbars from '../../component/Navbars'
import styles from "../../styles/about.module.css"
import Footer from './../../component/Footer';


const About = () => {
    return (
        <div>
            <Navbars />
            <div className={styles.body}>

                <div className={styles.sec}>
                    <h1 className={`${styles.neon} , ${styles.head}`} data-text="ABOUT US">ABOUT US</h1>
                </div>


                {/* <h2 className=>OUR STORY</h2> */}
                <div>
                    <div className={styles.section}>

                        <h3 className={styles.head3}>BOURNVILLE 'THE FACTORY IN A GARDEN' IS BORN</h3>
                        <img className={styles.img} src="/23.jpg" alt="factory" height="200" width="300"/>

                        <p className={styles.para}>Birmingham architect, George H. Gadd worked closely with George Cadbury to draw up plans for the factory. The
                            first bricks were laid in January 1879 and 16 houses for foremen and senior employees were built on the site.

                            These mostly semi-detached houses were well-built and spaced out with ample gardens. Production began at the
                            Cadbury Brothers' 'Bournville factory in a garden' in September 1879. When the workers arrived they found
                            facilities that were simply unknown in Victorian times. There was a field next to the factory where men were
                            encouraged to play cricket and football; a garden and playground for the girls; a kitchen where workers could
                            heat up their meals, and properly heated dressing rooms where they could get changed. As George said, 'If the
                            country is a good place to live in, why not to work in?’ Keen sportsmen, Richard and George encouraged sports
                            and recreations, often playing cricket themselves. Sports facilities grew to include football, hockey and
                            cricket pitches, tennis and squash racquet courts and a bowling green.

                        </p>
                    </div>
                    <div className={styles.section}>

                        <h3 className={styles.head3}>GEORGE CADBURY ADDS ANOTHER 120 ACRES TO BOURNVILLE </h3>
                        <img className={styles.img} src="/25.jpg" alt="logo" height="200" width="300" />

                        <p className={styles.para}>George Cadbury had already created some houses for key workers when the Bournville factory was built. Then, in
                            1893, he bought another 120 acres near the works and started to build houses in line with the ideals of the
                            embryonic Garden City movement. George's wife, Dame Elizabeth Cadbury, planned Bournville Village alongside her
                            husband, and her memoirs tell us how these plans became reality. 'When I first came to Birmingham and we were
                            living at Woodbrooke, morning after morning I would walk across the fields and farmland between our home and the
                            Works planning how a village could be developed, where the roads should run and the type of cottages and
                            buildings.’ Gradually, she realised this dream. Many of the first tenants were men in Mr Cadbury's Adult School
                            Class, who had previously lived in the centre of Birmingham without gardens. Now they enjoyed healthy
                            surroundings and cultivated their gardens, many with their own apple trees.</p>

                    </div>
                    <div className={styles.section}>
                        <h3 className={styles.head3}>GEORGE CADBURY BUILDS A FURTHER 143 COTTAGES IN BOURNVILLE</h3>
                        <img className={styles.img} src="/26.jpg" alt="pic" />

                        <p className={styles.para}>George Cadbury decided not to go for tunnel-backs because it limited the amount of light in the houses. Instead
                            he chose rectangular cottages, each one with a large garden. In 1895, 143 cottages were built on the land he had
                            bought privately, a total of 140 acres. When building started at Bournville, the basic house type built in the
                            Midlands was the 'tunnel-back'. It was cheap, large-scale housing complying with the Public Health Acts that had
                            condemned 'back-to-back' housing. They were built in long rows with entrances to the back through common
                            passages, built over on upper floors. Though they were an improvement on the previous houses, they didn’t look
                            that attractive - lots of tunnel-backs meant endless rows of dreary monotonous housing. George Cadbury decided
                            not to go for tunnel-backs because it limited the amount of light in the houses. Instead he chose rectangular
                            cottages, each one with a large garden. In 1895, 143 cottages were built on the land he had bought privately, a
                            total of 140 acres. The first houses were built in straight rows with no more than four houses in a terrace, but
                            this soon gave way to more interesting layouts. Bournville was developed to be a 'garden village' and these were
                            the guiding principles... Cottages grouped in pairs, threes or sometimes fours. Groups were set back from
                            tree-lined roads, each house with its own front garden and vegetable garden with fruit trees at the back. All
                            cottages were well built with light airy rooms and good sanitation. A typical cottage had a parlour, living room
                            and kitchen downstairs and three bedrooms upstairs. Some early houses didn’t have bathrooms, but it was easy to
                            add them later on. Houses should cost at least £150 to build: they were to house 'honest, sober, thrifty
                            workmen, rather than the destitute or very poor'.
                        </p>
                        <div className={styles.sec}></div>
                    </div>


                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default About