/* eslint-disable camelcase */
import axios from 'axios';

const baseUrl =
  'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros';

const endpoints = {
  verifyProducId: '/bp/products/verification',
  getProducts: '/bp/products',
  createProduct: '/bp/products',
  updateProduct: '/bp/products',
  deleteProduct: '/bp/products',
};

/** #TODO: This needs to be handle with enviromental variable for safety */
const authorId = 12345678;

export async function verifyProductById(id: string) {
  const response = await axios({
    baseURL: baseUrl,
    url: endpoints.verifyProducId,
    headers: {
      authorId,
    },
    params: {
      id,
    },
  });

  if (response.status === 200) {
    return {
      status: response.status,
      error: null,
      data: response.data,
    };
  }

  if (response.status === 400) {
    return {
      status: 400,
      error: 'Error validando authorId',
      data: null,
    };
  }

  return null;
}

export async function getProducts() {
  try {
    const response = await axios({
      baseURL: baseUrl,
      url: '/bp/products',
      headers: {
        authorId,
      },
    });
    if (response.status === 200) {
      return {
        status: 200,
        data: response.data as DataItem[],
        error: false,
      };
    }
    if (response.status === 400) {
      return {
        status: 400,
        error: 'Error validando authorId',
        data: response.data,
      };
    }

    return null;
  } catch (e) {
    console.error(e);
  }
}

export async function createProduct(data: DataItem) {
  const response = await axios({
    url: `${baseUrl}${endpoints.createProduct}`,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      authorId,
    },
    data,
  });

  if (response.status === 200) {
    return {
      status: 200,
      data: response.data as DataItem[],
      error: false,
    };
  }
  if (response.status === 400) {
    return {
      status: 400,
      error: 'Error validando authorId',
      data: response.data,
    };
  }
  return null;
}

export async function updateProduct(data: DataItem) {
  const response = await axios({
    url: `${baseUrl}${endpoints.updateProduct}`,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      authorId,
    },
    data,
  });

  if (response.status === 200) {
    return {
      status: 200,
      data: response.data,
      error: false,
    };
  }

  if (response.status === 400) {
    return {
      status: 400,
      error: 'Error validando authorId',
      data: response.data,
    };
  }

  if (response.status === 401) {
    return {
      status: 401,
      error: 'Debes ser el author del Producto para modificarlo',
      data: response.data,
    };
  }

  return null;
}

export async function removeProduct(id: string) {
  const response = await axios({
    baseURL: baseUrl,
    url: endpoints.deleteProduct,
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      authorId,
    },
    params: {
      id,
    },
  });

  if (response.status === 200) {
    return {
      status: 200,
      data: response.data,
      error: null,
    };
  }
  if (response.status === 400) {
    return {
      status: 400,
      data: response.data,
      error: 'Error validando authorId.',
    };
  }
  if (response.status === 404) {
    return {
      status: 401,
      error: 'No se encontro ningun producto con esa Id',
      data: response.data,
    };
  }

  return null;
}

const financialProductService = {
  getProducts,
  createProduct,
  updateProduct,
  removeProduct,
  verifyProductById,
};

export default financialProductService;
