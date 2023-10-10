
<template>
    <div class="grid md:grid-cols-5 justify-center mt-10 flex-wrap ">

        <div class="col-span-3 col-start-2">
            <div class="text-center my-4">
                <h1 class="md:text-7xl text-4xl">Contact Us</h1>
                <p>Please fill out the form below to get in touch with us. We'll respond to your inquiry as soon as possible.</p>
            </div>
            <UCard>
                <form name="contact" action="/contact" method="post" netlify
                    netlify-honeypot="bot-field">
                    <!-- <form @submit="onSubmit()"> -->
                    <!-- // Hidden input to check for bots -->
                    <input type="hidden" name="contact" value="contact" />
                    <div class="my-3">
                        <label for="name">Name:</label>
                        <UInput v-model="form.name" />
                        <input type="text">
                    </div>
                    <div class="my-3">
                        <!-- <input type="email" name="email" required /> -->
                        <label for="email">Email:</label>
                        <UInput v-model="form.email" />
                        <input type="email">
                    </div>
                    <div class="my-3">
                        <!-- <textarea name="message" required></textarea> -->
                        <label for="message">Message:</label>
                        <UTextarea v-model="form.comment" />
                        <input type="text">

                    </div>
                    <div class="grid grid-cols-2 gap-5 text-center justify-center">
                        <button type="submit">submit</button>
                        <UButton block type="submit" value="Send message">Send</Ubutton>
                        <UButton block type="button" @click="openToast">toast</Ubutton>
                    </div>
                    
                </form>
            </UCard>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        toast: useToast(),
        timeout: 4000,
        formSuccess: false,
        router: useRouter(),
        form: {
            name: '',
            email: '',
            phone_num: '',
            comment: ''
        }
    }),

    methods: {
        onSubmit() {
            this.formSuccess = true;
            this.toast.add({ title: 'Form Submitted!', timeout: this.timeout })
            setTimeout(() => {
                this.router.push({ path: "/" });
            }, this.timeout);

            console.log(toRaw(this.form));
        },

        openToast() {
            this.toast.add({ title: 'Hello world!', })
        }
    }
}

</script>