<script setup lang="ts">

</script>

<template>
    <div id="contact" class="flex flex-col w-screen md:h-[30vh] bg-moog-blue items-center justify-center">

        <div class="flex w-screen h-32 md:h-1/5 items-center justify-center">
            <h1 class="text-4xl font-overpassBold">Contact</h1>
        </div>

        <div class="flex flex-col md:flex-row w-screen h-72 md:h-4/5">

            <div class="flex md:w-1/2 w-full h-full items-center justify-center md:py-5">
                <div class="flex h-full aspect-square bg-jordan-badge-image bg-center bg-contain bg-no-repeat"></div>
            </div>

            <div class="flex md:w-1/2 w-full justify-center md:justify-start items-center mb-5 md:mb-0">
                <ul>
                    <li><font-awesome-icon icon="fa-solid fa-location-dot"/> Louisville, KY</li>
                    <li><font-awesome-icon icon="fa-solid fa-envelope"/> jordanwburger@gmail.com</li>
                    <li>
                        <a href='https://instagram.com/ellilgrey?r=nametag' target="_blank" class="mr-1 hover:text-white">
                            <font-awesome-icon icon="fa-brands fa-instagram"/> 
                        </a>
                        <a href='https://www.facebook.com/jordanwburger' target="_blank" class="mx-1 hover:text-white">
                            <font-awesome-icon icon="fa-brands fa-facebook"/> 
                        </a>
                        <a href='https://soundcloud.com/jordan-burger-474132049' target="_blank" class="mx-1 hover:text-white">
                            <font-awesome-icon icon="fa-brands fa-soundcloud"/> 
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>