<script setup lang="ts">
    let screenW : Number = 0;
    let screenH : Number = 0;

    let startpath : String = "M0 0 L200 0 L250 50 L200 100 L0 100 L0 0 Z"
</script>

<template>
    <div class="flex w-screen h-screen -z-10 overflow-hidden">
        <div class="flex flex-auto  w-1/2">
            <svg height="100%" width="100%">
                <path d=""/>
            </svg>
        </div>
        <div class="flex flex-auto w-1/2">
        </div>
    </div>
</template>