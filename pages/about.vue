<template>
     <div class="bg-white mt-7">
        <h1 class="text-black">abc</h1>
        <div class="bg-yellow-200">
            <UButton icon="i-heroicons-pencil-square" size="sm" color="primary" variant="solid" label="Button" :trailing="false" />


      
                <UCard :ui="{body: {background: 'bg-green-800 dark:bg-green-500'}, background: 'bg-green-800 dark:bg-green-500' }">
                    <template #header>
                        this is header
                    </template>

                    <h1 class="text-4xl text-white">abc</h1>

                    <template #footer />
                </UCard>
          
        </div>
    </div>
</template>