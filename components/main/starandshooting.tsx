"use client";

import React, { useEffect, useRef, useMemo, useCallback, useState } from 'react';

const ShootingStars: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        }
    }, []);

    const stars = useMemo(() => {
        if (dimensions.width === 0 || dimensions.height === 0) return [];
        const starsArray = [];
        for (let i = 0; i < 100; i++) {
            starsArray.push({
                x: Math.random() * dimensions.width,
                y: Math.random() * dimensions.height,
                radius: Math.random() * 1.5,
            });
        }
        return starsArray;
    }, [dimensions]);

    const shootingStars = useMemo(() => {
        if (dimensions.width === 0 || dimensions.height === 0) return [];
        const shootingStarsArray = [];
        for (let i = 0; i < 5; i++) {
            shootingStarsArray.push({
                x: Math.random() * dimensions.width,
                y: Math.random() * dimensions.height,
                vx: -Math.random() * 10 - 5,
                vy: Math.random() * 10 + 5,
                length: Math.random() * 80 + 10,
                opacity: Math.random() * 0.5 + 0.5,
            });
        }
        return shootingStarsArray;
    }, [dimensions]);

    const updateShootingStars = useCallback(() => {
        for (let star of shootingStars) {
            star.x += star.vx;
            star.y += star.vy;
            if (star.x < 0 || star.y > dimensions.height) {
                star.x = Math.random() * dimensions.width;
                star.y = Math.random() * dimensions.height;
                star.vx = -Math.random() * 10 - 5;
                star.vy = Math.random() * 10 + 5;
            }
        }
    }, [shootingStars, dimensions]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');

        if (canvas && context) {
            const render = () => {
                context.clearRect(0, 0, canvas.width, canvas.height);

                for (let star of stars) {
                    context.beginPath();
                    context.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
                    context.fillStyle = 'white';
                    context.fill();
                }

                updateShootingStars();
                for (let star of shootingStars) {
                    context.beginPath();
                    context.moveTo(star.x, star.y);
                    context.lineTo(star.x + star.length, star.y - star.length);
                    context.strokeStyle = `rgba(255, 255, 255, ${star.opacity})`;
                    context.stroke();
                }

                requestAnimationFrame(render);
            };

            render();
        }
    }, [stars, shootingStars, updateShootingStars]);

    return (
        <canvas 
            ref={canvasRef} 
            width={dimensions.width} 
            height={dimensions.height} 
            className='fixed'
        />
    );
};

export default ShootingStars;
