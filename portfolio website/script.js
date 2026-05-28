/**
 * Ayush Prabhavale - Portfolio Interactive Layer
 * Features: Page preloader, particles system, Matrix rain, binary rain, 
 * circuit paths, smooth scrolling, active section tracking, typewriter effect.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialise Libraries (AOS, Particles)
    initLibraries();

    // 2. Preloader dismiss logic
    initPreloader();

    // 3. Typist typing effect in Hero
    initTypewriter();

    // 4. Matrix rain animation on canvases
    initMatrixRain();

    // 5. Binary rain animation
    initBinaryRain();

    // 6. Cyber circuit lines animation
    initCircuitLines();

    // 7. Active section scroll highlights
    initScrollTracker();
});

/**
 * Initialize AOS and Particles.js libraries
 */
function initLibraries() {
    // AOS Init
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: true,
            mirror: false
        });
    }

    // Particles.js Init
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 70,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": ["#00f0ff", "#ff007f", "#00ff66"]
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    }
                },
                "opacity": {
                    "value": 0.4,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 2.5,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 140,
                    "color": "#00f0ff",
                    "opacity": 0.2,
                    "width": 0.8
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 130,
                        "line_linked": {
                            "opacity": 0.5
                        }
                    },
                    "push": {
                        "particles_nb": 4
                    }
                }
            },
            "retina_detect": true
        });
    }
}

/**
 * Handle page loading and transition overlay hiding
 */
function initPreloader() {
    const preloader = document.querySelector('.loading-animation');
    
    // Dismiss preloader when full page loaded
    window.addEventListener('load', () => {
        if (preloader) {
            preloader.classList.add('fade-out');
        }
    });

    // Fallback: dismiss preloader after 2.5s anyway to avoid blank screens
    setTimeout(() => {
        if (preloader && !preloader.classList.contains('fade-out')) {
            preloader.classList.add('fade-out');
        }
    }, 2500);
}

/**
 * Typewriter effect inside the Hero section
 */
function initTypewriter() {
    const typingText = document.querySelector('.typing-text');
    if (!typingText) return;

    const roles = [
        "Front End Developer",
        "AI Research Intern",
        "C++ Enthusiast",
        "Creative UI/UX Coder"
    ];

    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let delay = 120;

    function tick() {
        const fullTxt = roles[roleIdx];

        if (isDeleting) {
            typingText.textContent = fullTxt.substring(0, charIdx - 1);
            charIdx--;
            delay = 60;
        } else {
            typingText.textContent = fullTxt.substring(0, charIdx + 1);
            charIdx++;
            delay = 120;
        }

        // Handle typing states
        if (!isDeleting && charIdx === fullTxt.length) {
            isDeleting = true;
            delay = 1600; // Time displaying completed role
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            roleIdx = (roleIdx + 1) % roles.length;
            delay = 600; // Pause before typing next word
        }

        setTimeout(tick, delay);
    }

    // Delay start of typing to let preloader dismiss first
    setTimeout(tick, 1000);
}

/**
 * Matrix green code rain effect inside multiple containers
 */
function initMatrixRain() {
    const containers = document.querySelectorAll('.matrix-rain');
    
    containers.forEach(container => {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '0';
        container.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        let width = canvas.width = container.offsetWidth;
        let height = canvas.height = container.offsetHeight;

        // Resize support
        const handleResize = () => {
            if (canvas && container) {
                width = canvas.width = container.offsetWidth;
                height = canvas.height = container.offsetHeight;
                
                // Re-calculate columns
                columns = Math.floor(width / fontSize);
                rainDrops.length = 0;
                for (let x = 0; x < columns; x++) {
                    rainDrops[x] = Math.random() * -100; // Randomize start positions
                }
            }
        };
        window.addEventListener('resize', handleResize);

        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&*()_+=[]{}|;:,.<>?/アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
        const charArr = chars.split("");

        const fontSize = 13;
        let columns = Math.floor(width / fontSize);
        const rainDrops = [];

        for (let x = 0; x < columns; x++) {
            rainDrops[x] = Math.random() * -50; 
        }

        function draw() {
            ctx.fillStyle = 'rgba(9, 13, 22, 0.06)';
            ctx.fillRect(0, 0, width, height);

            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < rainDrops.length; i++) {
                const text = charArr[Math.floor(Math.random() * charArr.length)];
                
                // Top elements of the drop are brighter/whitish green
                if (Math.random() > 0.98) {
                    ctx.fillStyle = '#ffffff';
                } else if (Math.random() > 0.85) {
                    ctx.fillStyle = '#b3ffd1';
                } else {
                    ctx.fillStyle = '#00ff66'; // var(--neon-green)
                }
                
                ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

                if (rainDrops[i] * fontSize > height && Math.random() > 0.975) {
                    rainDrops[i] = 0;
                }
                rainDrops[i]++;
            }
        }

        const interval = setInterval(draw, 33);
        
        // Clean-up support if node gets detached
        canvas.addEventListener('remove', () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        });
    });
}

/**
 * Binary cyan/magenta code rain inside contact section
 */
