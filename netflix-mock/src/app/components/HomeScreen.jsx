import React from 'react';
import Spotlight from './Spotlight';
import Section from './Slider';

const HomeScreen = () => {
    const spotlightData = {
        title: 'Ready Player One',
        rating: 'Movie about gaming kinda',
        image:'https://imageio.forbes.com/blogs-images/scottmendelson/files/2018/03/rpo_poster-1200x675.jpg?format=jpg&height=900&width=1600&fit=bounds',
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
                <Section key={section.title} title={section.title} series={section.series} />
            ))}
        </div>
    );
};

export default HomeScreen;