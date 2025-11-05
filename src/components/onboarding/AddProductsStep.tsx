import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Plus, Upload, Trash2, Package } from "lucide-react";
import { OnboardingData, Product } from "./OnboardingFlow";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface AddProductsStepProps {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  isFirstSubStep: boolean;
  isLastSubStep: boolean;
}

export function AddProductsStep({
  data,
  updateData,
  nextStep,
  prevStep,
}: AddProductsStepProps) {
  const [products, setProducts] = useState<Product[]>(data.products || []);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [selectedCatalogue, setSelectedCatalogue] = useState<string>("");
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleAddProduct = (catalogueId: string) => {
    setSelectedCatalogue(catalogueId);
    setNewProduct({ name: "", price: "", image: "" });
    setShowAddProductModal(true);
  };

  const handleSaveProduct = () => {
    if (newProduct.name && newProduct.price) {
      const product: Product = {
        id: Date.now().toString(),
        name: newProduct.name,
        price: newProduct.price,
        image: newProduct.image,
        catalogueId: selectedCatalogue,
      };
      
      const updatedProducts = [...products, product];
      setProducts(updatedProducts);
      setShowAddProductModal(false);
      setNewProduct({ name: "", price: "", image: "" });
    }
  };

  const handleDeleteProduct = (productId: string) => {
    const updatedProducts = products.filter((p) => p.id !== productId);
    setProducts(updatedProducts);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct({ ...newProduct, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleContinue = () => {
    updateData({ products });
    nextStep();
  };

  const getProductsForCatalogue = (catalogueId: string) => {
    return products.filter((p) => p.catalogueId === catalogueId);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl mb-2">Add Products to Your Catalogues</h2>
        <p className="text-muted-foreground">
          Add products to each of your selected catalogues. You can skip this step and add products later.
        </p>
      </div>

      {data.catalogues.length > 0 ? (
        <Tabs defaultValue={data.catalogues[0]} className="w-full">
          <TabsList className="w-full flex-wrap h-auto">
            {data.catalogues.map((catalogue) => (
              <TabsTrigger key={catalogue} value={catalogue} className="flex-1 min-w-[120px]">
                {catalogue}
                {getProductsForCatalogue(catalogue).length > 0 && (
                  <span className="ml-2 text-xs bg-primary text-primary-foreground rounded-full px-2 py-0.5">
                    {getProductsForCatalogue(catalogue).length}
                  </span>
                )}
              </TabsTrigger>
            ))}
          </TabsList>

          {data.catalogues.map((catalogue) => (
            <TabsContent key={catalogue} value={catalogue} className="space-y-4 mt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg">{catalogue} Products</h3>
                  <p className="text-sm text-muted-foreground">
                    {getProductsForCatalogue(catalogue).length} product
                    {getProductsForCatalogue(catalogue).length !== 1 ? 's' : ''} added
                  </p>
                </div>
                <Button onClick={() => handleAddProduct(catalogue)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Product
                </Button>
              </div>

              {getProductsForCatalogue(catalogue).length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {getProductsForCatalogue(catalogue).map((product) => (
                    <Card key={product.id} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="aspect-square bg-muted overflow-hidden">
                          {product.image ? (
                            <ImageWithFallback
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Package className="w-12 h-12 text-muted-foreground" />
                            </div>
                          )}
                        </div>
                        <div className="p-4 space-y-2">
                          <h4 className="truncate">{product.name}</h4>
                          <p className="text-primary">{product.price}</p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full"
                            onClick={() => handleDeleteProduct(product.id)}
                          >
                            <Trash2 className="w-3 h-3 mr-2" />
                            Remove
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="border-dashed">
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <Package className="w-12 h-12 text-muted-foreground mb-4" />
                    <h4 className="mb-2">No products yet</h4>
                    <p className="text-sm text-muted-foreground text-center mb-4">
                      Add your first product to the {catalogue} catalogue
                    </p>
                    <Button onClick={() => handleAddProduct(catalogue)} variant="outline">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Product
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          ))}
        </Tabs>
      ) : (
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <p className="text-muted-foreground">No catalogues selected</p>
          </CardContent>
        </Card>
      )}

      {/* Summary */}
      {products.length > 0 && (
        <div className="bg-muted/50 p-4 rounded-lg">
          <p className="text-sm">
            <span className="text-foreground">{products.length}</span> total product
            {products.length !== 1 ? 's' : ''} added across{' '}
            <span className="text-foreground">{data.catalogues.length}</span> catalogue
            {data.catalogues.length !== 1 ? 's' : ''}
          </p>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex gap-4">
        <Button onClick={prevStep} variant="outline" size="lg" className="flex-1">
          Back to Catalogues
        </Button>
        <Button onClick={handleContinue} size="lg" className="flex-1">
          {products.length > 0 ? 'Continue to Credentials' : 'Skip & Continue'}
        </Button>
      </div>

      {/* Add Product Modal */}
      <Dialog open={showAddProductModal} onOpenChange={setShowAddProductModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Add Product to {selectedCatalogue}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="productName">Product Name *</Label>
              <Input
                id="productName"
                placeholder="e.g., Custom Photo Mug"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="productPrice">Price *</Label>
              <Input
                id="productPrice"
                placeholder="e.g., $24.99"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label>Product Image (Optional)</Label>
              {newProduct.image ? (
                <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={newProduct.image}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <Button
                    variant="destructive"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => setNewProduct({ ...newProduct, image: "" })}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => document.getElementById("productImageInput")?.click()}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Image
                </Button>
              )}
              <input
                id="productImageInput"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddProductModal(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleSaveProduct}
              disabled={!newProduct.name || !newProduct.price}
            >
              Add Product
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
