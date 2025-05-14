// const counters = document.querySelectorAll(".counters span");
// const container = document.querySelector(".counters");
// let activated = false;

// window.addEventListener("scroll", () => {
//     if (
//         window.pageYOffset > container.offsetTop - container.offsetHeight - 200 &&
//         !activated
//     ) {
//         counters.forEach((counter) => {
//             counter.innerText = "0";
//             let count = 0;
//             const target = parseInt(counter.dataset.count);

//             function updateCount() {
//                 if (count < target) {
//                     count++;
//                     counter.innerText = count;
//                     setTimeout(updateCount, 10);
//                 } else {
//                     counter.innerText = target;
//                 }
//             }
//             updateCount();
//         });
//         activated = true;
//     } else if (
//         window.pageYOffset < container.offsetTop - container.offsetHeight - 500 &&
//         activated
//     ) {
//         counters.forEach((counter) => {
//             counter.innerText = "0";
//         });
//         activated = false;
//     }
// });


// method-2

// let nums = document.querySelectorAll(".num");
// let container = document.querySelectorAll(".container");

// let test = false;
// window.onscroll = () => {
//     if (window.screenY = container.offsetTop) {
//         if (!test) {
//             nums.forEach((e) =>{
//                 let start = 0;
//                 let end = e.dataset.num;

//                 let count = setInterval(()=>{

//                     start++
//                     e.textContent = start;
//                     if (start == end) {
//                         clearInterval(count);
//                     }
//                 }, 2000 / end);
//                 })
//             }
//             test = true; 
//         }

//     }


// method-3

    //  document.querySelectorAll('.counters span').forEach(span => {
    //         const count = parseInt(span.getAttribute('data-count'), 10);
    //         let currentCount = 0;
    //         const increment = Math.ceil(count / 100); // Increment value

    //         const interval = setInterval(() => {
    //             currentCount += increment;
    //             if (currentCount >= count) {
    //                 currentCount = count;
    //                 clearInterval(interval);
    //             }
    //             span.textContent = currentCount;
    //         }, 50); // Update every 50ms
    //     });

    
    //counter method4
        const counters = document.querySelectorAll(".counters span");
        const container = document.querySelector(".counters");
        let activated = false;

        window.addEventListener("scroll", () => {
            if (
                window.pageYOffset > container.offsetTop - container.offsetHeight - 200 &&
                !activated
            ) {
                counters.forEach((span) => {
                    span.textContent = "0"; // Initialize to 0
                    const count = parseInt(span.dataset.count, 10);
                    let currentCount = 0;
                    // Adjust increment for ~2-second animation (2000ms / 50ms = 40 steps)
                    const increment = Math.ceil(count / (2000 / 50));
                    const intervalTime = 30; // Update every 50ms

                    const interval = setInterval(() => {
                        currentCount += increment;
                        if (currentCount >= count) {
                            currentCount = count; // Cap at target
                            clearInterval(interval); // Stop interval
                        }
                        span.textContent = currentCount;
                    }, intervalTime);
                });
                activated = true;
            } else if (
                window.pageYOffset < container.offsetTop - container.offsetHeight - 500 &&
                activated
            ) {
                counters.forEach((span) => {
                    span.textContent = "0"; // Reset to 0
                });
                activated = false; // Allow future animation
            }
        });



        // slider...........
    
        const slider = document.querySelector(".slider");
        const logos = document.querySelectorAll(".client-logo");
        const prevBtn = document.querySelector(".prev-btn");
        const nextBtn = document.querySelector(".next-btn");
        let currentIndex = 0;
        const logoWidth = logos[0].offsetWidth + 32; // mx-4 = 8px per side * 2 * 2 logos = 32px
        const visibleLogos = 3;
        const maxIndex = logos.length - visibleLogos;

        function updateSlider() {
            slider.style.transform = `translateX(-${currentIndex * logoWidth}px)`;
        }

        nextBtn.addEventListener("click", () => {
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateSlider();
            }
        });

        prevBtn.addEventListener("click", () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });

        let autoSlide = setInterval(() => {
            if (currentIndex < maxIndex) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateSlider();
        }, 5000);

        slider.parentElement.addEventListener("mouseenter", () => {
            clearInterval(autoSlide);
        });

        slider.parentElement.addEventListener("mouseleave", () => {
            autoSlide = setInterval(() => {
                if (currentIndex < maxIndex) {
                    currentIndex++;
                } else {
                    currentIndex = 0;
                }
                updateSlider();
            }, 5000);
        });

        window.addEventListener("resize", () => {
            updateSlider();
        });
    
    