import { BasicPage } from "../components/BasicPage";
import Home from "@mui/icons-material/Home";
import { useEffect } from "react";
import axiosConfig from "../configs/axiosConfig";

export const UserEvents = () => {
    return <BasicPage title="My Events" icon={<Home />} />;
};
