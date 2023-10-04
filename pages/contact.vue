
<template>
    <form @submit.prevent="onSubmit" name="contact" action="/contact" method="post" netlify netlify-honeypot="bot-field">
        <!-- <form @submit="onSubmit()"> -->
        <!-- // Hidden input to check for bots -->
        <input type="hidden" name="form-name" value="contact" />
        <div>
            <label for="name">Name:</label>
            <UInput v-model="form.name" />
        </div>
        <div>
            <!-- <input type="email" name="email" required /> -->
            <label for="email">Email:</label>
            <UInput v-model="form.email"  />
        </div>
        <div>
            <!-- <textarea name="message" required></textarea> -->
            <label for="message">Message:</label>
            <UTextarea v-model="form.comment"  />
            
        </div>
        <UButton type="submit" value="Send message">Send</Ubutton>
            <UButton type="button" @click="openToast">toast</Ubutton>
                
    </form>
  

</template>

<script>
    export default{
        data: () => ({
            toast: useToast(),
            formSuccess : false,
            form:{
                name: '',
                email: '',
                phone_num: '',
                comment: ''
            }
        }),

        methods: {
            onSubmit(){
                this.formSuccess = true;
                console.log(toRaw(this.form));
            },

            openToast(){
                this.toast.add({ title: 'Hello world!', })
            }
        }
    }

</script>