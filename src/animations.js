function animations() {

    let page = document.body.id;
    console.log(page);

    switch (page) {
        case 'home':
            let controller = new ScrollMagic.Controller();
            let timeLine = new TimelineMax();

            timeLine
            .from('#heroHeading', .5, {
                opacity: 0,
                y: '75px',
                delay: 1,
                ease: Power1.ease
            },)

            .from('#heroText', .5, {
                opacity: 0,
                y: '50px',
                ease: Power1.ease
            })

            .from('#heroCta', .25, {
                opacity: 0,
                ease: Power2.ease
            })

            .from('#heroBg', .5, {
                scale: '1.2',
                ease: Power1.easeOut
            }, '-=2')

            let scene = new ScrollMagic.Scene({
                triggerHook: 0
            })

            .setTween(timeLine)
            .addTo(controller)

            //Timeline 2
            let timeLine2 = new TimelineMax();

            timeLine2
            .from('#homeAboutHeading', .5, {
                y: '100px',
                opacity: 0,
                ease: Power1.ease 
            })

            .from('.home-about-text-1', .5, {
                y: '50px',
                opacity: 0,
                ease: Power1.ease, 
            })

            .from('.home-about-text-2', .5, {
                y: '50px',
                opacity: 0,
                ease: Power1.ease, 
            }, '-=.25')

            .from('#homeAboutCta', .5, {
                y: '50px',
                opacity: 0,
                ease: Power1.ease, 
            }, '-=.5')

            let scene2 = new ScrollMagic.Scene({
                triggerElement: '#heroText',
                triggerHook: 0
            })

            .setTween(timeLine2)
            .addTo(controller)

            //Timeline 3
            let timeLine3 = new TimelineMax();

            timeLine3
            .from('#implementedProjectsHeading', .5, {
                y: '100px',
                opacity: 0,
                ease: Power1.ease
            })

            .staggerFrom(['.top-line, .bottom-line'], .15, {
                scaleY: 0,
                ease: Power1.ease
            }, .15)

            .staggerFrom(['.image, .ipHeading'], .5, {
                opacity: 0,
                y: '25px',
                ease: Power1.ease
            }, .5)

            let scene3 = new ScrollMagic.Scene({
                triggerElement: '#homeAboutCta',
                triggerHook: 0
            })

            .setTween(timeLine3)
            .addTo(controller)

            //Timeline 4
            let timeLine4 = new TimelineMax();

            timeLine4
            .from('#homeServicesHeading', .5, {
                opacity: 0,
                y: '100px',
                ease: Power1.ease
            })

            .staggerFrom(['.accordion__item'], .5, {
                y: '-50px',
                opacity: 0,
                ease: Power1.ease
            }, .2)

            .from('#homeServicesCta', .25, {
                opacity: 0,
                ease: Power1.ease
            })

            let scene4 = new ScrollMagic.Scene({
                triggerElement: '#ipCta',
                triggerHook: 0
            })

            .setTween(timeLine4)
            .addTo(controller)

            //Timeline 5
            let timeLine5 = new TimelineMax();

            timeLine5
            .staggerFrom(['.instagram__top, .instagram__bottom'], .25, {
                opacity: 0,
                y: '50px',
                ease: Power1.ease
            }, .5)
            
            .staggerFrom(['.instagram-post'], .5, {
                opacity: 0,
                ease: Power1.ease
            }, .2)

            let scene5 = new ScrollMagic.Scene({
                triggerElement: '.accordion',
                triggerHook: 0
            })

            .setTween(timeLine5)
            .addTo(controller)

            //Timeline 6
            let timeLine6 = new TimelineMax();

            timeLine6
            .from('#questionsHeading', .5, {
                y: '-50px',
                opacity: 0,
                ease: Power1.ease
            })

            .staggerFrom(['.email, #questionsText'], .25, {
                opacity: 0,
                ease: Power1.ease
            }, .15)



            let scene6 = new ScrollMagic.Scene({
                triggerElement: '#instagramGrid',
                triggerHook: 0
            })

            .setTween(timeLine6)
            .addTo(controller)
            break;

        case 'projects':
            let controller2 = new ScrollMagic.Controller();
            let timeLineIP = new TimelineMax();

            timeLineIP
            .staggerFrom(['#ipHeading, #ipText'], 1, {
                opacity: 0,
                y: '-50px',
                ease: Power1.ease
            }, .25,)

            .staggerFrom(['.project'], .5, {
                opacity: 0,
                ease: Power1.ease
            }, .35)

            let sceneIP = new ScrollMagic.Scene({
                triggerHook: 0
            })

            .setTween(timeLineIP)
            .addTo(controller2)

            //TimelineIP2
            let timeLineIP2 = new TimelineMax();

            timeLineIP2
            .from('#questionsHeading', .5, {
                y: '-50px',
                opacity: 0,
                ease: Power1.ease
            })

            .staggerFrom(['.questions__item'], .25, {
                opacity: 0,
                ease: Power1.ease
            }, .15)


            let sceneIP2 = new ScrollMagic.Scene({
                triggerElement: '.questions',
                triggerHook: '-15%'
            })

            .setTween(timeLineIP2)
            .addTo(controller2)
            break;

        case 'services':
            let controller3 = new ScrollMagic.Controller();
            let timeLineS = new TimelineMax();

            timeLineS
            .staggerFrom(['#servicesHeading, #servicesText'], 1.5, {
                opacity: 0,
                y: '50px',
                ease: Power3.ease
            }, .25)

            .from('#services__img--1', .5, {
                opacity: 0,
                ease: Power3.ease
            })

            .from('.services__content--1', .5, {
                y: '75px',
                opacity: 0,
                ease: Power1.ease
            })

            let sceneS = new ScrollMagic.Scene({
                triggerHook: '0'
            })

            //TimeLineS-2
            let timeLineS2 = new TimelineMax();

            timeLineS2
            .from('.services__content--2', .5, {
                y: '75px',
                opacity: 0,
                ease: Power1.ease
            })

            .from('#services__img--2', .5, {
                opacity: 0,
                ease: Power3.ease
            })


            let sceneS2 = new ScrollMagic.Scene({
                triggerElement: '#sg2',
                triggerHook: '15%'
            })

            .setTween(timeLineS2)
            .addTo(controller3)

            //TimeLineS - 3
            let timeLineS3 = new TimelineMax();

            timeLineS3
            .from('#services__img--3', .5, {
                opacity: 0,
                ease: Power3.ease
            })
            
            .from('.services__content--3', .5, {
                y: '75px',
                opacity: 0,
                ease: Power1.ease
            })
            let scrneS3 = new ScrollMagic.Scene({
                triggerElement: '#sg3',
                triggerHook: '15%'
            })

            .setTween(timeLineS3)
            .addTo(controller3)

            //TimeLineS - 4
            let timeLineS4 = new TimelineMax();

            timeLineS4
            .from('.services__content--4', .5, {
                y: '75px',
                opacity: 0,
                ease: Power1.ease
            })

            .from('#services__img--4', .5, {
                opacity: 0,
                ease: Power3.ease
            })
            
            let scrneS4 = new ScrollMagic.Scene({
                triggerElement: '#sg4',
                triggerHook: '15%'
            })

            .setTween(timeLineS4)
            .addTo(controller3)

            //TimeLineS - 5
            let timeLineS5 = new TimelineMax();

            timeLineS5
            .staggerFrom(['.accordion__item'], .5, {
                y: '-50px',
                opacity: 0,
                ease: Power1.ease
            }, .2)
            
            let scrneS5 = new ScrollMagic.Scene({
                triggerElement: '.accordion',
                triggerHook: '15%'
            })

            .setTween(timeLineS5)
            .addTo(controller3)

            //TimeLineS - 6
            let timeLineS6 = new TimelineMax();

            timeLineS5
            .from('#questionsHeading', .5, {
                y: '-50px',
                opacity: 0,
                ease: Power1.ease
            })

            .staggerFrom(['.questions__item'], .25, {
                opacity: 0,
                ease: Power1.ease
            }, .15)

            
            let scrneS6 = new ScrollMagic.Scene({
                triggerElement: '.questions',
                triggerHook: '15%'
            })

            .setTween(timeLineS6)
            .addTo(controller3)
            break;

        case 'about':
            let controller4 = new ScrollMagic.Controller();
            let timeLineA = new TimelineMax();

            timeLineA
            .from('#aboutHeading', 1.5, {
                y: '75px',
                opacity: 0,
                ease: Power1.ease
            })

            .from('.about-text', .5, {
                y: '75px',
                opacity: 0,
                ease: Power1.ease
            })

            .from('#aboutBg', .5, {
                height: '0%',
                //transformOrigin: "100% 0%",
                ease: Power1.ease
            })

            .from('#aboutTextBox', .5, {
                scaleY: 0,
                transformOrigin: "100% 0%",
                ease: Power1.ease
            })

            let sceneA = new ScrollMagic.Scene({
                triggerHook: '0'
            })

            .setTween(timeLineA)
            .addTo(controller4)

            // TimelineA - 2
            let timeLineA2 = new TimelineMax();

            timeLineA2
            .from('#workApproachHeading', .5, {
                y: '50px',
                opacity: 0,
                ease: Power1.ease
            })

            .from('.work-approach__list', .5, {
                y: '50px',
                opacity: 0,
                ease: Power1.ease
            })

            .from('#aboutCta', .5, {
                opacity: 0,
                ease: Power1.ease
            })

            let sceneA2 = new ScrollMagic.Scene({
                triggerElement: '.work-approach',
                triggerHook: '15%'
            })

            .setTween(timeLineA2)
            .addTo(controller4)

            // TimelineA - 3
            let timeLineA3 = new TimelineMax();
            
            timeLineA3
            .from('#questionsHeading', .5, {
                y: '50px',
                opacity: 0,
                ease: Power1.ease
            })

            .staggerFrom(['.questions__item'], .25, {
                opacity: 0,
                ease: Power1.ease
            }, .15)

            let sceneA3 = new ScrollMagic.Scene({
                triggerElement: '.work-approach__list',
                triggerHook: 0
            })

            .setTween(timeLineA3)
            .addTo(controller4)
            break;
            
        case 'contact':
            let controller5 = new ScrollMagic.Controller();
            let timeLineC = new TimelineMax();

            timeLineC
            .from('#contactHeading', 1, {
                opacity: 0,
                y: '75px',
                ease: Power1.ease
            })

            .staggerFrom(['.contact-text, .email'], .5, {
                opacity: 0,
                ease: Power1.ease
            }, .15)

            .staggerFrom(['.social-item'], .5, {
                opacity: 0,
                y: '25px',
                ease: Power1.ease
            }, .15)

            let sceneC = new ScrollMagic.Scene({
                triggerHook: 0
            })

            .setTween(timeLineC)
            .addTo(controller5)

            //TimelineC - 2

            let timeLineC2 = new TimelineMax();

            timeLineC2
            .staggerFrom(['.contact__top, .contact__bottom'], .5, {
                opacity: 0,
                ease: Power1.ease
            }, .15)

            let sceneC2 = new ScrollMagic.Scene({
                triggerElement: '.contact',
                triggerHook: '15%'
            })

            .setTween(timeLineC2)
            .addTo(controller5)


            break;
    
        default:
            break;
    }

};

animations();


export default animations;