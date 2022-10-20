<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import type { Ref } from 'vue';
    type point = {x: Ref<number>, y: Ref<number>};

    const variance:number = 100;
    const visualizer: Ref<bar[]> = ref([]);
    let frame:HTMLElement | null = null;
    let fps: number = 10;
    let now: any;
    let then: any = Date.now();
    let interval: any = 1000/fps;
    let delta: any;
    let animateElem = document.querySelector('animate');
    

    class bar{
        id: number;
        points: {p1:point, p2:point};
        color: string;
        stepAmount: Ref<number>;
        target:Ref<number> = ref(Math.random()*200);

        constructor(id:number, height:number, color:string){
            this.points = {
                p1: {x: ref(0), y: ref(height)},
                p2: {x: ref(Math.random()*300-150), y: ref(height)}
            }

            this.color = color;

            this.stepAmount = ref(0);

            this.id = id;
        }

        randomize = () => {
            
            this.target.value = Math.random()*200;
        }
    }

    function animateVisualizer(){
        
        requestAnimationFrame(animateVisualizer);

        now = Date.now();
        delta = now - then;

        if (delta > interval) {
            for (let i: number = 0; i<visualizer.value.length; i++){
                // visualizer.value[i].points.p1.y += 1;
                // visualizer.value[i].points.p2.y += 1;

                // visualizer.value[i].points.p2.x = Math.random()*30-15 + Math.sin(i* (Math.PI/25))*100+100 ;

                // if(visualizer.value[i].points.p1.y > frame.clientHeight){
                //     visualizer.value[i].points.p1.y = 0;
                //     visualizer.value[i].points.p2.y = 0;
                // }
            }
        }
    }

    function rand(){
        console.log("here");
        for (let i: number = 0; i<visualizer.value.length; i++){
                 visualizer.value[i].target.value = Math.random()*200;
                
            }
    }

    onMounted(() => {

        frame = document.getElementById('frame');
        if(frame != null){
            for (let i = 0; i < 100; i++) {
                visualizer.value.push(new bar(i, i * (frame.clientHeight / 100), "#000000"));
            }
            //animateVisualizer();
            animateElem = document.querySelector('animate');
            animateElem.addEventListener('endEvent', rand)
        }
    });

</script>

<template>
    <div id="listen" class="flex flex-col-reverse md:flex-row w-screen h-auto md:h-screen bg-moog-black">
        <div class="flex flex-col w-screen md:w-2/3 px-5 md:px-32 my-10 md:my-0 h-full bg-moog-black items-center justify-center">

            <iframe class="" style="border-radius:12px" src="https://open.spotify.com/embed/album/5FCefVJ1ACpDxruisklkE3?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="true"></iframe>
            <iframe class="" style="border-radius:12px" src="https://open.spotify.com/embed/album/5PJspByunI4lcrEwcOcvv4?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="true"></iframe>
            
            <div class="flex flex-col md:flex-row w-full items-center justify-center">

                <div class="text-white font-overpassBold w-full md:w-1/2 text-center text-5xl">
                    <h1>Listen On Soundcloud:</h1>
                </div>

                <a href='https://soundcloud.com/jordan-burger-474132049' target="_blank" class="text-white hover:text-moog-blue w-full md:w-1/2 text-center text-9xl transition-colors duration-300">
                    <font-awesome-icon icon="fa-brands fa-soundcloud" class=""/>
                </a>
            </div>

        </div>

        <div id="frame" class="flex relative w-screen md:w-1/3 h-32 md:h-full bg-moog-lavender items-center justify-center">
            <svg  class="flex absolute left-0 top-0 h-full w-2/5 bg-blue" height="100%" width="33%">
                <defs>
                    <linearGradient id='gradient1' x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" style="stop-color:#010d00;" />
                        <!-- <stop offset="75%" style="stop-color:#B0D1D9;" /> -->
                        <stop offset="75%" style="stop-color:#BF9663;" />
                    </linearGradient>
                </defs>
                <g v-for="item in visualizer">
                    <line id='bar' :x1="item.points.p1.x" :y1="item.points.p1.y" :x2="item.points.p2.x" :y2="item.points.p2.y" stroke="url(#gradient1)" style="stroke:url(#gradient1);stroke-width:6">
                        <animate
                            
                            attributeName="x2"
                            fill="freeze"
                            :to="item.target"
                            dur="1s" 
                            repeatCount="infinite"
                        />
                    </line>
                </g>
            </svg>
            <h1 class="text-4xl font-overpassBold">Listen</h1>
        </div>

    </div>
    
</template>