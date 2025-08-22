import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router

const NotFoundPage = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        
        let width, height;
        const points = [];
        const segmentWidth = 2;
        let time = 0;

        const resizeCanvas = () => {
            width = canvas.parentElement.clientWidth;
            height = canvas.parentElement.clientHeight;
            canvas.width = width;
            canvas.height = height;
            
            points.length = 0; // Clear points array
            for (let i = 0; i <= Math.ceil(width / segmentWidth); i++) {
                points.push({ x: i * segmentWidth, y: height / 2 });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.strokeStyle = 'rgba(0, 122, 255, 0.5)'; // A medical blue color
            ctx.lineWidth = 2;
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'rgba(0, 122, 255, 0.3)';

            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);

            for (let i = 1; i < points.length; i++) {
                // Shift points to the left
                points[i - 1].y = points[i].y;
            }

            // Generate new point for the end of the line
            const lastPoint = points[points.length - 1];
            let newY = height / 2;
            
            // Create the EKG "blip"
            const peak = Math.floor(points.length * 0.8);
            if (Math.abs(time % (points.length * 2) - peak) < 20) {
                const diff = time % (points.length * 2) - peak;
                if (diff > -2 && diff < 2) newY -= 50; // Main peak
                else if (diff > -10 && diff < 10) newY -= 15; // Smaller surrounding peaks
            }

            // Add random noise and a subtle sine wave for baseline variation
            newY += (Math.random() - 0.5) * 4;
            // FIX: Replaced undefined variable 'i' with 'time'
            newY += Math.sin(time / 20 + time / 10) * 2;
            
            // Add a "glitch" effect occasionally
            if (Math.random() > 0.995) {
                newY += (Math.random() - 0.5) * 100;
            }

            lastPoint.y = newY;
            
            for (let i = 1; i < points.length; i++) {
                ctx.lineTo(points[i].x, points[i].y);
            }

            ctx.stroke();
            time++;
            animationFrameId = requestAnimationFrame(draw);
        };

        resizeCanvas();
        draw();

        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-slate-900 text-white overflow-hidden">
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0 opacity-50"></canvas>
            <div className="relative z-10 text-center p-4">
                <h1 className="text-8xl md:text-9xl font-extrabold text-blue-500 tracking-wider">
                    404
                </h1>
                <h2 className="mt-4 text-2xl md:text-4xl font-semibold tracking-tight">
                    Page Not Found
                </h2>
                <p className="mt-4 text-slate-400 max-w-md mx-auto">
                    It seems you've ventured into uncharted territory. The page you're looking for doesn't exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 duration-300 shadow-lg"
                >
                    Go Back to Homepage
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
