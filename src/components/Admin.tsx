import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products, updateProducts } from '../data/products';
import { Edit, Trash, Save, X, Plus } from 'lucide-react';
import { Product } from '../types';

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [editingProduct, setEditingProduct] = useState<number | null>(null);
  const [editedProducts, setEditedProducts] = useState<Product[]>(products);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid password');
    }
  };

  const handleEdit = (productId: number) => {
    setEditingProduct(productId);
  };

  const handleSave = (productId: number) => {
    setEditingProduct(null);
    updateProducts(editedProducts);
    alert('Changes saved successfully!');
  };

  const handleChange = (
    productId: number,
    field: string,
    value: string | boolean | string[]
  ) => {
    setEditedProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, [field]: value } : product
      )
    );
  };

  const handleAddImage = (productId: number) => {
    const newImageUrl = prompt('Enter the URL for the new image:');
    if (newImageUrl) {
      setEditedProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === productId
            ? { ...product, images: [...product.images, newImageUrl] }
            : product
        )
      );
    }
  };

  const handleRemoveImage = (productId: number, imageIndex: number) => {
    setEditedProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? {
              ...product,
              images: product.images.filter((_, index) => index !== imageIndex),
            }
          : product
      )
    );
  };

  // NEW: Delete product handler
  const handleDelete = (productId: number) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      const filteredProducts = editedProducts.filter(
        (product) => product.id !== productId
      );
      setEditedProducts(filteredProducts);
      updateProducts(filteredProducts);
      alert('Product deleted successfully!');
      if (editingProduct === productId) {
        setEditingProduct(null);
      }
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-20">
        <div className="container py-20">
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container py-20">
        <h1 className="text-3xl font-bold mb-8">Product Management</h1>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Images
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  In Season
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Organic
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {editedProducts.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2 items-center">
                      {product.images.map((imageUrl, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={imageUrl}
                            alt={`${product.name} ${index + 1}`}
                            className="h-12 w-12 object-cover rounded"
                          />
                          {editingProduct === product.id && (
                            <button
                              onClick={() =>
                                handleRemoveImage(product.id, index)
                              }
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          )}
                        </div>
                      ))}
                      {editingProduct === product.id && (
                        <button
                          onClick={() => handleAddImage(product.id)}
                          className="h-12 w-12 border-2 border-dashed border-gray-300 rounded flex items-center justify-center text-gray-400 hover:text-gray-500 hover:border-gray-400"
                        >
                          <Plus className="h-6 w-6" />
                        </button>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {editingProduct === product.id ? (
                      <input
                        type="text"
                        value={product.name}
                        onChange={(e) =>
                          handleChange(product.id, 'name', e.target.value)
                        }
                        className="w-full px-2 py-1 border rounded"
                      />
                    ) : (
                      product.name
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {editingProduct === product.id ? (
                      <input
                        type="text"
                        value={product.category}
                        onChange={(e) =>
                          handleChange(product.id, 'category', e.target.value)
                        }
                        className="w-full px-2 py-1 border rounded"
                      />
                    ) : (
                      product.category
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={product.isSeasonalPick}
                      onChange={(e) =>
                        handleChange(product.id, 'isSeasonalPick', e.target.checked)
                      }
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={product.isOrganic}
                      onChange={(e) =>
                        handleChange(product.id, 'isOrganic', e.target.checked)
                      }
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                  </td>
                  <td className="px-6 py-4">
                    {editingProduct === product.id ? (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleSave(product.id)}
                          className="text-green-600 hover:text-green-900"
                        >
                          <Save className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => setEditingProduct(null)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(product.id)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Edit className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash className="h-5 w-5" />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
