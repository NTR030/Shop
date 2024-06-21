<template>
  <section v-if="!err" class="login">
    <BaseCard>
      <form autocomplete="off" @submit.prevent="submitLogin">
        <h3>登录</h3>
        <div>
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            autocomplete="off"
            v-model.trim="email"
          />
        </div>
        <div>
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            autocomplete="off"
            v-model="password"
          />
        </div>
        <input type="submit" value="确认" class="submit" :disabled="isSubmit" />
      </form>
    </BaseCard>
  </section>

  <Teleport to="body">
    <DiaLog
      :err="err"
      :msg="msg"
      @closeDialog="closeDialog"
      v-if="err"
    ></DiaLog>
  </Teleport>
</template>

<script>
import DiaLog from "../../components/ui/DiaLog.vue";
export default {
  components: {
    DiaLog,
  },

  data() {
    return {
      email: "",
      password: "",
      err: false,
      msg: "",
      isSubmit: false,
    };
  },
  methods: {
    async submitLogin() {
      this.isSubmit = true;
      const userObj = {
        email: this.email,
        password: this.password,
      };
      await this.$store.dispatch("user/getUser", userObj);
      this.isSubmit = false;
      this.err = this.$store.getters.isError;
      if (this.err) {
        this.msg = this.$store.getters.errorMsg;
        this.email = this.password = "";
      } else {
        this.$router.replace({ path: "/commodities" });
      }
    },
    closeDialog(val) {
      this.err = val;
    },
  },
};
</script>

<style scoped>
section.login {
  width: 50rem;
  margin: 20rem auto;
}

form {
  width: 30rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.3rem;
}

form div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  width: 100%;
  height: 2.3rem;
}

form div label {
  width: 7rem;
  align-self: flex-start;
}

form div input {
  align-self: normal;
}

form div input:focus {
  outline: none;
}

form .submit {
  align-self: flex-end;
  padding: 0.5rem 0.6rem;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
}
</style>
