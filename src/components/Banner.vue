<script setup lang="ts">
    import {ref, onMounted} from 'vue';
    import type {Ref} from 'vue'

    let screenW : Ref<number> = ref(window.innerWidth);
    let screenH : Ref<number> = ref(window.innerHeight);
    const animationSpeed = screenW.value/45;
    const fadeSpeed = 0.1;
    const contentTransparency = ref(0);

    function resetPoints(){
        mainPoints.p1x.value = 0;
        mainPoints.p1y.value = 0;
        mainPoints.p2x.value = 0;
        mainPoints.p2y.value = 0;
        mainPoints.p3x.value = 200;
        mainPoints.p3y.value = screenH.value/2;
        mainPoints.p4x.value = 0;
        mainPoints.p4y.value = screenH.value;
        mainPoints.p5x.value = 0;
        mainPoints.p5y.value = screenH.value;

        ///////////////////////////////////

        tealPoints.p1x.value = 0;
        tealPoints.p1y.value = 0;
        tealPoints.p2x.value = 0;
        tealPoints.p2y.value = 0;
        tealPoints.p3x.value = 200;
        tealPoints.p3y.value = screenH.value/2;
        tealPoints.p4x.value = 0;
        tealPoints.p4y.value = screenH.value;
        tealPoints.p5x.value = 0;
        tealPoints.p5y.value = screenH.value;

        ///////////////////////////////////

        purplePoints.p1x.value = 0;
        purplePoints.p1y.value = 0;
        purplePoints.p2x.value = 0;
        purplePoints.p2y.value = 0;
        purplePoints.p3x.value = 200;
        purplePoints.p3y.value = screenH.value/2;
        purplePoints.p4x.value = 0;
        purplePoints.p4y.value = screenH.value;
        purplePoints.p5x.value = 0;
        purplePoints.p5y.value = screenH.value;
    };

    //the main path for the content section of the page
    const mainpath : any = ref('');
    const mainPoints = {
        p1x: ref(0),
        p1y: ref(0),
        p2x: ref(0),
        p2y: ref(0),
        p3x: ref(200),
        p3y: ref(screenH.value/2),
        p4x: ref(0),
        p4y: ref(screenH.value),
        p5x: ref(0),
        p5y: ref(screenH.value),
    };
    function animateMainPath() {

        mainpath.value = 'M' + mainPoints.p1x.value + ' ' + mainPoints.p1y.value +
                         ' L' + (mainPoints.p2x.value+=animationSpeed) + ' ' + mainPoints.p2y.value +
                         ' L' + (mainPoints.p3x.value+=animationSpeed) + ' ' + mainPoints.p3y.value +
                         ' L' + (mainPoints.p4x.value+=animationSpeed) + ' ' + mainPoints.p4y.value +
                         ' L' + mainPoints.p5x.value + ' ' + mainPoints.p5y.value + ' Z';

        if(mainPoints.p3x.value <= (screenW.value/2)){
            requestAnimationFrame(animateMainPath);
        }else{
            animateContent();
        }
    }

    //decorative teal path
    const tealpath : any = ref('');
    const tealPoints = {
        p1x: ref(0),
        p1y: ref(0),
        p2x: ref(0),
        p2y: ref(0),
        p3x: ref(200),
        p3y: ref(screenH.value/2),
        p4x: ref(0),
        p4y: ref(screenH.value),
        p5x: ref(0),
        p5y: ref(screenH.value),
    };
    function animateTealPath() {

        tealpath.value = 'M' + tealPoints.p1x.value + ' ' + tealPoints.p1y.value +
                        ' L' + (tealPoints.p2x.value+=animationSpeed) + ' ' + tealPoints.p2y.value +
                        ' L' + (tealPoints.p3x.value+=animationSpeed) + ' ' + tealPoints.p3y.value +
                        ' L' + (tealPoints.p4x.value+=animationSpeed) + ' ' + tealPoints.p4y.value +
                        ' L' + tealPoints.p5x.value + ' ' + tealPoints.p5y.value + ' Z';

        if(tealPoints.p3x.value <= (screenW.value/2 + 100)){
            requestAnimationFrame(animateTealPath);
        }else{
            animateMainPath();
        }
    }
    //decorative purple path
    const purplepath : any = ref('');
    const purplePoints = {
        p1x: ref(0),
        p1y: ref(0),
        p2x: ref(0),
        p2y: ref(0),
        p3x: ref(200),
        p3y: ref(screenH.value/2),
        p4x: ref(0),
        p4y: ref(screenH.value),
        p5x: ref(0),
        p5y: ref(screenH.value),
    };
    function animatePurplePath() {

        purplepath.value = 'M' + purplePoints.p1x.value + ' ' + purplePoints.p1y.value +
                        ' L' + (purplePoints.p2x.value+=animationSpeed) + ' ' + purplePoints.p2y.value +
                        ' L' + (purplePoints.p3x.value+=animationSpeed) + ' ' + purplePoints.p3y.value +
                        ' L' + (purplePoints.p4x.value+=animationSpeed) + ' ' + purplePoints.p4y.value +
                        ' L' + purplePoints.p5x.value + ' ' + purplePoints.p5y.value + ' Z';

        if(purplePoints.p3x.value <= (screenW.value/2 + 200)){
            requestAnimationFrame(animatePurplePath);
        }else{
            animateTealPath();
        }
    }

    function onScreenResize(){
        screenW.value = window.innerWidth;
        screenH.value = window.innerHeight;
    }

    function animateContent(){
        contentTransparency.value += fadeSpeed;

        if(contentTransparency.value < 1){
            requestAnimationFrame(animateContent);
        }else{
            contentTransparency.value = 1;
        }
    }

    //on page load reset animation and play it
    onMounted(() => {
        resetPoints();
        mainpath.value = 'M0 0 L0 0 L 200 ' + screenH.value/2 + ' L0 ' + screenH.value + ' L0 ' + screenH.value + ' L0 0 Z';
        tealpath.value = 'M0 0 L0 0 L 200 ' + screenH.value/2 + ' L0 ' + screenH.value + ' L0 ' + screenH.value + ' L0 0 Z';
        purplepath.value = 'M0 0 L0 0 L 200 ' + screenH.value/2 + ' L0 ' + screenH.value + ' L0 ' + screenH.value + ' L0 0 Z';
        animatePurplePath();
        console.log(mainpath.value);
    });

    window.addEventListener("resize", onScreenResize);
</script>

<template>
    <div class="flex w-screen h-screen -z-10 overflow-hidden bg-banner-image">
        
        <div class="static flex flex-auto  w-full h-full">
            <svg class=" absolute top-0 left-0" height="100%" width="100%">
                <path :d="purplepath" fill="#F2DCF1AA"/>
                <path :d="tealpath" fill="#B0D1D9AA"/>
                <path :d="mainpath" fill="#010D00EE"/>
            </svg>
            <div class="absolute top-0 left-0 flex flex-col w-1/2 h-full items-center justify-center" :style="{opacity: contentTransparency}">
                <div class="flex w-1/2 h-1/2 rounded-full bg-main-headshot-image bg-center bg-cover" ></div>
                <h3 class="text-5xl text-white">Jordan Burger</h3>
                <h5 class="text-3xl text-white">Audio Engineer</h5>
            </div>
        </div>
    </div>
</template>

<style>

</style>