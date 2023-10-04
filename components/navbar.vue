
import { UIcon } from '#ui-colors/components';

import { Icon } from '#ui-colors/components';

import { Icon } from '#ui-colors/components';

import { Icon } from '#ui-colors/components';

import { _divideColor } from '#tailwind-config/theme';

import { _divideColor } from '#tailwind-config/theme';
<script setup>
const isOpen = ref(false)
</script>

<template>
    <div class="flex dark:bg-transparent items-center justify-between shadow-emerald-200 shadow-lg">
        <div class="sm:mx-4 mx-2">
            <h1 class="text-2xl">OceanMintDigital</h1>
        </div>
        <div class="space-x-4 mx-6 my-6">
            <div class="hidden sm:block space-x-4">
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="about">About</NuxtLink>
            </div>
            
            <div class="block sm:hidden">
                <!-- <UButton label="Open" @click="isOpen = true" /> -->
                <Icon @click="isOpen = true"  class="animate-pulse" name="line-md:close-to-menu-alt-transition" size="1.5rem" />
            <USlideover v-model="isOpen">
                <UCard class="flex flex-col flex-1"
                    :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                    <template #header>
                        <!-- Content -->
                        <div class="flex justify-between">
                            <h1>OceanMintDigital</h1>
                            <Icon @click="isOpen = false"  class="animate-pulse" name="line-md:close-small" size="1.5rem" />
                        </div>
                    </template>
                    <!-- Content -->
                    <ul class="space-y-6">
                        <li><NuxtLink to="/" @click="isOpen = false">Home</NuxtLink></li>
                        <li><NuxtLink to="about"  @click="isOpen = false">About</NuxtLink></li>
                    </ul>
                    <template #footer>
                        <!-- Content -->
                    </template>
                </UCard>
            </USlideover>
            </div>
            
        </div>
    </div>
    <div>

    </div>
</template>