const controller = new ScrollMagic.Controller()

/* 
===============
Nav Transitions
=============== 
*/


const navBkgIn = new ScrollMagic.Scene({
    triggerElement: '.first-content',
    triggerHook: 0.3
})
    // .addIndicators({
    //     name: 'main nav in'
    // })
    .setClassToggle('.main-nav', 'fade-in')
    .addTo(controller);

const colorChange = new ScrollMagic.Scene({
    triggerElement: '.first-content',
    triggerHook: 0.3
})
    // .addIndicators({
    //     name: 'color change'
    // })
    .setClassToggle('.nav-button', 'color-change')
    .addTo(controller);
const colorChange2 = new ScrollMagic.Scene({
    triggerElement: '.first-content',
    triggerHook: 0.3
})
    // .addIndicators({
    //     name: 'color change'
    // })
    .setClassToggle('span', 'color-change')
    .addTo(controller);

const logoOut = new ScrollMagic.Scene({
    triggerElement: '.first-content',
    triggerHook: 0.3
})
    .setClassToggle('.light', 'fade-out')
    .addTo(controller)

const logoIn = new ScrollMagic.Scene({
    triggerElement: '.first-content',
    triggerHook: 0.3
})
    .setClassToggle('.dark', 'fade-in')
    .addTo(controller)



/* 
========================
Home Content Transitions
======================== 
*/

const homePin = new ScrollMagic.Scene({
    triggerElement: '.home-video-container',
    triggerHook: 0,
    duration: '200%'
})
    .addIndicators({
        name: 'home pin'
    })
    .setPin('.home-video-container')
    .addTo(controller);

const firstContentOut = new ScrollMagic.Scene({
    triggerElement: '.second-content',
    triggerHook: 0.5
})
    // .addIndicators({
    //     name: 'home transition'
    // })
    .setClassToggle('.first-content', 'fade-out')
    .addTo(controller);

const secondContentIn = new ScrollMagic.Scene({
    triggerElement: '.second-content',
    duration: '50%',
    triggerHook: 0.5
})
    // .addIndicators({
    //     name: 'home transitions',
    //     colorTrigger: 'black',
    //     colorStart: 'yellow',
    //     colorEnd: 'red'

    // })
    .setClassToggle('.second-content', 'fade-in')
    .addTo(controller);



/*
========================
News Content Transitions
========================
*/

const newsGridIn = new ScrollMagic.Scene({
    triggerElement: '#news',
    triggerHook: 0.3,
    duration: '160%',
})
    // .addIndicators({
    //     name: 'news fade in'
    // })
    .setClassToggle('.news-grid', 'fade-in')
    .addTo(controller);




/* 
=========================
About Content Transitions
=========================
*/

const firstPin = new ScrollMagic.Scene({
    triggerElement: '.person-1-desktop',
    triggerHook: 0,
    duration: '700%'
})
    // .addIndicators({
    //     name: 'desktop pin in'
    // })
    .setPin('.person-1-desktop', { pushFollowers: false })
    .addTo(controller);

// const mobilePin = new ScrollMagic.Scene({
//     triggerElement: '.person-1-mobile',
//     triggerHook: 0,
//     duration: '700%'
// })
//     .addIndicators({
//         name: 'mobile pin in'
//     })
//     .setPin('.person-1-mobile', { pushFollowers: false })
//     .addTo(controller);

const personOneIn = new ScrollMagic.Scene({
    triggerElement: '.person-1-desktop',
    triggerHook: 0.7,
    duration: '170%'
})
    // .addIndicators({
    //     name: 'person 1 in'
    // })
    .setClassToggle('.part-1-desktop', 'fade-in')
    .addTo(controller);

const personTwoIn = new ScrollMagic.Scene({
    triggerElement: '.person-2-desktop',
    triggerHook: 0,
    duration: '100%'
})
    // .addIndicators({
    //     name: 'person 2 in'
    // })
    .setClassToggle('.part-2-desktop', 'fade-in')
    .addTo(controller);

const secondPin = new ScrollMagic.Scene({
    triggerElement: '.person-2-desktop',
    triggerHook: 0,
    duration: '100%'
})
    // .addIndicators({
    //     name: 'person 2 pin'
    // })
    .setPin('.person-2-desktop', { pushFollowers: false })
    .addTo(controller);

const personThreeIn = new ScrollMagic.Scene({
    triggerElement: '.person-3-desktop',
    triggerHook: 0,
    duration: '75%'
})
    // .addIndicators({
    //     name: 'person 3 in'
    // })
    .setClassToggle('.part-3-desktop', 'fade-in')
    .addTo(controller);

const thirdPin = new ScrollMagic.Scene({
    triggerElement: '.person-3-desktop',
    triggerHook: 0,
    duration: '50%'
})
    // .addIndicators({
    //     name: 'person-3-desktop pin in'
    // })
    .setPin('.person-3-desktop', { pushFollowers: false })
    .addTo(controller);

const processIn = new ScrollMagic.Scene({
    triggerElement: '.process-desktop',
    triggerHook: 0.2,
    duration: '100%'
})
    // .addIndicators({
    //     name: 'process container in'
    // })
    .setClassToggle('.process-1', 'fade-in')
    .addTo(controller);

const mouseOut = new ScrollMagic.Scene({
    triggerElement: '.process-container',
    triggerHook: 0.8
})
    // .addIndicators({
    //     name: 'mouse out'
    // })
    .setClassToggle('.about-mouse', 'fade-out')
    .addTo(controller);


/*
=================
    Contacts
================
*/
const contactPin = new ScrollMagic.Scene({
    triggerElement: '#contacts',
    triggerHook: 0,
    duration: '200%'
})
    // .addIndicators({
    //     name: 'about pin in'
    // })
    .setPin('#contacts', { pushFollowers: false })
    .addTo(controller);

// const mobileContactPin = new ScrollMagic.Scene({
//     triggerElement: '#contacts',
//     triggerHook: 0,
//     duration: '200%'
// })
//     .addIndicators({
//         name: 'contact pin in'
//     })
//     .setPin('#contacts.contact-img', { pushFollowers: false })
//     .addTo(controller);

const contactsOut = new ScrollMagic.Scene({
    triggerElement: '.partners-container',
    triggerHook: 0.9
})
    // .addIndicators({
    //     name: 'contacts out'
    // })
    .setClassToggle('.contact-container', 'fade-out')
    .addTo(controller);

const partnersIn = new ScrollMagic.Scene({
    triggerElement: '.partners-container',
    triggerHook: 0.9
})
    .setClassToggle('.partners-container', 'fade-in')
    .addTo(controller); 