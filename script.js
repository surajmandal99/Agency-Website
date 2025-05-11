// Wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the preloader
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.classList.add('fade-out');
        document.body.classList.add('page-loaded');
    }, 1500);
    
    // Position tech icons randomly
    const techIcons = document.querySelectorAll('.tech-icon');
    techIcons.forEach((icon, index) => {
        // Random position - ensure no overlap with text in the hero section
        // Use a wider range across the entire homepage
        const randomTop = Math.random() * 80 + 10; // Between 10% and 90%
        let randomLeft = Math.random() * 90 + 5; // Between 5% and 95%
        
        // Check if the icon is positioned in the main text area (middle section)
        // If it is in the middle, adjust to be on the sides
        if (randomTop > 30 && randomTop < 70 && randomLeft > 33 && randomLeft < 67) {
            randomLeft = Math.random() > 0.5 ? (Math.random() * 25 + 5) : (Math.random() * 25 + 70); 
        }
        
        // Random size (slightly varying sizes)
        const randomSize = Math.random() * 20 + 50; // Between 50px and 70px
        
        // Random animation delay and duration
        const randomDelay = Math.random() * 5;
        const randomDuration = Math.random() * 10 + 15; // Between 15s and 25s
        
        // Apply styles
        icon.style.top = `${randomTop}%`;
        icon.style.left = `${randomLeft}%`;
        icon.style.width = `${randomSize}px`;
        icon.style.height = `${randomSize}px`;
        icon.style.animationDelay = `${randomDelay}s`;
        icon.style.animationDuration = `${randomDuration}s`;
        
        // Add glassmorphism glow effect
        icon.style.boxShadow = `0 4px 15px rgba(${index % 3 === 0 ? '110, 0, 255' : index % 3 === 1 ? '0, 217, 255' : '255, 62, 108'}, 0.4)`;
    });
    
    // Random color changer for Build Your Vision text
    const visionText = document.querySelector('.glitch');
    const randomColors = [
        '#FF00FF', '#00FFFF', '#FF1493', '#7FFFD4', '#9400D3', 
        '#FF4500', '#00FF7F', '#8A2BE2', '#FF6347', '#32CD32'
    ];
    
    // Function to set a random color
    function setRandomColor() {
        const randomColor = randomColors[Math.floor(Math.random() * randomColors.length)];
        visionText.style.color = randomColor;
    }
    
    // Change color every 1.5 seconds
    setInterval(setRandomColor, 1500);
    
    // Service text gradient color randomization
    const serviceElements = document.querySelectorAll('.text-gradient');
    
    // Color sets for different services (web, mobile, saas)
    const colorSets = {
        dark: {
            web: [
                'linear-gradient(90deg, #3a7bd5, #00d2ff)',
                'linear-gradient(90deg, #4e54c8, #8f94fb)',
                'linear-gradient(90deg, #0082c8, #667db6)',
            ],
            mobile: [
                'linear-gradient(90deg, #ff5f6d, #ffc371)',
                'linear-gradient(90deg, #ff416c, #ff4b2b)',
                'linear-gradient(90deg, #f857a6, #ff5858)',
            ],
            saas: [
                'linear-gradient(90deg, #11998e, #38ef7d)',
                'linear-gradient(90deg, #56ab2f, #a8e063)',
                'linear-gradient(90deg, #1d976c, #93f9b9)',
            ]
        },
        light: {
            web: [
                'linear-gradient(90deg, #1a2980, #26d0ce)',
                'linear-gradient(90deg, #0052d4, #4364f7)',
                'linear-gradient(90deg, #0575e6, #021b79)',
            ],
            mobile: [
                'linear-gradient(90deg, #ff0844, #ffb199)',
                'linear-gradient(90deg, #f43b47, #453a94)',
                'linear-gradient(90deg, #ff0099, #493240)',
            ],
            saas: [
                'linear-gradient(90deg, #007991, #78ffd6)',
                'linear-gradient(90deg, #1d976c, #93f9b9)',
                'linear-gradient(90deg, #05795b, #53e3a6)',
            ]
        }
    };
    
    // Function to pick a random gradient from the appropriate set
    const getRandomGradient = (service, theme) => {
        const set = colorSets[theme][service];
        return set[Math.floor(Math.random() * set.length)];
    };
    
    // Apply initial random gradients
    const updateServiceGradients = () => {
        const theme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
        
        serviceElements.forEach(element => {
            const service = element.getAttribute('data-service');
            if (service) {
                element.style.background = getRandomGradient(service, theme);
                element.style.webkitBackgroundClip = 'text';
                element.style.backgroundClip = 'text';
                element.style.webkitTextFillColor = 'transparent';
            }
        });
    };
    
    // Update gradients when theme changes
    document.addEventListener('themechange', updateServiceGradients);
    
    // Initial update
    updateServiceGradients();
    
    // Update every 5 seconds
    setInterval(updateServiceGradients, 5000);

    // Initialize custom cursor
    const cursor = document.querySelector('.custom-cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    document.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        
        cursor.style.left = `${posX}px`;
        cursor.style.top = `${posY}px`;
        
        // Add a small delay to the follower for a smoother effect
        setTimeout(() => {
            cursorFollower.style.left = `${posX}px`;
            cursorFollower.style.top = `${posY}px`;
        }, 50);
    });

    // Custom cursor interactions
    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.6)';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
    });

    const links = document.querySelectorAll('a, button, .btn, .nav-toggle, .theme-toggle');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.backgroundColor = 'transparent';
            cursor.style.border = '2px solid var(--primary-color)';
            cursorFollower.style.opacity = '0.2';
        });
        
        link.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.backgroundColor = 'var(--primary-color)';
            cursor.style.border = 'none';
            cursorFollower.style.opacity = '1';
        });
    });

    // Navigation scroll effect
    const nav = document.querySelector('.main-nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Toggle menu icon
            if (navToggle.classList.contains('active')) {
                navToggle.querySelector('span:nth-child(1)').style.transform = 'translateY(8px) rotate(45deg)';
                navToggle.querySelector('span:nth-child(2)').style.opacity = '0';
                navToggle.querySelector('span:nth-child(3)').style.transform = 'translateY(-8px) rotate(-45deg)';
            } else {
                navToggle.querySelector('span:nth-child(1)').style.transform = 'none';
                navToggle.querySelector('span:nth-child(2)').style.opacity = '1';
                navToggle.querySelector('span:nth-child(3)').style.transform = 'none';
            }
        });
    }

    // Close mobile menu when clicking on nav links
    const menuLinks = document.querySelectorAll('.nav-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.querySelector('span:nth-child(1)').style.transform = 'none';
                navToggle.querySelector('span:nth-child(2)').style.opacity = '1';
                navToggle.querySelector('span:nth-child(3)').style.transform = 'none';
            }
        });
    });

    // Active navigation link highlight
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        menuLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Dark/Light theme toggle with localStorage persistence
    const themeToggle = document.querySelector('.theme-toggle');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        document.documentElement.style.setProperty('color-scheme', 'light');
    } else {
        document.documentElement.style.setProperty('color-scheme', 'dark');
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            // Toggle theme
            document.body.classList.toggle('light-theme');
            
            // Save preference to localStorage
            const isLightTheme = document.body.classList.contains('light-theme');
            localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
            
            // Set color-scheme for proper scrollbar colors
            document.documentElement.style.setProperty('color-scheme', isLightTheme ? 'light' : 'dark');
            
            // Add transition animation to body
            document.body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
            
            // Ripple effect on toggle button
            const ripple = document.createElement('span');
            ripple.classList.add('theme-ripple');
            document.body.appendChild(ripple);
            
            // Create and dispatch a custom event for theme change
            const themeChangeEvent = new CustomEvent('themechange', {
                detail: { theme: isLightTheme ? 'light' : 'dark' }
            });
            document.dispatchEvent(themeChangeEvent);
            
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
    }

    // Enhanced particle effect
    const particles = document.querySelector('.particles');
    if (particles) {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // More varied particle sizes for depth effect
            const size = Math.random() * 6 + 1;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Position particles across the screen
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            // Add varied animation speeds and delays
            particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            
            // Generate colors with some glass effects for light-themed particles
            const colorRandom = Math.random();
            if (colorRandom > 0.7) {
                particle.style.background = 'var(--primary-color)';
                particle.style.boxShadow = '0 0 10px var(--primary-color)';
            } else if (colorRandom > 0.4) {
                particle.style.background = 'var(--secondary-color)';
                particle.style.boxShadow = '0 0 8px var(--secondary-color)';
            } else {
                particle.style.background = 'var(--accent-color)';
                particle.style.boxShadow = '0 0 12px var(--accent-color)';
            }
            
            // Random opacity for depth effect
            particle.style.opacity = Math.random() * 0.5 + 0.1;
            
            // Add blur to some particles
            if (Math.random() > 0.7) {
                particle.style.filter = `blur(${Math.random() * 2}px)`;
            }
            
            particles.appendChild(particle);
        }
        
        // Update particles when theme changes
        document.addEventListener('themechange', () => {
            // The CSS variables will automatically update the colors
            particles.querySelectorAll('.particle').forEach(particle => {
                particle.style.transition = 'background-color 0.5s ease, box-shadow 0.5s ease';
            });
        });
    }

    // Portfolio filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 500);
                }
            });
        });
    });

    // Testimonial Slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-dots .dot');
    
    if (testimonialSlides.length > 0) {
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const slideIndex = dot.getAttribute('data-slide');
                
                // Remove active class from all slides and dots
                testimonialSlides.forEach(slide => slide.classList.remove('active'));
                dots.forEach(d => d.classList.remove('active'));
                
                // Add active class to current slide and dot
                testimonialSlides[slideIndex].classList.add('active');
                dot.classList.add('active');
            });
        });
        
        // Auto rotate testimonials
        let currentSlide = 0;
        const autoSlide = () => {
            currentSlide = (currentSlide + 1) % testimonialSlides.length;
            
            testimonialSlides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            testimonialSlides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        };
        
        const slideInterval = setInterval(autoSlide, 5000);
        
        // Pause auto rotation when hovering over testimonial
        const testimonialsContainer = document.querySelector('.testimonials-container');
        if (testimonialsContainer) {
            testimonialsContainer.addEventListener('mouseenter', () => {
                clearInterval(slideInterval);
            });
            
            testimonialsContainer.addEventListener('mouseleave', () => {
                clearInterval(slideInterval);
                setInterval(autoSlide, 5000);
            });
        }
    }

    // Counter animation for stats
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if (statNumbers.length > 0) {
        const animateStats = () => {
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                const count = parseInt(stat.innerText);
                const speed = 100;
                const inc = target / speed;
                
                if (count < target) {
                    stat.innerText = Math.ceil(count + inc);
                    setTimeout(() => animateStats(), 40);
                } else {
                    stat.innerText = target;
                }
            });
        };
        
        // Start animation when stats section is in view
        const statsSection = document.querySelector('.stats');
        if (statsSection) {
            const statsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateStats();
                        statsObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            statsObserver.observe(statsSection);
        }
    }

    // Form animation and validation
    const formInputs = document.querySelectorAll('.form-control');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.querySelector('.form-label').classList.add('active');
        });
        
        input.addEventListener('blur', () => {
            if (input.value.trim() === '') {
                input.parentElement.querySelector('.form-label').classList.remove('active');
            }
        });
    });
    
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.btn-submit');
            submitBtn.classList.add('btn-loading');
            
            // Simulated form submission delay
            setTimeout(() => {
                submitBtn.classList.remove('btn-loading');
                alert('Message sent successfully!');
                this.reset();
                
                // Reset form labels
                formInputs.forEach(input => {
                    input.parentElement.querySelector('.form-label').classList.remove('active');
                });
            }, 1500);
        });
    }

    // Enhanced scroll animations with staggered effects
    const scrollAnimations = () => {
        const animatedElements = document.querySelectorAll(
            '.fade-in, .fade-in-up, .scale-in, .slide-in-left, .slide-in-right, .rotate-in'
        );
        
        animatedElements.forEach((element, index) => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            // Add staggered delay for sibling elements
            if (elementPosition < windowHeight * 0.9) {
                // Check if this element is part of a group (has siblings with same parent and animation class)
                const parent = element.parentElement;
                const siblings = Array.from(parent.children).filter(child => 
                    child.classList.contains('fade-in') ||
                    child.classList.contains('fade-in-up') ||
                    child.classList.contains('scale-in') ||
                    child.classList.contains('slide-in-left') ||
                    child.classList.contains('slide-in-right') ||
                    child.classList.contains('rotate-in')
                );
                
                // If multiple animated siblings, add staggered delay
                if (siblings.length > 1) {
                    const siblingIndex = siblings.indexOf(element);
                    if (siblingIndex > 0 && !element.style.animationDelay) {
                        element.style.animationDelay = `${siblingIndex * 0.15}s`;
                    }
                }
                
                element.style.opacity = '1';
                element.style.visibility = 'visible';
            }
        });
        
        // Animate trusted-by logos
        const logoItems = document.querySelectorAll('.logo-item');
        logoItems.forEach((logo, index) => {
            const logoPosition = logo.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (logoPosition < windowHeight * 0.9) {
                // Add staggered animation for logos
                setTimeout(() => {
                    logo.classList.add('visible');
                }, index * 150);
            }
        });
    };
    
    window.addEventListener('scroll', scrollAnimations);
    // Initial check
    setTimeout(scrollAnimations, 100);

    // Scroll to top button
    const scrollToTop = document.createElement('button');
    scrollToTop.className = 'scroll-top';
    scrollToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollToTop);
    
    scrollToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollToTop.style.opacity = '1';
            scrollToTop.style.pointerEvents = 'all';
        } else {
            scrollToTop.style.opacity = '0';
            scrollToTop.style.pointerEvents = 'none';
        }
    });

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offset = 80;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add a CSS rule for particle animation
    const style = document.createElement('style');
    style.innerHTML = `
        .particle {
            position: absolute;
            border-radius: 50%;
            animation: float-particle linear infinite;
            pointer-events: none;
        }
        
        @keyframes float-particle {
            0% {
                transform: translateY(0) translateX(0);
            }
            25% {
                transform: translateY(-30px) translateX(10px);
            }
            50% {
                transform: translateY(-15px) translateX(30px);
            }
            75% {
                transform: translateY(10px) translateX(-10px);
            }
            100% {
                transform: translateY(0) translateX(0);
            }
        }
        
        .scroll-top {
            position: fixed;
            right: 20px;
            bottom: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: var(--primary-color);
            color: white;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s ease;
            z-index: 99;
        }
        
        .scroll-top:hover {
            background: var(--secondary-color);
            transform: translateY(-5px);
        }
        
        .page-loaded .fade-in {
            opacity: 0;
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .page-loaded .fade-in-up {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
    `;
    document.head.appendChild(style);

    // Apply fade-in classes to elements
    const headings = document.querySelectorAll('h1, h2, .hero .tagline, .hero-description');
    headings.forEach((el, index) => {
        el.classList.add('fade-in-up');
        el.style.opacity = '0';
        el.style.transitionDelay = `${index * 0.2}s`;
    });

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((btn, index) => {
        btn.classList.add('fade-in-up');
        btn.style.opacity = '0';
        btn.style.transitionDelay = `${0.6 + (index * 0.1)}s`;
    });

    // Add tilt effect to service cards
    const serviceCards = document.querySelectorAll('[data-tilt]');
    serviceCards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const cardRect = card.getBoundingClientRect();
            const x = e.clientX - cardRect.left;
            const y = e.clientY - cardRect.top;
            
            const centerX = cardRect.width / 2;
            const centerY = cardRect.height / 2;
            
            const rotateY = (x - centerX) / 20;
            const rotateX = (centerY - y) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });
});
