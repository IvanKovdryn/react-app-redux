import axios from "axios";
import { useState, useEffect } from "react";
import { DynamicPagination } from "./pagesDetails/dynamicPagination";

export function Posts() {
  return <DynamicPagination pageName="posts" />;
}
