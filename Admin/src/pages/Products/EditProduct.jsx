import { Button, Grid } from '@mui/material'
import Input from 'components/Input'
import PageLayout from 'layouts/PageLayout'
import React, { useEffect, useState } from 'react'
import Typography from 'components/Typography'
import toast from 'react-hot-toast'
import { useGetProductById } from 'queries/ProductQuery'
import { useParams } from 'react-router-dom'
import ImageList from './ImageList'
import { useUpdateProduct } from 'queries/ProductQuery'
import { useNavigate } from 'react-router-dom';


const EditProduct = () => {
   const navigate = useNavigate();
   const { id } = useParams()
   const [details, setDetails] = useState({})
   const { data, isLoading } = useGetProductById({ id });
   useEffect(() => {
      setDetails(data?.data)
   }, [data])
   const { mutateAsync: updateProduct, isLoading: loading } = useUpdateProduct()
   const handleChange = (e) => {
      setDetails(prev => ({ ...prev, [e.target.name]: e.target.value }));
   };
   useEffect(() => {
      console.log(details);
   }, [details])
   const handleSubmit = () => {
      try {
         // if (!details?.name) {
         //   return toast.error("name is required")
         // }
         // if (!details?.desc) {
         //   return toast.error("description is required")
         // }
         // if (!details?.image) {
         //   return toast.error("image is required")
         // }
         const formData = new FormData();

         const image = details?.image?.filter((image) => typeof (image) === 'string');
         console.log(image);
         formData.append('image', JSON.stringify(image));
         details?.image?.forEach((image) => {
            if (typeof (image) == 'object') {
               formData.append('images', image, image.name);
               console.log(image);
            }
         });
         for (const key in details) {
            if (details.hasOwnProperty(key) && key !== "image") {
               formData.append(key, details[key]);
             }
         }

         updateProduct(formData)
            .then((res) => {
               if (res) {
                  navigate('/products')
                  toast.success(res?.message ?? "product updated successfully");
               }
            })
            .catch((err) => {
               toast.error(err?.message ?? "Something went wrong");
            });
      } catch (error) {
         console.error(error)
      }
   }
   return (
      <PageLayout
         title={'Edit Product'}
      >
         {isLoading ? <Typography fontSize={14} sx={{ paddingX: 5 }}>loading...</Typography> :
            <Grid container spacing={5} display={'flex'} direction={'row'} p={8} >
               <Grid item container spacing={2} xs={12} sm={12} md={6} py={5}>
                  <Grid item xs={12} sm={12} md={6}>
                     <Input
                        required
                        placeholder="Item name"
                        id="name"
                        name="name"
                        value={details?.name || ''}
                        onChange={handleChange}
                     />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <Input
                        placeholder="Brand name"
                        name="brand"
                        value={details?.brand || ''}
                        onChange={handleChange}
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <Input
                        required
                        placeholder="Item subheading"
                        id="subheading"
                        name="subheading"
                        value={details?.subheading || ''}
                        onChange={handleChange}
                     />
                  </Grid>

                  <Grid item xs={12} sm={8}>
                     <Input
                        required
                        disabled
                        placeholder="Category"
                        id="Category"
                        name="Category"
                        value={details?.category?.name || ''}
                     />
                  </Grid>

                  <Grid item xs={12} sm={4}>
                     <Input
                        placeholder="Enter Quantity"
                        name="stock"
                        value={details?.stock || ''}
                        onChange={handleChange}
                     />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                     <Input
                        placeholder="MRP (Maximum Retail Price)"
                        name="price"
                        value={details?.price || ''}
                        onChange={handleChange}
                     />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                     <Input
                        placeholder="Discount (%)"
                        name="discount"
                        value={details?.discount || ''}
                        onChange={handleChange}
                     />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                     <Input
                        placeholder="Enter Sale Rate"
                        name="sale_rate"
                        value={details?.sale_rate || ''}
                        onChange={handleChange}
                     />
                  </Grid>
                 
                  <Grid item xs={12}>
                     <Input
                        id="description"
                        placeholder="Product Description"
                        name="description"
                        value={details?.description || ''}
                        onChange={handleChange}
                        multiline
                        rows={5}
                     />
                  </Grid>
                  <Grid item xs={12} sm={4} mt={'auto'}>
                     <Grid item xs={12}>
                        <Button onClick={handleSubmit}>UPDATE PRODUCT</Button>
                        {/* <Button color="secondary" onClick={handleDelete}>Delete Blog</Button> */}
                     </Grid>
                  </Grid>
               </Grid>
               <Grid item container spacing={2} xs={12} sm={12} md={6}>
                  <Grid sx={{ width: '100%' }}>
                     <ImageList data={details?.image} dispatch={setDetails} />
                  </Grid>
               </Grid>
            </Grid>}
      </PageLayout>
   )
}

export default EditProduct