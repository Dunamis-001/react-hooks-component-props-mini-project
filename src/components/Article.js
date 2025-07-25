import React from 'react';

function Article({ title, date = "January 1, 1970", preview, minutes }) {
    const renderMinutesToRead = (minutes) => {
        if (!minutes) return null;

        const coffeeCup = "☕️";
        const bentoBox = "🍱";

        if (minutes < 30) {
            const numCups = Math.ceil(minutes / 5);
            return (
                <p>
                    {coffeeCup.repeat(numCups)} {minutes} min read
                </p>
            );
        } else {
            const numBento = Math.ceil(minutes / 10);
            return (
                <p>
                    {bentoBox.repeat(numBento)} {minutes} min read
                </p>
            );
        }
    };

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            {renderMinutesToRead(minutes)}
            <p>{preview}</p>
        </article>
    );
}

export default Article;