import React from 'react';
import styles from './Skills.module.scss';

const Skills = () => {
    return(
        <>
            <h1>Moje Umiejętności</h1>
            <p>Programowaniem z pasji zajmuję się od ponad 10 lat, podążając za nowymi wyzwaniami, chcąc ciągle poszerzać swoją wiedzę uczestniczę w szeregu szkoleń, kursów a oto co potrafię:</p>
            <section>
                <img />
                <h2>Wiedza praktyczna</h2>
                <ul>
                    <li>
                        Semantyczny HTML5
                    </li>
                </ul>
            </section>
            <section>
                <img />
                <h2>Wiem coś na temat</h2>
                <ul>
                    <li>
                        Node.JS
                    </li>
                </ul>
            </section>
            <section>
                <img />
                <h2>Chcę cię nauczyć</h2>
                <ul>
                    <li>
                        Gatsby
                    </li>
                </ul>
            </section>
        </>
    )
};

export default Skills;