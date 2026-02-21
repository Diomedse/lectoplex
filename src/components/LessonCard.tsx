import React from 'react';

const LessonCard: React.FC<{ title: string; description: string; }> = ({ title, description }) => {
    return (
        <div className="lesson-card">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default LessonCard;
