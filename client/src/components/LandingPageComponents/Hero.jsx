import React, { useEffect, useRef } from 'react';

// Main Hero Component
const Hero = () => {
    const canvasRef = useRef(null);

    // Effect to handle the canvas animation
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        let canvasWidth = window.innerWidth;
        let canvasHeight = window.innerHeight;

        // Set canvas dimensions
        const setCanvasDimensions = () => {
            canvasWidth = window.innerWidth;
            // Set a max height for the hero section, e.g., 800px, or full viewport height
            canvasHeight = Math.min(window.innerHeight, 800);
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
        };

        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * canvasWidth;
                this.y = Math.random() * canvasHeight;
                this.size = Math.random() * 1.5 + 1;
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 2 - 1;
                this.color = 'white';
            }

            update() {
                if (this.x > canvasWidth || this.x < 0) this.speedX *= -1;
                if (this.y > canvasHeight || this.y < 0) this.speedY *= -1;
                this.x += this.speedX;
                this.y += this.speedY;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Initialize particles
        const init = () => {
            particles = [];
            // CHANGED: Increased particle density by reducing the divisor
            let numberOfParticles = (canvasWidth * canvasHeight) / 6000;
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };

        // Connect particles with lines
        const connect = () => {
            let opacityValue = 1;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x)) +
                                   ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
                    // CHANGED: Increased connection distance by reducing the divisor
                    if (distance < (canvasWidth / 6) * (canvasHeight / 6)) {
                        opacityValue = 1 - (distance / 20000);
                        ctx.strokeStyle = `rgba(255, 255, 255, ${opacityValue > 0.8 ? 0.8 : opacityValue})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            connect();
            animationFrameId = requestAnimationFrame(animate);
        };

        // Event listener for resize
        const handleResize = () => {
            setCanvasDimensions();
            init();
        };

        // Initial setup
        setCanvasDimensions();
        init();
        animate();

        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section className="relative bg-slate-900 text-white min-h-[650px] flex items-center justify-center overflow-hidden">
            {/* Canvas Background */}
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0 opacity-50"></canvas>
            
            {/* Overlay Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900 z-10"></div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
                    Your Intelligent <span className="text-red-500">Health Assistant</span>
                </h1>
                <p className="max-w-xl mx-auto text-lg sm:text-xl text-slate-300 mb-8">
                    Get instant, AI-powered health guidance. Check your symptoms, understand potential conditions, and find the right specialist.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="/symptom-checker"
                        className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 duration-300 shadow-lg"
                    >
                        Try Symptom Checker
                    </a>
                    <a
                        href="/tech-stack"
                        className="inline-block bg-transparent hover:bg-slate-800 text-white font-semibold py-3 px-8 rounded-lg text-lg border-2 border-slate-600 hover:border-slate-700 transition-colors duration-300"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
