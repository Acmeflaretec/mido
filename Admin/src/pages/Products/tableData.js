/* eslint-disable react/prop-types */
import Box from "components/Box";
import Typography from "components/Typography";
import Avatar from "components/Avatar";
import Badge from "components/Badge";
import toast from 'react-hot-toast';
import Table from "examples/Tables/Table";
import { useGetProducts } from "queries/ProductQuery";
import { Link } from "react-router-dom";
// import { Icon } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {useDeleteProduct} from 'queries/ProductQuery'

const notify = () => toast.success('category deleted successfully.');
function Author({ image, name, desc, id }) {
  return (
    <Box component={Link} to={`/products/editProduct/${id}`} display="flex" alignItems="center" px={1} py={0.5}>
      <Box mr={2}>
        <Avatar src={image} alt={name} size="sm" variant="rounded" />
      </Box>
      <Box display="flex" flexDirection="column">
        <Typography variant="button" fontWeight="medium">
          {name}
        </Typography>
        <Typography variant="caption" color="secondary">
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}

const TableData = () => {
  const { data, isLoading } = useGetProducts({ pageNo: 1, pageCount: 100 });
  const { mutateAsync: DeleteProduct, isLoading: loading } = useDeleteProduct()

  const handleDelete = async (data) =>{
    console.log('detlete',data)
    try {
      DeleteProduct(data)
      .then((res) => {
        toast.success(res?.message ?? "deleted");
      })
      .catch((err) => {
        toast.error(err?.message ?? "Something went wrong");
      });
    } catch (error) {
      
    }

  }

  const columns = [
    { name: "product", align: "left" },
    { name: "brand", align: "left" },
    { name: "price", align: "center" },
    { name: "stock", align: "center" },
    { name: "sale_rate", align: "center" },
    { name: "discount", align: "center" },
    { name: "status", align: "center" },
    { name: "createdon", align: "center" },
    { name: "Lastupdated", align: "center" },
    { name: "action", align: "center" },
  ]

  const rows = data?.data?.map(item => ({
    product: <Author image={`${process.env.REACT_APP_API_URL}/uploads/${item?.image?.[0]}`} name={item?.name} desc={item?.subheading} id={item?._id}/>,
    brand: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {item?.brand}
      </Typography>
    ),
    status: (
      <Badge variant="gradient" badgeContent={item?.isAvailable ? 'Available' : 'Unavailable'} color={item?.isAvailable ? "success" : 'secondary'} size="xs" container />
    ),
    
    price: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {item?.price}
      </Typography>
    ),
    stock: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {item?.stock}
      </Typography>
    ),
    sale_rate: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {item?.sale_rate}
      </Typography>
    ),
    discount: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {item?.discount}
      </Typography>
    ),
    createdon: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {new Date(item?.createdAt).toDateString()}
      </Typography>
    ),
    Lastupdated: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {new Date(item?.updatedAt).toDateString()}
      </Typography>
    ),
    
    action: (
      < div style={{gap:'20px'}} >
        
        <DeleteIcon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={()=>handleDelete(item)} >
          more_vert
        </DeleteIcon>
        
        
      <Link to={`/products/editProduct/${item?._id}`}>
        <EditIcon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
          more_vert
        </EditIcon>
        
    
      </Link>
      </div>
    
    ),
  }))
  return isLoading ? <Typography fontSize={14} sx={{paddingX:5}}>loading...</Typography> : <Table columns={columns} rows={rows} />
};

export default TableData;
