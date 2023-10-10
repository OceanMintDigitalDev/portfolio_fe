
<template>
    <div class="grid md:grid-cols-5 justify-center mt-10 flex-wrap ">

        <div class="col-span-3 col-start-2">
            <div class="text-center my-4">
                <h1 class="md:text-7xl text-4xl">Contact Us</h1>
                <p>Please fill out the form below to get in touch with us. We'll respond to your inquiry as soon as possible.</p>
            </div>
            <UCard>
                <form name="contact" action="/contact" data-netlify="true" data-netlify-honeypot="bot-field" method="POST">
                    <!-- <form @submit="onSubmit()"> -->
                    <!-- // Hidden input to check for bots -->
                    <input type="hidden" name="form-name" value="contact" />
                    <div class="my-3">
                        <label for="name">First Name:</label>
                        <UInput name="first_name" id="first_name" v-model="form.name" />
                        <!-- <input name="last" type="text"> -->
                    </div>
                    <div class="my-3">
                        <label for="name">Last Name:</label>
                        <UInput name="last_name" id="last_name" v-model="form.last_name" />
                        <!-- <input name="last" type="text"> -->
                    </div>
                    <div class="my-3">
                        <!-- <input type="email" name="email" required /> -->
                        <label for="email">Email:</label>
                        <UInput name="email" id="email" v-model="form.email" />
                    </div>
                    <!-- <div class="my-3">
                        <label for="message">Message:</label>
                        <UTextarea name="message" id="message" v-model="form.comment" />
                    </div> -->
                    <div class="grid grid-cols-2 gap-5 text-center justify-center">
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
            last_name: '',
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