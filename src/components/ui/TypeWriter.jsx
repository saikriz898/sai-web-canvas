import React, { useState, useEffect } from 'react';

const TypeWriter = ({ words }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            const timeout = setTimeout(() => setReverse(true), 1500);
            return () => clearTimeout(timeout);
        }
        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }
        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 40 : 80);
        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words]);

    return <span className="text-accent">{words[index].substring(0, subIndex)}</span>;
};

export default TypeWriter;
