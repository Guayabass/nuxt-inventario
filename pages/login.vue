<template>
<div className="relative w-full min-h-screen bg-white overflow-hidden m-0 p-0 box-border before:content-[''] before:absolute before:w-[2000px] before:h-[2000px] before:rounded-[50%] before:bg-[linear-gradient(-45deg,_#a9c354,_#c2eb3d)] before:top-[-10%] before:right-[48%] before:translate-y-[-50%]">
    <div className="absolute w-full h-full top-0 left-0">
        <div className="absolute top-[50%] left-[75%] translate-x-[-50%] translate-y-[-50%] w-[50%] grid grid-cols-[1fr]">
            <form action="" className="flex items-center justify-center flex-col col-start-1 col-end-2 row-start-1 row-end-2 px-[5rem] overflow-hidden z-[2]">
                <h2 className="text-[2.2rem] text-[#444] mb-[10px]">Sign in</h2>
                <div className="max-w-[380px] w-full h-[55px] bg-[#f0f0f0] my-[10px] rounded-[55px] grid grid-cols-[15%_85%] px-[.4rem]">
                    <i class="pi pi-user text-center leading-[55px] text-[#acacac] text-[1.1rem]"></i>
                    <input className="border-none outline-none bg-transparent leading-[1] font-semibold text-[1.1rem] text-[#333] placeholder-[#aaa] placeholder:font-medium" type="text" name="" id="" placeholder="Username">
                </div>
                <div className="max-w-[380px] w-full h-[55px] bg-[#f0f0f0] my-[10px] rounded-[55px] grid grid-cols-[15%_85%] px-[.4rem]">
                    <i class="pi pi-lock text-center leading-[55px] text-[#acacac] text-[1.1rem]"></i>
                    <input className="border-none outline-none bg-transparent leading-[1] font-semibold text-[1.1rem] text-[#333] placeholder-[#aaa] placeholder:font-medium" type="password" name="" id="" placeholder="Password"> 
                </div>
                <input className="w-[150px] h-[49px] border-none outline-none rounded-[49px] cursor-pointer bg-[#c2eb3d] text-[#fff] uppercase font-semibold my-[10px] duration-500 hover:bg-[#a9c354]" type="submit" value="Login">
            </form>
            <form action="" className="flex items-center justify-center flex-col col-start-1 col-end-2 row-start-1 row-end-2 px-[5rem] overflow-hidden z-[1] opacity-0">
                <h2 className="text-[2.2rem] text-[#444] mb-[10px]">Sign Up</h2>
                <div className="max-w-[380px] w-full h-[55px] bg-[#f0f0f0] my-[10px] rounded-[55px] grid grid-cols-[15%_85%] px-[.4rem]">
                    <i class="pi pi-user text-center leading-[55px] text-[#acacac] text-[1.1rem]"></i>
                    <input className="border-none outline-none bg-transparent leading-[1] font-semibold text-[1.1rem] text-[#333] placeholder-[#aaa] placeholder:font-medium" type="text" name="" id="" placeholder="Username">
                </div>
                <div className="max-w-[380px] w-full h-[55px] bg-[#f0f0f0] my-[10px] rounded-[55px] grid grid-cols-[15%_85%] px-[.4rem]">
                    <i class="pi pi-envelope text-center leading-[55px] text-[#acacac] text-[1.1rem]"></i>
                    <input className="border-none outline-none bg-transparent leading-[1] font-semibold text-[1.1rem] text-[#333] placeholder-[#aaa] placeholder:font-medium" type="text" name="" id="" placeholder="Email">
                </div>
                <div className="max-w-[380px] w-full h-[55px] bg-[#f0f0f0] my-[10px] rounded-[55px] grid grid-cols-[15%_85%] px-[.4rem]">
                    <i class="pi pi-lock text-center leading-[55px] text-[#acacac] text-[1.1rem]"></i>
                    <input className="border-none outline-none bg-transparent leading-[1] font-semibold text-[1.1rem] text-[#333] placeholder-[#aaa] placeholder:font-medium" type="password" name="" id="" placeholder="Password"> 
                </div>
                <input className="w-[150px] h-[49px] border-none outline-none rounded-[49px] cursor-pointer bg-[#c2eb3d] text-[#fff] uppercase font-semibold my-[10px] duration-500 hover:bg-[#a9c354]" type="submit" value="Login">
            </form>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
//import Wave from '@/assets/icons/wavesNegative.svg'
</script>
