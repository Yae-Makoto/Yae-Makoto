import { useState, useEffect } from 'react';

function doNothing(input) {
    return input
}

export function getWindowDimension(calculate) {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width: calculate(width),
        height: calculate(height)
    };
}

export function getWindowShortestSide(calculate) {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        size: calculate(Math.min(width, height))
    };
}

export function getWindowLongestSide(calculate) {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        size: calculate(Math.max(width, height))
    };
}

function useDimension(update, calculate) {
    const [dimension, setDimension] = useState(update(calculate));
    useEffect(() => {
        function handleResize() {
            setDimension(update(calculate));
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return dimension;
}

export function useWindowDimension(calculate = doNothing) {
    return useDimension(getWindowDimension, calculate)
}

export function useWindowShortestSide(calculate = doNothing) {
    return useDimension(getWindowShortestSide, calculate);
}

export function useWindowLongestSide(calculate = doNothing) {
    return useDimension(getWindowLongestSide, calculate);
}
