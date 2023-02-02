import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  InputBase,
  Typography,
} from "@mui/material";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import React from "react";
import { useState } from "react";
import "./App";
import Categories from "./Categories";
import SearchIcon from "@mui/icons-material/Search";
import { alpha, styled } from "@mui/material/styles";

const Category = () => {
  const [data, setData] = useState(Categories);
  const [state, setState] = useState("");

  const filterData = (categeoryItem) => {
    const result = Categories.filter((currentData) => {
      return currentData.category === categeoryItem;
    });
    setData(result);
  };
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    margin: 10,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(40),
    backgroundColor: "Highlight",
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(40),
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  return (
    <>
      <h1>Shopping App</h1>
      <div
        style={{ display: "flex", justifyContent: "right", marginRight: 45 }}
      >
        Shop <ShoppingCartTwoToneIcon />
      </div>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          onClick={() => {
            setData(Categories);
          }}
        >
          All
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            filterData("men's clothing");
          }}
        >
          Men's Clothing
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            filterData("women's clothing");
          }}
        >
          Women's Clothing
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            filterData("electronics");
          }}
        >
          Electronics
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            filterData("jewelery");
          }}
        >
          Jewellary
        </Button>
      </Box>
      <div>
        <input
          type="search"
          onChange={(e) => {
            setState(e.target.value);
            console.log(e.target.value);
          }}
        />
      </div>
      {/* <div style={{ marginLeft: 0 }}>
        <Search onChange={(e) => {
          console.log(e.target.value);
          setState(e.target.value);
        }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            // inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </div> */}
      <div style={{ marginLeft: 80, marginTop: 20 }}>
        <Grid container>
          {data
            .filter((item) => item.category.includes(state.toLowerCase()) || item.title.includes(state.toLowerCase()))
            .map((item, ind) => {
              const { id, image, description, price, rating, category, title } =
                item;
              return (
                <div style={{ margin: 10 }} key={ind}>
                  <Grid item>
                    <Card sx={{ maxWidth: 250, height: 600 }} key={ind}>
                      <Typography>
                        <h5>
                          S.No {id} - {category}
                        </h5>
                      </Typography>
                      <CardActionArea>
                        <CardMedia component="img" height="320" image={image} />
                        <CardContent>
                          <Typography>
                            <b>{title}</b>
                          </Typography>
                          <Typography>$ {price}</Typography>
                          Rating - {rating.rate}
                        </CardContent>
                      </CardActionArea>
                      <Button style={{position:"revert-layer"}} variant="contained" color="warning">
                        <ShoppingCartTwoToneIcon /> Add to Cart
                      </Button>
                    </Card>
                  </Grid>
                </div>
              );
            })}
        </Grid>
        <br />
      </div>
    </>
  );
};

export default Category;
{
  /* <p>Category: <h2> S.No {id} - {category}</h2> </p>
              <img src={image} alt="" height={300} />
              <h3><span>Price : </span>$ {price}</h3>
              <h3>Title: {title} </h3>
              <p>Rating - {rating.rate} </p>
              <p> <b> Description:</b> {description}</p> */
}
