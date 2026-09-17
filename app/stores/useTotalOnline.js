import { defineStore } from 'pinia'

export const useTotalOnline = defineStore('servers', {
  state: () => ({
    servers: []
  }),
  getters: {
    totalOnline: (state) => state.servers.reduce((sum, server) => sum + server.online, 0)
  },
  actions: {
    async fetchServers() {
      const res = await fetch('/api/servers')
      this.servers = await res.json()
    }
  }
});