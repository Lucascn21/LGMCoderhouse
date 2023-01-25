import React from "react";
import "./ItemListContainer.scss";
import { Book } from "..";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

/*
Container component that Receives a Shop or Cart Component as a children to render
This component will be used as a Container Component in Shop and Cart.
*/
export default function ItemListcontainer(props) {
  return (
    <>
      {props.filteredBooks.map((book) => (
        <Grid component="section" xs={12} md={3}>
          <Item>
            <Book key={book.id} bookSection={props.pageIndex} bookData={book}>
              test
            </Book>
          </Item>
        </Grid>
      ))}
    </>
  );
}