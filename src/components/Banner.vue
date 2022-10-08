<script setup lang="ts">
    import {ref, onMounted} from 'vue';
    import type {Ref} from 'vue'

    //define a class to handle the animated background pentagons
    class Pentagon{
        points : {p1x: Ref<number>, p1y: Ref<number>, p2x: Ref<number>, p2y: Ref<number>, p3x: Ref<number>, p3y: Ref<number>, p4x: Ref<number>, p4y: Ref<number>, p5x: Ref<number>, p5y: Ref<number>};
        stopPoint : number;
        path : Ref<string>;
        animationSpeed : number = screenW.value/400;
        easingRate : number = 0.1;

        constructor(stopPoint: number){
            this.points = {
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
            this.stopPoint = stopPoint;
            this.path = ref('M' + this.points.p1x.value + ' ' + this.points.p1y.value +
                        ' L' + this.points.p2x.value + ' ' + this.points.p2y.value +
                        ' L' + this.points.p3x.value + ' ' + this.points.p3y.value +
                        ' L' + this.points.p4x.value + ' ' + this.points.p4y.value +
                        ' L' + this.points.p5x.value + ' ' + this.points.p5y.value + ' Z');
        }

        public reset(stopPoint : number){

            this.path.value = 'M' + this.points.p1x.value + ' ' + this.points.p1y.value +
                        ' L' + this.points.p2x.value + ' ' + this.points.p2y.value +
                        ' L' + this.points.p3x.value + ' ' + this.points.p3y.value +
                        ' L' + this.points.p4x.value + ' ' + this.points.p4y.value +
                        ' L' + this.points.p5x.value + ' ' + this.points.p5y.value + ' Z';

            this.points.p1x.value = 0;
            this.points.p1y.value = 0;
            this.points.p2x.value = 0;
            this.points.p2y.value = 0;
            this.points.p3x.value = 200;
            this.points.p3y.value = screenH.value/2;
            this.points.p4x.value = 0;
            this.points.p4y.value = screenH.value;
            this.points.p5x.value = 0;
            this.points.p5y.value = screenH.value;

            this.easingRate = 0.1;
            this.stopPoint = stopPoint;
        }

        animate = () => {

            this.easingRate += 0.01;

            this.path.value = 'M' + this.points.p1x.value + ' ' + this.points.p1y.value +
                         ' L' + (this.points.p2x.value+=(this.animationSpeed/this.easingRate)) + ' ' + this.points.p2y.value +
                         ' L' + (this.points.p3x.value+=(this.animationSpeed/this.easingRate)) + ' ' + this.points.p3y.value +
                         ' L' + (this.points.p4x.value+=(this.animationSpeed/this.easingRate)) + ' ' + this.points.p4y.value +
                         ' L' + this.points.p5x.value + ' ' + this.points.p5y.value + ' Z';

            if(this.points.p3x.value <= this.stopPoint){
                requestAnimationFrame(this.animate);
            }

        }
    }

    let screenW : Ref<number> = ref(window.innerWidth);
    let screenH : Ref<number> = ref(window.innerHeight);
    const fadeSpeed = 0.1;
    const contentTransparency = ref(0);
    
    //define instances of the packground pentagons
    let mainPentagon : Pentagon = new Pentagon(screenW.value/2);
    let tealPentagon : Pentagon = new Pentagon(screenW.value/2 + 100);
    let purplePentagon : Pentagon = new Pentagon(screenW.value/2 + 200);

    //helper functions
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    function resetPoints(){
        mainPentagon.reset(screenW.value/2);
        tealPentagon.reset(screenW.value/2 + 100);
        purplePentagon.reset(screenW.value/2 + 200);
    };

    async function animatePoints(){
        purplePentagon.animate();
        await sleep(300);
        tealPentagon.animate();
        await sleep(300);
        mainPentagon.animate();
    };

    function onScreenResize(){
        screenW.value = window.innerWidth;
        screenH.value = window.innerHeight;
        resetPoints();
        animatePoints();
        animateContent();
    }

    //animates the fade in of the page content
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
        animatePoints();
        animateContent();
    });

    window.addEventListener("resize", onScreenResize);
</script>

<template>
    <div id="home" class="flex w-screen h-screen -z-10 overflow-hidden bg-banner-image bg-fixed">
        
        <div class="static flex flex-auto  w-full h-full">
            <svg class=" absolute top-0 left-0" height="100%" width="100%">
                <path :d="purplePentagon.path.value" fill="#F2DCF1AA"/>
                <path :d="tealPentagon.path.value" fill="#B0D1D9AA"/>
                <path :d="mainPentagon.path.value" fill="#010D00"/>
            </svg>
            <div class="absolute top-0 left-0 flex flex-col w-full md:w-1/2 h-full items-center justify-center" :style="{opacity: contentTransparency}">
                <div class="flex w-5/6 md:w-1/2  aspect-square rounded-full bg-main-headshot-image bg-center bg-cover" ></div>
                <h3 class="text-5xl text-white font-overpassRegular">Jordan Burger</h3>
                <h5 class="text-3xl text-white font-overpass-regular">Audio Engineer</h5>
            </div>
        </div>
    </div>
</template>

<style>

</style>