function initBinaryRain() {
    const container = document.querySelector('.binary-rain');
    if (!container) return;

    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '0';
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let width = canvas.width = container.offsetWidth;
    let height = canvas.height = container.offsetHeight;

    const handleResize = () => {
        if (canvas && container) {
            width = canvas.width = container.offsetWidth;
            height = canvas.height = container.offsetHeight;
            columns = Math.floor(width / fontSize);
            rainDrops.length = 0;
            for (let x = 0; x < columns; x++) {
                rainDrops[x] = Math.random() * -60;
            }
        }
    };
    window.addEventListener('resize', handleResize);

    const fontSize = 11;
    let columns = Math.floor(width / fontSize);
    const rainDrops = [];

    for (let x = 0; x < columns; x++) {
        rainDrops[x] = Math.random() * -40;
    }

    function draw() {
        ctx.fillStyle = 'rgba(10, 25, 47, 0.07)';
        ctx.fillRect(0, 0, width, height);

        for (let i = 0; i < rainDrops.length; i++) {
            const text = Math.random() > 0.5 ? "1" : "0";
            
            // Neon cyan (blue) or neon magenta (pink)
            ctx.fillStyle = Math.random() > 0.4 ? '#00f0ff' : '#ff007f';
            ctx.font = `bold ${fontSize}px monospace`;
            ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

            if (rainDrops[i] * fontSize > height && Math.random() > 0.98) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    }

    const interval = setInterval(draw, 35);
}

/**
 * Animated cyber circuits connecting nodes in Contact
 */
function initCircuitLines() {
    const container = document.querySelector('.circuit-lines');
    if (!container) return;

    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '0';
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let width = canvas.width = container.offsetWidth;
    let height = canvas.height = container.offsetHeight;

    window.addEventListener('resize', () => {
        if (canvas && container) {
            width = canvas.width = container.offsetWidth;
            height = canvas.height = container.offsetHeight;
        }
    });

    class CircuitNode {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            // Align trajectories to grid angles (0, 90, 180, 270 degrees)
            this.angle = (Math.floor(Math.random() * 4) * Math.PI) / 2;
            this.speed = Math.random() * 1.2 + 0.6;
            this.currentLen = 0;
            this.maxLen = Math.random() * 150 + 50;
            this.color = Math.random() > 0.55 ? 'rgba(0, 240, 255, 0.35)' : 'rgba(255, 0, 127, 0.35)';
            this.width = Math.random() * 1.2 + 0.6;
        }

        updateAndDraw() {
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.width;
            
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);

            const dx = Math.cos(this.angle) * this.speed;
            const dy = Math.sin(this.angle) * this.speed;

            this.x += dx;
            this.y += dy;
            this.currentLen += this.speed;

            ctx.lineTo(this.x, this.y);
            ctx.stroke();

            // Solder dots at random joints
            if (Math.random() > 0.975) {
                ctx.fillStyle = this.color.replace('0.35', '0.8');
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.width * 2.2, 0, Math.PI * 2);
                ctx.fill();
            }

            // Pivot 90 degrees occasionally
            if (this.currentLen > this.maxLen / 2 && Math.random() > 0.98) {
                this.angle += Math.random() > 0.5 ? Math.PI / 2 : -Math.PI / 2;
            }

            // Respawn bounds
            if (this.currentLen >= this.maxLen || this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
                this.reset();
            }
        }
    }

    const circuitry = Array.from({ length: 20 }, () => new CircuitNode());

    function animate() {
        ctx.fillStyle = 'rgba(10, 25, 47, 0.04)'; // Soft trails
        ctx.fillRect(0, 0, width, height);

        circuitry.forEach(node => node.updateAndDraw());
        requestAnimationFrame(animate);
    }

    animate();
}

/**
 * Handle scroll indicator dots and Intersection Observer to highlight active sections
 */
function initScrollTracker() {
    const dots = document.querySelectorAll('.scroll-dot');
    const sections = document.querySelectorAll('section');

    // Smooth scroll triggers on dot clicks
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const sectId = dot.getAttribute('data-section');
            const targetSection = document.getElementById(sectId);
            if (targetSection) {
                window.smoothScroll(targetSection, 800);
            }
        });
    });

    // Observer options
    const observerOptions = {
        root: null,
        rootMargin: '-40% 0px -40% 0px', // Center-focused triggers
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectId = entry.target.id;
                
                dots.forEach(dot => {
                    if (dot.getAttribute('data-section') === sectId) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
}

/**
 * Smooth Scroll Engine (Quadratic Easing out)
 * Accessible globally via window
 */
window.smoothScroll = function(target, duration = 800) {
    if (!target) return;
    
    // Header height offset for clean anchor alignment
    const header = document.querySelector('header');
    const offset = header ? header.offsetHeight : 0;
    
    const targetPos = target.getBoundingClientRect().top + window.pageYOffset - offset;
    const startPos = window.pageYOffset;
    const distance = targetPos - startPos;
    let startTimestamp = null;

    function step(currentTimestamp) {
        if (!startTimestamp) startTimestamp = currentTimestamp;
        const elapsed = currentTimestamp - startTimestamp;
        
        // Progress percentage
        const progress = Math.min(elapsed / duration, 1);
        
        // Quadratic ease-out formula
        const ease = progress * (2 - progress);
        
        window.scrollTo(0, startPos + (distance * ease));

        if (elapsed < duration) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
};
