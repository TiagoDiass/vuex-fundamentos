export default {
  state: {
    produtos: [],
  },

  getters: {
    valorTotal(state) {
      return state.produtos.map(p => p.quantidade * p.preco).reduce((total, atual) => total + atual, 0);
    },
  },

  actions: {
    adicionarProduto({
      commit
    }, data) {
      setTimeout(() => {
        commit('adicionarProduto', data);
      }, 700);
    },
  },

  mutations: {
    adicionarProduto(state, data) {
      state.produtos.push(data);
    },
  },
};