<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import type { Ref } from 'vue';
    type point = {x: number, y: number};

    const variance:number = 100;
    const visualizer: Ref<bar[]> = ref([]);

    class bar{
        points: {p1:point, p2:point};
        color: string;
        stepAmount: Ref<number>;

        constructor(height:number, color:string){
            this.points = {
                p1: {x: 0, y: height},
                p2: {x: Math.random()* 200, y: height}
            }

            this.color = color;

            this.stepAmount = ref(0);
        }

        animate = () => {
            
            let val:number = 0;

            if(this.points.p2.y >= 300){
                this.stepAmount.value = -1 * Math.abs(Math.random() * variance - (variance/2));
            }
            else if(this.points.p2.y <= 0){
                this.stepAmount.value = Math.abs(Math.random() * variance - (variance/2));
            }
            else{
                this.stepAmount.value = Math.random() * variance - (variance/2);
            }
        }
    }

    onMounted(() => {
        for (let i = 0; i < 100; i++) {
            visualizer.value.push(new bar(i, "#000000"));
            visualizer.value[i].animate();
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

        <div class="flex relative w-screen md:w-1/3 h-32 md:h-full bg-moog-lavender items-center justify-center">
            <svg class="flex absolute left-0 top-0 h-full w-2/5 bg-blue" height="100%" width="33%" v-for="item in visualizer">
                <line :x1="item.points.p1.x" :y1="item.points.p1.y" :x2="item.points.p2.x" :y2="item.points.p2.y" style="stroke:rgb(0,0,0);stroke-width:2">
                    <animate
                        attributeName="x2"
                        :values="item.point.p2.y;item.stepAmount;items.points.p2.y"
                        repeatCount="indefinite"
                        dur="1s"
                        :onrepeat="item.animate"
                    />
                </line>
            </svg>
            <h1 class="text-4xl font-overpassBold">Listen</h1>
        </div>

    </div>
    
</template>