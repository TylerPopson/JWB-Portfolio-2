<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Ref } from "vue";

onMounted(() => {});
</script>

<template>
    <div
        id="listen"
        class="flex flex-col-reverse md:flex-row w-screen h-auto md:h-screen bg-moog-black"
    >
        <div
            class="flex flex-col w-screen md:w-2/3 px-5 md:px-32 my-10 md:my-0 h-full bg-moog-black items-center justify-center"
        >
            <iframe
                width="100%"
                height="450"
                scrolling="no"
                frameborder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1986613200%3Fsecret_token%3Ds-0mLhrj50LOR&color=%23bf9663&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
            <div
                style="
                    font-size: 10px;
                    color: #bf9663;
                    line-break: anywhere;
                    word-break: normal;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    font-family:
                        Interstate,
                        Lucida Grande,
                        Lucida Sans Unicode,
                        Lucida Sans,
                        Garuda,
                        Verdana,
                        Tahoma,
                        sans-serif;
                    font-weight: 100;
                "
            >
                <a
                    href="https://soundcloud.com/user-896841882"
                    title="Jordan Burger"
                    target="_blank"
                    style="color: #cccccc; text-decoration: none"
                    >Jordan Burger</a
                >
                ·
                <a
                    href="https://soundcloud.com/user-896841882/sets/jordan-burger-portfolio/s-0mLhrj50LOR"
                    title="Jordan Burger - Portfolio"
                    target="_blank"
                    style="color: #cccccc; text-decoration: none"
                    >Jordan Burger - Portfolio</a
                >
            </div>
        </div>

        <div
            id="frame"
            class="flex relative w-screen md:w-1/3 h-32 md:h-full bg-moog-lavender items-center justify-center"
        >
            <div
                v-if="1"
                class="visualizer h-full w-1/3 absolute left-0 top-0 overflow-hidden"
            >
                <div v-for="n in 40" class="visualizer-bar"></div>
            </div>
            <h1 class="text-4xl font-overpassBold">Listen</h1>
        </div>
    </div>
</template>

<style scoped>
.visualizer div:nth-child(1) {
    animation-delay: -100ms;
}
.visualizer div:nth-child(2) {
    animation-delay: -200ms;
}
.visualizer div:nth-child(3) {
    animation-delay: -300ms;
}
.visualizer div:nth-child(4) {
    animation-delay: -400ms;
}
.visualizer div:nth-child(5) {
    animation-delay: -500ms;
}
.visualizer div:nth-child(6) {
    animation-delay: -600ms;
}
.visualizer div:nth-child(7) {
    animation-delay: -700ms;
}
.visualizer div:nth-child(8) {
    animation-delay: -800ms;
}
.visualizer div:nth-child(9) {
    animation-delay: -900ms;
}
.visualizer div:nth-child(10) {
    animation-delay: -1000ms;
}
.visualizer div:nth-child(11) {
    animation-delay: -1100ms;
}
.visualizer div:nth-child(12) {
    animation-delay: -1200ms;
}
.visualizer div:nth-child(13) {
    animation-delay: -1300ms;
}
.visualizer div:nth-child(14) {
    animation-delay: -1400ms;
}
.visualizer div:nth-child(15) {
    animation-delay: -1500ms;
}
.visualizer div:nth-child(16) {
    animation-delay: -1600ms;
}
.visualizer div:nth-child(17) {
    animation-delay: -1700ms;
}
.visualizer div:nth-child(18) {
    animation-delay: -1800ms;
}
.visualizer div:nth-child(19) {
    animation-delay: -1900ms;
}
.visualizer div:nth-child(20) {
    animation-delay: -0ms;
}
.visualizer div:nth-child(21) {
    animation-delay: -100ms;
}
.visualizer div:nth-child(22) {
    animation-delay: -200ms;
}
.visualizer div:nth-child(23) {
    animation-delay: -300ms;
}
.visualizer div:nth-child(24) {
    animation-delay: -400ms;
}
.visualizer div:nth-child(25) {
    animation-delay: -500ms;
}
.visualizer div:nth-child(26) {
    animation-delay: -600ms;
}
.visualizer div:nth-child(27) {
    animation-delay: -700ms;
}
.visualizer div:nth-child(28) {
    animation-delay: -800ms;
}
.visualizer div:nth-child(29) {
    animation-delay: -900ms;
}
.visualizer div:nth-child(30) {
    animation-delay: -1000ms;
}
.visualizer div:nth-child(31) {
    animation-delay: -1100ms;
}
.visualizer div:nth-child(32) {
    animation-delay: -1200ms;
}
.visualizer div:nth-child(33) {
    animation-delay: -1300ms;
}
.visualizer div:nth-child(34) {
    animation-delay: -1400ms;
}
.visualizer div:nth-child(35) {
    animation-delay: -1500ms;
}
.visualizer div:nth-child(36) {
    animation-delay: -1600ms;
}
.visualizer div:nth-child(37) {
    animation-delay: -1700ms;
}
.visualizer div:nth-child(38) {
    animation-delay: -1800ms;
}
.visualizer div:nth-child(39) {
    animation-delay: -1900ms;
}
.visualizer div:nth-child(40) {
    animation-delay: -0ms;
}
</style>
