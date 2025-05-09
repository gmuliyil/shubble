import '../styles/About.css';
import {
    useState,
    useEffect,
} from 'react';

export default function About() {

    const [wordIndex, setWordIndex] = useState(0);
    const words = ['reliable', 'predictable', 'accountable'];

    useEffect(() => {
        setInterval(() => {
            setWordIndex((prevIndex) => {
                return (prevIndex + 1) % words.length;
            });
        }, 2000);
    }, []);

    return (
        <div className='about'>
            <p>Making shuttles <span className='word-rotator'>{words[wordIndex]}</span></p>
            <p>
                Shubble is the latest shuttle tracker, which is built using Mapkit JS, React, and Flask.
            </p>
            <p>
                Shubble is an open source project under the Rensselaer Center for Open Source (RCOS).
            </p>
            <p>
                Have an idea to improve it? Contributions are welcome. Visit our <a href='https://github.com/wtg/shubble' target='_blank'>Github Repository</a> to learn more.
            </p>
            <div className='small'>
                <p>
                    &copy; 2025 SHUBBLE
                </p>
            </div>
      </div>
    )
}
