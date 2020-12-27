import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID D6X7kDKOe8SGnASkBxiAKgrs7uba_qBgMh5sSGLu-hU',
  },
});
