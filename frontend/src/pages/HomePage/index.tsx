import React from 'react';
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
  } from "@tanstack/react-table";


const HomePage: React.FC = () => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
      })
    

    return (
        <>
        </>
    );
};

export default HomePage;
