<template>
    <div class="grid lg:grid-cols-2 grid-cols-1">
        <div class="order-2 lg:order-1">
            <div class="mt-16 flex flex-col">
                <h1 class="hover:animate-pulse md:text-7xl md:text-start text-4xl text-center text-shadow ">Transform Your
                    Vision into a Stunning Digital
                    Reality
                </h1>
                <h2 class="mt-9 md:text-4xl md:text-start text-2xl text-center">Expert Web Development Services Tailored to
                    Your
                    Needs</h2>
            </div>
        </div>
        <div class="order-1 lg:order-2">
            <div class="hidden sm:block mt-16 rounded-3xl bg-green-200  shadow-emerald-200 shadow-2xl">
                <div
                    class="rounded-3xl w-full bg-green-500 -translate-x-5 translate-y-5  shadow-emerald-200 shadow-2xl place-items-center">
                    <div class="items-center justify-center text-center">
                        <img src="~/assets/web.svg" class="mx-auto space-y-10 max-w-md " alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ClientOnly> <Particles class="absolute inset-0 pointer-events-none" :quantity="500" /></ClientOnly>
    <section>
        <div class="mt-20 mb-6">
            <h1 class="text-3xl">What we offer</h1>
        </div>
        <div class="mb-20">
            <ServiceCard/>
        </div>
    </section>

  
   

   
</template>

<style scoped>
/* .custom{
    font-size: 10rem
} */
.text-shadow {
    text-shadow: 0px 2px green;
}</style>
