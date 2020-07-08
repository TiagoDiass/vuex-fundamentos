<template>
  <Painel titulo="Loja Virtual" verde>
    <div class="loja">
      <span>Adicionar</span>
      <input type="number" v-model.number="form.quantidade" />
      <span>itens de <strong>R$</strong></span>
      <input type="number" v-model.number="form.preco" />
      <button @click="adicionar">Adicionar</button>
    </div>
  </Painel>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data: () => ({
    sequencia: 1,
    form: {
      preco: 9.99,
      quantidade: 1,
    },
  }),

  mounted() {
    this.form.preco = this.preco;
    this.form.quantidade = this.quantidade;
  },

  methods: {
    ...mapActions({
      adicionarProduto: 'adicionarProduto',
    }),

    adicionar() {
      const produto = {
        id: this.sequencia,
        nome: `Produto ${this.sequencia}`,
        quantidade: this.form.quantidade,
        preco: this.form.preco,
      };

      this.sequencia++;

      //this.$store.state.produtos.push(produto);
      //this.$store.commit('adicionarProduto', produto);
      this.adicionarProduto(produto);
    },
  },

  computed: {
    quantidade() {
      return this.$store.state.parametros.quantidadePadrao;
    },

    preco() {
      return this.$store.state.parametros.precoPadrao;
    },
  },
};
</script>

<style>
.loja {
  display: flex;
  justify-content: center;
}

.loja > * {
  margin: 0px 10px;
}

input {
  font-size: 2rem;
  width: 90px;
}
</style>
