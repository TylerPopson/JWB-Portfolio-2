<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
</script>

<template>
    <div
        id="about"
        class="flex flex-col md:flex-row bg-moog-black w-screen md:h-[80vh] overflow-hidden pb-10 md:pb-0"
    >
        <div
            class="flex flex-auto w-screen md:w-1/3 h-32 md:h-full bg-moog-blue items-center justify-center"
        >
            <h1 class="text-4xl font-overpassBold">About me</h1>
        </div>
        <div
            class="flex flex-col flex-auto w-screen md:w-2/3 items-center justify-center"
        >
            <p
                class="text-md text-white px-5 md:px-36 my-10 md:my-0 text-center"
            >
                Jordan Burger is an audio engineer from Greenville, IN who loves spending every day making, recording, and mixing music of all kinds with all kinds of people. Based out of Fort Wayne, IN, Jordan is happy to be supporting musicians from all over the world! Jordan's life has always been surrounded by music, with a background of playing cello and upright bass for orchestras and singing in choirs. Jordan was also entrenched in musical theatre, which eventually led him to the theatrical audio scene, and he began mixing and designing for live theatre. The thrill of mixing live music led to the studio world, where Jordan fell in love with the recording arts. At the Indiana University Jacobs School of Music, Jordan earned his B.S. in Audio Engineering and Sound Production, where he recorded and reinforced music across all genres and time periods from symphony orchestras to punk bands. Now, Jordan works as a Live Production Engineer for Sweetwater Sound, supporting a wide variety of live events and recording at Sweetwater HQ, as well as serving as the monitor engineer for the Sweetwater Performance Pavilion. Jordan loves all kinds of music, but is especially fond of prog, rock, showtunes, and anything with a jazz influence. More than anything though, Jordan loves meeting new people and bringing their music to life to share with the world.  Jordan can’t wait to meet you and help you record your next big project!
            </p>
            <div class="flex flex-col md:flex-row w-full px-10 md:px-36 mt-10">
                <div
                    class="bg-piano-image bg-cover bg-center h-52 w-full mb-5 md:mr-12"
                ></div>
                <div
                    class="bg-jordan-working-image bg-cover bg-center h-52 w-full mb-5 md:mr-12"
                ></div>
                <div
                    class="bg-badge-image bg-cover bg-center h-52 w-full"
                ></div>
            </div>
        </div>
    </div>
</template>
