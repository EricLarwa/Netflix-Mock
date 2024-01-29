import { React } from 'react';
import Spotlight from './Spotlight';
import Section from './Slider';

const HomeScreen = () => {
    const spotlightData = {
        title: 'Ready Player One',
        rating: '',
        image:''
    };

    const sectionData = [
        {
            title: 'Continue Watching',
            serie: [
                { id: 1, title: 'series 1', image: ''},
                { id: 2, title: 'series 2', image: ''},
            ]
        },

        {
            title: 'Series',
            serie: [
                { id: 1, title: 'series 1', image: ''},
                { id: 2, title: 'series 2', image: ''},
            ]
        },

        {
            title: 'Popular Series',
            serie: [
                { id: 1, title: 'series 1', image: ''},
                { id: 2, title: 'series 2', image: ''},
            ]
        },
    ];

    return (
        <div className="homescreen">
            <Spotlight {...spotlightData} />
            {sectionData.map ((section) => (
                <Section key={section.title} series ={section.series} />
            ))}
        </div>
    );
};

export default HomeScreen;