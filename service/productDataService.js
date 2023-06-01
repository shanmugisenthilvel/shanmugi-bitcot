import http from "../constants/http-common";

class ProductDataService {
  getAll() {
    return http.get("/productsReduer");
  }

  get(id) {
    return http.get(`/productsReducer/${id}`);
  }

  create(data) {
    return http.post("/productReducer", data);
  }

  update(id, data) {
    return http.put(`/productReducer/${id}`, data);
  }

  delete(id) {
    return http.delete(`/productReducer/${id}`);
  }

  deleteAll() {
    return http.delete(`/productReducer`);
  }

  findByTitle(title) {
    return http.get(`/productReducer?title=${title}`);
  }
}

export default new ProductDataService();