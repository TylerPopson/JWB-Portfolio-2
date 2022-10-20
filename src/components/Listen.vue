<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import type { Ref } from 'vue';
    impo
    type point = {x: Ref<number>, y: Ref<number>};

    const variance:number = 100;
    const visualizer: Ref<bar[]> = ref([]);
    let frame:HTMLElement | null = null;
    let fps: number = 3;
    let now: any;
    let then: any = Date.now();
    let interval: number = 1000/fps;
    let delta: number;
    let animateElem = document.querySelector('animate');

    let elapsed: number = 0;
    

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

        now = Date.now();
        delta = now - then;

        elapsed += delta;
        //visualizerUpdateCounter += delta;

        if (elapsed >= interval) {

            for (let i: number = 0; i<visualizer.value.length; i++){
                // visualizer.value[i].points.p1.y += 1;
                // visualizer.value[i].points.p2.y += 1;


                visualizer.value[i].points.p2.x = Math.random()*30-15 + Math.sin(i* (Math.PI/25))*100+100 ;

                if(visualizer.value[i].points.p1.y > frame.clientHeight){
                    visualizer.value[i].points.p1.y = 0;
                    visualizer.value[i].points.p2.y = 0;
                }
            }

            elapsed = 0;

        }

        then = now;
        requestAnimationFrame(animateVisualizer);
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
            animateVisualizer();
        }
    });



///////////////////////////////////////////////////////////////////////////////////////////////////////



var AudioFile = function (){
    this.length = 0; // Number of samples
    this.duration = 0; // Time in seconds
    this.sampleRate = 0; // Sample rate
    this.channels = 0; // Number of channels
    this.data = []; //Audio/Waveform data
};

var audioCtx = null;

class AudioEngine {
    constructor (){
        // All of the necessary audio control variables
        if(!audioCtx){
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();
        }

        // Will hold audio data waiting to be played
        this.buffer = null;

        // This will hold the decoded audio file upon completion
        this.decodedFile = new AudioFile();

        // Automatically create buffer upon finished decoding?
        this.autoCreateBuffer = true;

        // Specify this if you want to have a function recieve
        // the decoded audio, i.e. completionCallback(decodedFile);
        this.completionCallback = null;
    }

    // This will decode an audio file
    fileCallback (event){
        console.log("file callback");
        this.buffer = null;

        var reader = new FileReader();
        var file = event.target.files[0];
        reader.onload = this.loadCallback.bind(this);

        reader.readAsArrayBuffer(file);
    }

    // Called by fileCallback after file has been loaded
    loadCallback (file){
        console.log("load callback");
        var raw = file.target.result;
        audioCtx.decodeAudioData(raw, this.decodeCallback.bind(this));
    }

    // Called by loadCallback after file has been decoded
    decodeCallback (data){
        console.log("decode callback");
        var audioTemp = new AudioFile();

        audioTemp.length = data.length;
        audioTemp.duration = data.duration;
        audioTemp.sampleRate = data.sampleRate;
        audioTemp.channels = data.numberOfChannels;

        var arr = [];
        for(var i = 0; i < data.numberOfChannels; i++){
        arr.push(new Float32Array(data.length));
        data.copyFromChannel(arr[i], i);
        }

        audioTemp.data = arr.slice(0);
        this.decodedFile = audioTemp;

        if(this.autoCreateBuffer){
        var buffer = audioCtx.createBuffer(audioTemp.channels, audioTemp.length, audioTemp.sampleRate);

        var samples;
        for(var c = 0; c < audioTemp.channels; c++){
            samples = buffer.getChannelData(c);
            for(var i = 0; i < audioTemp.length; i++){
            samples[i] = this.decodedFile.data[c][i];
            }
        }

        this.buffer = buffer;
        }

        if(this.completionCallback){
        this.completionCallback(audioTemp);
        }
    }

    // Play data that is in buffer
    play(){
        if(this.buffer){
        var source = audioCtx.createBufferSource();
        var tmp = this.buffer.getChannelData(0);

        source.buffer = this.buffer;
        source.connect(audioCtx.destination);
        source.start(0);
        console.log("play");
        }
    }
}





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
                        
                    </line>
                </g>
            </svg>
            <h1 class="text-4xl font-overpassBold">Listen</h1>
        </div>

    </div>
    
</template>